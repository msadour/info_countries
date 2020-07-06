from typing import Any

from rest_framework import viewsets
from django.db.models import Q
from rest_framework.request import Request
from rest_framework.response import Response

from .models import Country
from .permissions import CountryPermissions
from .serializers import CountrySerializer


class CountryViewSet(viewsets.ModelViewSet):
    queryset = Country.objects.all()
    serializer_class = CountrySerializer
    permission_classes = [CountryPermissions,]

    def list(self, request: Request, *args: Any, **kwargs: Any) -> Response:
        """
        List of countries.

        Args:
            request: request sent by the client.
            args: Variable length argument list.
            options: Arbitrary keyword arguments.

        Returns:
            Response from the server.
        """
        if request.query_params:
            search = request.query_params
            self.queryset = self.queryset.filter(Q(name__contains=search["search"]))
            serializer = CountrySerializer(self.queryset, many=True)
            return Response(serializer.data, status=200)
        return super().list(request, *args, **kwargs)

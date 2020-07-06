from rest_framework import viewsets

from .models import Country
from .permissions import CountryPermissions
from .serializers import CountrySerializer


class CountryViewSet(viewsets.ModelViewSet):
    queryset = Country.objects.all()
    serializer_class = CountrySerializer
    permission_classes = [CountryPermissions,]

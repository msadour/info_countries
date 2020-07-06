from typing import Any

from rest_framework import permissions
from rest_framework.request import Request
from rest_framework.viewsets import ModelViewSet


class CountryPermissions(permissions.BasePermission):
    def has_permission(self, request: Request, view: ModelViewSet) -> Any:
        """Check permission for CRUD.

        Args:
            request: request sent by the client.
            view: Variable length argument list.

        Returns:
            Boolean that check if user has permission for CRUD.
        """
        if request.method == "GET":
            return True
        return False

    def has_object_permission(self, request: Request, view: ModelViewSet, obj: Any) -> Any:
        """Check permission for CRUD.

        Args:
            request: request sent by the client.
            view: Variable length argument list.

        Returns:
            Boolean that check if user has permission for CRUD.
        """
        if request.method == "GET":
            return True
        return False

"""Command for init the databases."""

from typing import Any

from django.core.management.base import BaseCommand

from api_country.models import Country
from api_country.scrapper import feed_database


class Command(BaseCommand):
    """Class command."""

    def handle(self, *args: Any, **options: Any) -> None:
        """Execute the command that create book(s).

        Args:
            args: Variable length argument list.
            options: Arbitrary keyword arguments.
        """
        Country.objects.all().delete()

        try:
            feed_database()
        except Exception as e:
            Country.objects.all().delete()
            self.stdout.write(e)
        else:
            self.stdout.write("The database has been (re)initlialize.")

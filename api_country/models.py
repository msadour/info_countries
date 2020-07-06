from django.db import models


class Country(models.Model):
    name = models.CharField(max_length=255)
    population = models.CharField(max_length=255)
    capital = models.CharField(max_length=255)
    area = models.CharField(max_length=255)

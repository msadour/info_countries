from rest_framework.routers import DefaultRouter

from api_country.views import CountryViewSet

router = DefaultRouter()
router.register(r"country", CountryViewSet, basename="country")

urlpatterns = router.urls

from django.urls import path # type: ignore
from .views import *
from rest_framework.routers import DefaultRouter # type: ignore

router = DefaultRouter()
router.register('projects', ProjectViewSet, basename='projects')    

urlpatterns = router.urls

# urlpatterns = [
#     path('', home)
# ]
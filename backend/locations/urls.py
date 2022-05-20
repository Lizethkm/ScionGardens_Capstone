from . import views
from django.urls import path

urlpatterns = [
    path('all/', views.get_all_locations),
    path('', views.locations_details),
    path('<int:pk>/', views.retrieve_location)
]
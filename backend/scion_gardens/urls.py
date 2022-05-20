from . import views
from django.urls import path


urlpatterns = [
    path('all/', views.get_all_plants),
    path('', views.get_plantcollection_details),
    path('<int:pk>/', views.retrieve_plantcollection)
]

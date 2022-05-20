from nturl2path import url2pathname
from . import views
from django.urls import path


urlpatterns = [
    path('all/', views.get_all_plants),
    path('', views.get_plantcollection_details)
]

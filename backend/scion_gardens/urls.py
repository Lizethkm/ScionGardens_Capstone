from nturl2path import url2pathname
from . import views
from django.urls import path


urlpatterns = [
    path('<int:pk>/', views.get_plantcollection_details)
]

from django.urls import path
from . import views

urlpatterns = [
    path('all/', views.get_all_priorities),
    path('', views.priorities_details),
    path('<int:pk>/', views.retrieve_priority)
]
from django.urls import path
from . import views

urlpatterns = [
    path('all/', views.get_all_reminders),
    path('', views.reminders_details),
    path('<int:pk>/', views.retrieve_reminder)

]
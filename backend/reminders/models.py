from datetime import timedelta
from pyexpat import model
from django.db import models
from django.forms import DateTimeField
from pytz import timezone
from authentication.models import User
from scion_gardens.models import PlantCollection



class Reminder(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    plant_plant = models.ForeignKey(PlantCollection, related_name="plant_plant", blank=True, null=True, on_delete=models.CASCADE)
    priority = models.IntegerField(default=0)
    reminder = models.CharField(max_length=500)
    created_date = models.DateField(auto_now_add=True)
    updated_date = models.DateField(auto_now=True)
    expired_date = models.DateField()
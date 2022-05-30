from django.db import models
from pytz import timezone
from authentication.models import User
from scion_gardens.models import PlantCollection

# Create your models here.


class Reminder(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    plant = models.ForeignKey(PlantCollection, blank=True, null=True, on_delete=models.CASCADE)
    priority = models.IntegerField(default=0)
    reminder = models.CharField(max_length=500)
    created_date = models.DateTimeField(auto_now_add=True)
    updated_date = models.DateTimeField(auto_now=True)
    expired_date = models.DateTimeField()

    


 
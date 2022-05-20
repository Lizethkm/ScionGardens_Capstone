from django.db import models
from authentication.models import User
from scion_gardens.models import PlantCollection

# Create your models here.


class Reminder(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    plant = models.ForeignKey(PlantCollection, blank=True, null=True, on_delete=models.CASCADE)
    reminder = models.CharField(max_length=500)
 
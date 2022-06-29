from django.db import models
from authentication.models import User

# Create your models here.

class PlantCollection(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    plant = models.CharField(max_length=250)
    sunlight = models.CharField(max_length=250)
    water = models.CharField(max_length=250)
    maintenance = models.CharField(max_length=300)
    location = models.CharField(max_length=250)
    





from django.db import models
from authentication.models import User
# from locations.models import Location

# Create your models here.

class PlantCollection(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    plant = models.CharField(max_length=250)
    # location = models.ForeignKey(Location, blank= True, null= True, on_delete=models.CASCADE) *** Cannot have location before intialization plus location will have plant ID
    sunlight = models.CharField(max_length=250)
    water = models.CharField(max_length=250)
    maintenance = models.CharField(max_length=300)
    





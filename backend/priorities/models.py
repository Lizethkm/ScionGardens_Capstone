from django.db import models
from authentication.models import User
# from scion_gardens.models import PlantCollection
from reminders.models import Reminder

# Create your models here.

class Priority(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    # plant = models.ForeignKey(PlantCollection, blank=True, null=True, on_delete=models.CASCADE) **** Priority will be set to reminder and reminder is already set to a plant
    reminder = models.ForeignKey(Reminder, blank=True, null=True, on_delete=models.CASCADE)
    priority = models.IntegerField(default=0)

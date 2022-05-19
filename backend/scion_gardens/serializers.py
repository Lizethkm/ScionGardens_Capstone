from rest_framework import serializers
from .models import PlantCollection
from .models import Reminder
from .models import Priority





class PlantCollectionSerializer(serializers.ModelSerializer):
    class Meta:
        model = PlantCollection
        fields =["id", "user", "plant","location", "sunlight", "water", "maintenance"]




class ReminderSerializer(serializers.ModelSerializer):
    class Meta:
        model = Reminder
        fields =["id", "user", "plant", "reminder"]





class PrioritySerializer(serializers.ModelSerializer):
    class Meta:
        model = Priority
        fields =["id", "user", "plant", "reminder", "priority"]

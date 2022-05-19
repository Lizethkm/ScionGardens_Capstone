from rest_framework import serializers
from .models import PlantCollection
from .models import Reminders
from .models import Priority





class PlantCollectionSerializer(serializers.ModelSerializer):
    class Meta:
        model = PlantCollection
        fields =["id", "user", "plant","location", "sunlight", "water", "maintenance"]




class RemindersSerializer(serializers.ModelSerializer):
    class Meta:
        model = Reminders
        fields =["id", "user", "plant", "reminder"]





class PrioritySerializer(serializers.ModelSerializer):
    class Meta:
        model = Priority
        fields =["id", "user", "plant", "reminder", "priority"]

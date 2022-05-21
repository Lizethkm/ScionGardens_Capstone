from rest_framework import serializers
from .models import Reminder



class ReminderSerializer(serializers.ModelSerializer):
    class Meta:
        model = Reminder
        fields =["id", "reminder", "plant", "plant_id"]
        depth = 1
    plant_id = serializers.IntegerField(write_only=True)
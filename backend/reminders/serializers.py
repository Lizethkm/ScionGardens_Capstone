from rest_framework import serializers
from .models import Reminder



class ReminderSerializer(serializers.ModelSerializer):
    class Meta:
        model = Reminder
        fields =["id", "user", "plant", "plant_id", "reminder"]
        depth = 1
    plant_id = serializers.IntegerField(write_only=True)
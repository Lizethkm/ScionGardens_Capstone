from rest_framework import serializers
from .models import Priority




class PrioritySerializer(serializers.ModelSerializer):
    class Meta:
        model = Priority
        fields =["id", "user", "reminder", "reminder_id", "priority"]
        depth = 1
    reminder_id = serializers.IntegerField(write_only=True)

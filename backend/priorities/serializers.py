from rest_framework import serializers
from .models import Priority




class PrioritySerializer(serializers.ModelSerializer):
    class Meta:
        model = Priority
        fields =["id","priority", "reminder", "reminder_id"]
        depth = 1
    reminder_id = serializers.IntegerField(write_only=True)

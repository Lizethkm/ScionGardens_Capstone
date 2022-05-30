from rest_framework import serializers
from .models import Reminder



class ReminderSerializer(serializers.ModelSerializer):
    class Meta:
        model = Reminder
        fields =["id", "reminder", "plant", "plant_name", "priority", "created_date", "updated_date", "expired_date"]
        # depth = 1

    plant_name = serializers.SerializerMethodField("get_plant_name")

    def get_plant_name(self, obj):
        return obj.plant.plant


    # plant_id = serializers.IntegerField(write_only=True)
 
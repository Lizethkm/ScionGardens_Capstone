from rest_framework import serializers
from .models import Reminder
from scion_gardens.models import PlantCollection



class ReminderSerializer(serializers.ModelSerializer):

    plant = serializers.SlugRelatedField(slug_field="plant", queryset=PlantCollection.objects.all())

    class Meta:
        model = Reminder
        fields =["id", "reminder", "plant", "priority", "created_date", "updated_date", "expired_date"]
        # depth = 1

    # plant_name = serializers.SerializerMethodField("get_plant_name")

    # def get_plant_name(self, obj):
    #     return obj.plant.plant


    # plant_id = serializers.IntegerField(write_only=True)
 
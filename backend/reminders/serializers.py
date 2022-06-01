from rest_framework import serializers
from .models import Reminder
from scion_gardens.models import PlantCollection
# from drf_jwt_backend.settings import DATETIME_FORMAT



class ReminderSerializer(serializers.ModelSerializer):

    plant_plant = serializers.SlugRelatedField(slug_field="plant", queryset=PlantCollection.objects.all())
    # expired_date = serializers.DateTimeField(format=DATETIME_FORMAT)

    class Meta:
        model = Reminder
        fields =["id", "reminder", "plant_plant", "priority", "created_date", "updated_date", "expired_date"]
        # depth = 1

    # plant_name = serializers.SerializerMethodField("get_plant_name")

    # def get_plant_name(self, obj):
    #     return obj.plant.plant


    # plant_id = serializers.IntegerField(write_only=True)
 
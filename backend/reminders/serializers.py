from rest_framework import serializers
from .models import Reminder
from scion_gardens.models import PlantCollection
# from drf_jwt_backend.settings import DATETIME_FORMAT



class ReminderSerializer(serializers.ModelSerializer):

    plant_plant = serializers.SlugRelatedField(slug_field="plant", queryset=PlantCollection.objects.all())
    

    class Meta:
        model = Reminder
        fields =["id", "reminder", "plant_plant", "priority", "created_date", "updated_date", "expired_date"]

 
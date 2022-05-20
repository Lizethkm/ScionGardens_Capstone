from rest_framework import serializers
from .models import Location



class LocationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Location
        fields = ["user", "plant", "plant_id", "location"]

    plant_id = serializers.IntegerField(write_only=True)
   
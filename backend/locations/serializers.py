from rest_framework import serializers
from .models import Location



class LocationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Location
        fields = [ "location", "plant_id"]
        depth=1 

    # plant_id = serializers.IntegerField(write_only=True)
   
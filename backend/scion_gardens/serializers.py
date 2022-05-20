from rest_framework import serializers
from .models import PlantCollection






class PlantCollectionSerializer(serializers.ModelSerializer):
    class Meta:
        model = PlantCollection
        fields =["id", "user", "plant", "sunlight", "water", "maintenance"]
        
    # location_id = serializers.IntegerField(write_only=True) "location", "location_id",













from rest_framework import serializers
from .models import PlantCollection






class PlantCollectionSerializer(serializers.ModelSerializer):
    class Meta:
        model = PlantCollection
        fields =["id", "plant", "sunlight", "water", "maintenance", "location", "user_id"]
        
    # location_id = serializers.IntegerField(write_only=True) "location", "location_id",













from rest_framework import serializers
from .models import Location
from scion_gardens.models import PlantCollection



class LocationSerializer(serializers.ModelSerializer):

  plant_name = serializers.SlugRelatedField( slug_field="plant", queryset=PlantCollection.objects.all())

  class Meta:
    model = Location
    fields = ["id", "location", "plant_name"]

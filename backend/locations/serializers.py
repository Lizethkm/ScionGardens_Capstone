from rest_framework import serializers
from .models import Location
from scion_gardens.models import PlantCollection



class LocationSerializer(serializers.ModelSerializer):

  plant_name = serializers.SlugRelatedField( slug_field="plant", queryset=PlantCollection.objects.all())

  class Meta:
    model = Location
    fields = ["id", "location", "plant_name"]
    # depth=1 

  # plant_name = serializers.SerializerMethodField("get_plant_name")

  # def get_plant_name(self, obj):
  #   return obj.plant.plant  


  # plant_id = serializers.IntegerField(write_only=True)
   
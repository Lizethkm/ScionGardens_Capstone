from rest_framework import serializers
from .models import Location



class LocationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Location
        fields = ["id", "location", "plant", "plant_name"]
        # depth=1 

    plant_name = serializers.SerializerMethodField("get_plant_name")

    def get_plant_name(self, obj):
      return obj.plant.plant  


    # plant_id = serializers.IntegerField(write_only=True)
   
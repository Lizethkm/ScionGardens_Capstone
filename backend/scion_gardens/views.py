from tokenize import PlainToken
from django.shortcuts import get_object_or_404
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework import status
from .models import PlantCollection
from .models import Reminder
from .models import Priority
from .serializers import PlantCollectionSerializer
from .serializers import ReminderSerializer
from .serializers import PrioritySerializer
from rest_framework.permissions import IsAuthenticated, AllowAny

from scion_gardens import serializers


# Create your views here.

@api_view(['GET'])
@permission_classes([AllowAny])
def get_all_plants(request):
    plants = PlantCollection.objects.all()
    serializer = PlantCollectionSerializer(plants, many=True)
    return Response(serializer.data)

@api_view(["GET"])
@permission_classes([IsAuthenticated])
def get_plantcollection_details(request):
    print( "User", f"{request.user.id}")
    if request.method == "GET":
        plant_collections = PlantCollection.objects.filter(user_id=request.user.id)
        
        serializer = PlantCollectionSerializer(plant_collections, many=True)
        return Response(serializer.data)



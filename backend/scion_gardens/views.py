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


# Create your views here.

@api_view(["GET"])
@permission_classes([IsAuthenticated])
def get_plantcollection_details(request, pk):
    plant_collection_protected = get_object_or_404(PlantCollection, pk=pk)
    print( "User", f"{request.user.id}")
    if request.method == "GET":
        
        serializer = PlantCollectionSerializer(plant_collection_protected, many=True)
        return Response(serializer.data)



from django.shortcuts import get_object_or_404
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework import status
from .models import PlantCollection
from .serializers import PlantCollectionSerializer
from rest_framework.permissions import IsAuthenticated, AllowAny



# Create your views here.

@api_view(['GET'])
@permission_classes([AllowAny])
def get_all_plants(request):
    plants = PlantCollection.objects.all()
    serializer = PlantCollectionSerializer(plants, many=True)
    return Response(serializer.data)

@api_view(["GET", 'POST'])
@permission_classes([IsAuthenticated])
def get_plantcollection_details(request):
    print( "User", f"{request.user.id}")
    if request.method == "GET":
        plant_collections = PlantCollection.objects.filter(user_id=request.user.id)
        
        serializer = PlantCollectionSerializer(plant_collections, many=True)
        return Response(serializer.data)

    if request.method == 'POST':
        serializer = PlantCollectionSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save(user=request.user)
        return Response(serializer.data, status=status.HTTP_201_CREATED)
       

@api_view(['GET','PUT','DELETE'])
@permission_classes([IsAuthenticated])
def retrieve_plantcollection(request, pk):

    plant = get_object_or_404(PlantCollection, pk=pk)

    if request.method == 'GET':
        serializer = PlantCollectionSerializer(plant)
        return Response(serializer.data, status=status.HTTP_200_OK)


    if request.method == 'PUT':
        serializer = PlantCollectionSerializer(plant, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_200_OK)

    if request.method == 'DELETE':
        plant.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
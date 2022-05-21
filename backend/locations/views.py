from django.shortcuts import get_object_or_404
from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes
from .models import Location
from .serializers import LocationSerializer



# Create your views here.


@api_view(['GET'])
@permission_classes([AllowAny])
def get_all_locations(request):
    locations = Location.objects.all()
    serializer = LocationSerializer(locations, many=True)
    return Response(serializer.data)


@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated])
def locations_details(request):
    print('User', f'{request.user.id} {request.user.email}' )

    if request.method == 'GET':
        locations = Location.objects.filter(user_id=request.user.id)
        serializer = LocationSerializer(locations, many=True)
        return Response(serializer.data)

    if request.method == 'POST':
        serializer = LocationSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save(user=request.user)
        return Response(serializer.data, status=status.HTTP_201_CREATED)


@api_view(['GET','PUT','DELETE'])
@permission_classes([IsAuthenticated])
def retrieve_location(request, pk):

    location = get_object_or_404(Location, pk=pk)

    if request.method == 'GET':
        serializer = LocationSerializer(location)
        return Response(serializer.data, status=status.HTTP_200_OK)

    if request.method == 'PUT':
        serializer = LocationSerializer(location, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_200_OK)

    if request.method == 'DELETE':
        location.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


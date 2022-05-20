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
        if serializer.is_valid():
            serializer.save(user=request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
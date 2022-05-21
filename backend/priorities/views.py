from django.shortcuts import get_object_or_404
from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes
from .models import Priority
from .serializers import PrioritySerializer


# Create your views here.

@api_view(['GET'])
@permission_classes([AllowAny])
def get_all_priorities(request):

    priorities = Priority.objects.all()
    serializer = PrioritySerializer(priorities, many=True)
    return Response(serializer.data)



@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated])
def priorities_details(request):

    if request.method == 'GET':
        priorities = Priority.objects.filter(user_id=request.user.id)
        serializer = PrioritySerializer(priorities, many=True)
        return Response(serializer.data)

    if request.method == 'POST':
        serializer = PrioritySerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save(user_id=request.user.id)
        return Response(serializer.data, status=status.HTTP_201_CREATED)


@api_view(['GET', 'PUT', 'DELETE'])
@permission_classes([IsAuthenticated])
def retrieve_priority(request, pk):

    priority = get_object_or_404(Priority, pk=pk)

    if request.method == 'GET':
        serializer = PrioritySerializer(priority)
        return Response(serializer.data, status=status.HTTP_200_OK)

    if request.method == 'PUT':
        serializer = PrioritySerializer(priority, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save(user_id=request.user.id)
        return Response(serializer.data, status=status.HTTP_202_ACCEPTED)

    if request.method == 'DELETE':
        priority.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
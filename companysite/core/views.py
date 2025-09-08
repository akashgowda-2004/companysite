from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth.models import User
from .models import Service, ContactMessage
from .serializers import ServiceSerializer, ContactSerializer, RegisterSerializer

# ---------------------------
# Services endpoint
# ---------------------------
@api_view(['GET'])
@permission_classes([AllowAny])
def services(request):
    services_qs = Service.objects.all()
    serializer = ServiceSerializer(services_qs, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)

# ---------------------------
# Contact message endpoint
# ---------------------------
@api_view(['POST'])
@permission_classes([AllowAny])
def contact(request):
    serializer = ContactSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response({"message": "Message received"}, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# ---------------------------
# Register endpoint
# ---------------------------
@api_view(['POST'])
@permission_classes([AllowAny])
def register(request):
    serializer = RegisterSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response({"message": "User created successfully"}, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# ---------------------------
# Profile endpoint
# ---------------------------
@api_view(['GET'])
@permission_classes([IsAuthenticated])
def profile(request):
    user = request.user
    return Response({
        "id": user.id,
        "username": user.username,
        "email": user.email
    }, status=status.HTTP_200_OK)

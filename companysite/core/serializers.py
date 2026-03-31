from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Service, Career, JobApplication, ContactMessage, ChatMessage

# ------------------- Service -------------------
class ServiceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Service
        fields = ['id', 'title', 'description', 'image']

# ------------------- Job Application -------------------
class JobApplicationSerializer(serializers.ModelSerializer):
    class Meta:
        model = JobApplication
        fields = ['id', 'career', 'name', 'email', 'resume', 'submitted_at']
        extra_kwargs = {'resume': {'required': False, 'allow_null': True}}

# ------------------- Career with applicants -------------------
class CareerSerializer(serializers.ModelSerializer):
    applications = JobApplicationSerializer(many=True, read_only=True)

    class Meta:
        model = Career
        fields = ['id', 'title', 'description', 'experience', 'skills', 'applications']

# ------------------- Contact -------------------
class ContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContactMessage
        fields = ['id', 'name', 'phone', 'email', 'message']

# ------------------- Chat -------------------
class ChatMessageSerializer(serializers.ModelSerializer):
    user = serializers.StringRelatedField(read_only=True)

    class Meta:
        model = ChatMessage
        fields = ['id', 'user', 'message', 'created_at']

# ------------------- User Registration -------------------
class RegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True, required=True)

    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'password']

    def create(self, validated_data):
        return User.objects.create_user(
            username=validated_data['username'],
            email=validated_data.get('email', ''),
            password=validated_data['password']
        )

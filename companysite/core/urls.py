from django.urls import path, include
from rest_framework.routers import DefaultRouter
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

from .views import (
    ServiceViewSet,
    CareerViewSet,
    ContactViewSet,
    JobApplicationViewSet,
    ChatMessageViewSet,
    register,
    profile
)

router = DefaultRouter()
router.register(r'services', ServiceViewSet, basename='service')
router.register(r'careers', CareerViewSet, basename='career')
router.register(r'contacts', ContactViewSet, basename='contact')
router.register(r'applications', JobApplicationViewSet, basename='application')
router.register(r'chats', ChatMessageViewSet, basename='chat')

urlpatterns = [
    path('', include(router.urls)),  # All router URLs
    path('register/', register, name='register'),
    path('login/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('profile/', profile, name='profile'),
]

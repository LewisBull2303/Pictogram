"""
URL configuration for backend project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""

from django.urls import path

from django.conf import settings
from django.conf.urls.static import static

from .views import get_user_profile_data, CustomTokenObtainPairView, CustomTokenRefreshView, register, auhtenticated, toggleFollow, get_users_posts, toggleLike, create_post

urlpatterns = [
    path('user_data/<str:pk>/', get_user_profile_data),
    path('token/', CustomTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', CustomTokenRefreshView.as_view(), name='token_refresh'),
    path('register/', register),
    path('authenticated/', auhtenticated),
    path('toggle_follow/', toggleFollow),
    path('posts/<str:pk>/', get_users_posts),
    path('toggleLike/', toggleLike),
    path('create_post/', create_post)
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

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

# Import necessary modules for URL configuration
from django.urls import path
from django.conf import settings
from django.conf.urls.static import static

# Import the views that correspond to the different URL paths
from .views import get_user_profile_data, CustomTokenObtainPairView, CustomTokenRefreshView, register, auhtenticated, toggleFollow, get_users_posts, toggleLike, create_post, get_posts, search_user, logout, update_user_details

# Define URL patterns for various endpoints
urlpatterns = [
    # Route to get user profile data using a dynamic parameter (pk)
    path('user_data/<str:pk>/', get_user_profile_data),
    
    # Route for obtaining an authentication token
    path('token/', CustomTokenObtainPairView.as_view(), name='token_obtain_pair'),
    
    # Route for refreshing the authentication token
    path('token/refresh/', CustomTokenRefreshView.as_view(), name='token_refresh'),
    
    # Route to register a new user
    path('register/', register),
    
    # Route to check if the user is authenticated
    path('authenticated/', auhtenticated),
    
    # Route to follow or unfollow a user
    path('toggle_follow/', toggleFollow),
    
    # Route to get posts of a specific user (based on user id)
    path('posts/<str:pk>/', get_users_posts),
    
    # Route to toggle like/unlike on a post
    path('toggleLike/', toggleLike),
    
    # Route to create a new post
    path('create_post/', create_post),
    
    # Route to retrieve all posts
    path('get_posts/', get_posts),
    
    # Route to search for a user
    path('search/', search_user),
    
    # Route to update user details
    path('update_user/', update_user_details),
    
    # Route to log out a user
    path('logout/', logout)
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)  # Serve media files during development

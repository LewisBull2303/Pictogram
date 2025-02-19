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

# Import necessary modules and classes for routing URLs
from django.contrib import admin
from django.urls import path, include
from django.views.generic import TemplateView

# Define the URL patterns for routing requests
urlpatterns = [
    # Route the home URL ('') to the TemplateView that serves 'index.html'
    path('', TemplateView.as_view(template_name='index.html')),
    
    # Route the admin URL to the Django admin interface
    path("admin/", admin.site.urls),
    
    # Include URLs from the 'base' app under the '/api/' path
    path('api/', include('base.urls')),
]

# Define a custom handler for 404 errors to display 'index.html'
handler404 = TemplateView.as_view(template_name='index.html')
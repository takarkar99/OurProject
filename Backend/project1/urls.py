"""loan_for_company_interior URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.1/topics/http/urls/
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
from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from admin_app.views import SignupApi, fetchRoll
from rest_framework_simplejwt.views import token_obtain_pair
from rest_framework.routers import DefaultRouter
from admin_app.views import FamilyApi, BankApi

router = DefaultRouter()
router.register('family', FamilyApi, basename='family' )
router.register('bank', BankApi, basename='bank')


urlpatterns = [
    path('admin/', admin.site.urls),
    path('application/', include('application_generation.urls')),
    path('loansanction/', include('loan_sanctioning.urls')),
    path('signup/', SignupApi.as_view()),
    path('access_token/', token_obtain_pair),
    path('api/', include(router.urls)),
    path('disburstment/', include('disburstment.urls')),
    path('fetchrole/<str:email>/', fetchRoll.as_view()),
]+static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

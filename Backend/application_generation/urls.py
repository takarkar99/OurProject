from django.urls import path
from .import views

urlpatterns = [
    path('applicationcreate/', views.ApplicationAddApi.as_view()),
    path('applicationdetail/<int:pk>/', views.ApplicationShowApi.as_view()),
    path('guarantorcreate/', views.GuarantorAddApi.as_view()),
    path('guarantordetail/<int:pk>/', views.GuarantorShowApi.as_view()),
    path('documentcreate/', views.DocumentAddApi.as_view()),
    path('documentdetail/<int:pk>/', views.DocumentShowApi.as_view())
]
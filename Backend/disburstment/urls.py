from django.urls import path
from .import views

urlpatterns = [
    path('defaultercreate/', views.DefaulterAddApi.as_view()),
    path('defaulterdetail/<int:pk>/', views.DefaulterShowApi.as_view()),
    path('installmentcreate/', views.InstallmentAddApi.as_view()),
    path('installmentdetail/<int:pk>/', views.InstallmentShowApi.as_view()),
    path('disburstmentcreate/', views.DisbursementAddApi.as_view()),
    path('disburstmentdetail/<int:pk>/', views.DisbursementShowApi.as_view())
]
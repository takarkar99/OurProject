from django.urls import path
from .import views

urlpatterns = [
    path('loancreate/', views.LoanAddApi.as_view()),
    path('loandetail/<int:pk>/', views.LoanShowApi.as_view()),
    path('vendorcreate/', views.VendorAddApi.as_view()),
    path('vendordetail/<int:pk>/', views.VendorShowApi.as_view())
]
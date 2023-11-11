from django.shortcuts import render
from rest_framework.views import APIView
from .serializers import UserSerializer, FamilySerializer, BankSerilizer
from .models import User, Family, Bank
from rest_framework.response import Response
from rest_framework import status
from rest_framework.viewsets import ModelViewSet
from rest_framework_simplejwt.authentication import JWTAuthentication
from rest_framework.permissions import DjangoObjectPermissions
from .permissions import IsAdmin, IsCustomer, IsLoanRepresentative, LoanPermission
from rest_framework.parsers import FormParser, MultiPartParser
from django.shortcuts import get_object_or_404


class fetchRoll(APIView):
    def get(self, request, email=None):
        # #print(email)
        # data = User.objects.filter(email=email).values()
        # serializer = UserSerializer(data, many=True)
        # return Response(data = serializer.data)


        if email:
            obj = get_object_or_404(User, email=email)
            serializer = UserSerializer(obj)
            return Response(data=serializer.data, status=status.HTTP_200_OK)
        return Response(data={'msg': 'please give the Email!!'}, status=status.HTTP_400_BAD_REQUEST)

class SignupApi(APIView):
    
    def post(self, request):
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(data=serializer.data, status=status.HTTP_201_CREATED)
        return Response(data=serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    
    def get(self, request):
        objs = User.objects.all()
        serializer = UserSerializer(objs, many=True)
        return Response(data=serializer.data, status=status.HTTP_200_OK)


class FamilyApi(ModelViewSet):
    serializer_class = FamilySerializer
    queryset = Family.objects.all()
   
    
class BankApi(ModelViewSet):
    serializer_class = BankSerilizer
    queryset = Bank.objects.all()
    parser_classes = (MultiPartParser, FormParser)
   

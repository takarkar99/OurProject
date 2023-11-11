from rest_framework import generics
from .serializers import LoanSerializer, VendorSerializer
from .models import Loan, Vendor
from rest_framework.response import Response
from rest_framework.views import APIView
from django.shortcuts import get_object_or_404
from rest_framework import status
import logging
from rest_framework.parsers import FormParser, MultiPartParser
# Create your views here.

logger = logging.getLogger('django')

#LOAN API

class LoanAddApi(APIView):
    parser_classes = (MultiPartParser, FormParser)

    def post(self, request):
        serializer = LoanSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            logger.info(' LOAN DATA IS ADDED SUCCESSFULLY!!!!!!!')
            return Response(data=serializer.data, status=status.HTTP_201_CREATED)
        return Response(data=serializer._errors, status=status.HTTP_400_BAD_REQUEST)
    
    def get(self, request):
        obj = Loan.objects.all()
        logger.info('LOAN DATA IS RETRIEVED SUCCESSFULLY!!!!!!!')
        serializer = LoanSerializer(obj, many=True)
        return Response(data=serializer.data, status=status.HTTP_200_OK)
    
class LoanShowApi(APIView):

    def get(self, request, pk=None):
        if pk:
            obj = get_object_or_404(Loan, pk=pk)
            logger.info('SIGLE LOAN DATA RETRIEVED SUCCESSFULLY!!!!!!!')
            serializer = LoanSerializer(obj)
            return Response(data=serializer.data, status=status.HTTP_200_OK)
        return Response(data={'msg': 'please give the ID!!'}, status=status.HTTP_400_BAD_REQUEST)
    
    def put(self, request, pk=None):
        if pk:
            obj = get_object_or_404(Loan, pk=pk)
            serializer = LoanSerializer(data=request.data, instance=obj)
            if serializer.is_valid():
                serializer.save()
                logger.info('WHOLW LOAN DATA IS UPDATED SUCCESSFULLY!!!!!!!')
                return Response(data=serializer.data, status=status.HTTP_205_RESET_CONTENT)
            return Response(data=serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        return Response(data={'msg': 'please give the ID!!!'}, status=status.HTTP_400_BAD_REQUEST)
    
    def patch(self, request, pk=None):
        if pk:
            obj = get_object_or_404(Loan, pk=pk)
            serializer = LoanSerializer(data=request.data, instance=obj, partial=True)
            if serializer.is_valid():
                serializer.save()
                logger.info('SINGLE INFO OF LOAN DATA UPDATED SUCCESSFULLY!!!!!!!')
                return Response(data=serializer.data, status=status.HTTP_205_RESET_CONTENT)
            return Response(data=serializer._errors, status=status.HTTP_400_BAD_REQUEST)
        return Response(data={'msg': 'please provide ID!!!'}, status=status.HTTP_400_BAD_REQUEST)
    
    def delete(self, request, pk=None):
        if pk:
            obj = get_object_or_404(Loan, pk=pk)
            obj.delete()
            logger.info('LOAN DATA IS DELETED SUCCESSFULLY!!!!!!!')
            return Response(data={'msg': 'Deleted Successfully!!!'}, status=status.HTTP_204_NO_CONTENT)
        return Response(data={'msg': 'please give the ID!!!'}, status=status.HTTP_400_BAD_REQUEST)




#VENDOR API

class VendorAddApi(APIView):
    parser_classes = (MultiPartParser, FormParser)

    def post(self, request):
        serializer = VendorSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            logger.info('VENDOR IS ADDED SUCCESSFULLY!!!!!!!')
            return Response(data=serializer.data, status=status.HTTP_201_CREATED)
        return Response(data=serializer._errors, status=status.HTTP_400_BAD_REQUEST)
    
    def get(self, request):
        obj = Vendor.objects.all()
        logger.info('VENDOR IS RETRIEVED SUCCESSFULLY!!!!!!!')
        serializer = VendorSerializer(obj, many=True)
        return Response(data=serializer.data, status=status.HTTP_200_OK)
    
class VendorShowApi(APIView):

    def get(self, request, pk=None):
        if pk:
            obj = get_object_or_404(Vendor, pk=pk)
            logger.info('SIGLE VENDOR RETRIEVED SUCCESSFULLY!!!!!!!')
            serializer = VendorSerializer(obj)
            return Response(data=serializer.data, status=status.HTTP_200_OK)
        return Response(data={'msg': 'please give the ID!!'}, status=status.HTTP_400_BAD_REQUEST)
    
    def put(self, request, pk=None):
        if pk:
            obj = get_object_or_404(Vendor, pk=pk)
            serializer = VendorSerializer(data=request.data, instance=obj)
            if serializer.is_valid():
                serializer.save()
                logger.info('WHOLW VENDOR IS UPDATED SUCCESSFULLY!!!!!!!')
                return Response(data=serializer.data, status=status.HTTP_205_RESET_CONTENT)
            return Response(data=serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        return Response(data={'msg': 'please give the ID!!!'}, status=status.HTTP_400_BAD_REQUEST)
    
    def patch(self, request, pk=None):
        if pk:
            obj = get_object_or_404(Vendor, pk=pk)
            serializer = VendorSerializer(data=request.data, instance=obj, partial=True)
            if serializer.is_valid():
                serializer.save()
                logger.info('SINGLE INFO OF VENDOR UPDATED SUCCESSFULLY!!!!!!!')
                return Response(data=serializer.data, status=status.HTTP_205_RESET_CONTENT)
            return Response(data=serializer._errors, status=status.HTTP_400_BAD_REQUEST)
        return Response(data={'msg': 'please provide ID!!!'}, status=status.HTTP_400_BAD_REQUEST)
    
    def delete(self, request, pk=None):
        if pk:
            obj = get_object_or_404(Vendor, pk=pk)
            obj.delete()
            logger.info('VENDOR IS DELETED SUCCESSFULLY!!!!!!!')
            return Response(data={'msg': 'Deleted Successfully!!!'}, status=status.HTTP_204_NO_CONTENT)
        return Response(data={'msg': 'please give the ID!!!'}, status=status.HTTP_400_BAD_REQUEST)






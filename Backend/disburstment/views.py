from rest_framework import generics
from .serializers import DisbursementSerializer, InstallmentSerializer, DefaulterSerializer
from .models import Defaulter, Installment, Disbursement
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status
from django.shortcuts import get_object_or_404
import logging
from rest_framework.parsers import FormParser, MultiPartParser
# Create your views here.

logger = logging.getLogger('django')

# Defaulter API

class DefaulterAddApi(APIView):

    def post(self, request):
        serializer = DefaulterSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            logger.info('Defaulter IS ADDED SUCCESSFULLY!!!!!!!')
            return Response(data=serializer.data, status=status.HTTP_201_CREATED)
        return Response(data=serializer._errors, status=status.HTTP_400_BAD_REQUEST)
    
    def get(self, request):
        obj = Defaulter.objects.all()
        logger.info(' ALL Defaulter IS RETRIEVED SUCCESSFULLY!!!!!!!')
        serializer = DefaulterSerializer(obj, many=True)
        return Response(data=serializer.data, status=status.HTTP_200_OK)
    
class DefaulterShowApi(APIView):

    def get(self, request, pk=None):
        if pk:
            obj = get_object_or_404(Defaulter, pk=pk)
            logger.info('SIGLE Defaulter RETRIEVED SUCCESSFULLY!!!!!!!')
            serializer = DefaulterSerializer(obj)
            return Response(data=serializer.data, status=status.HTTP_200_OK)
        return Response(data={'msg': 'please give the ID!!'}, status=status.HTTP_400_BAD_REQUEST)
    
    def put(self, request, pk=None):
        if pk:
            obj = get_object_or_404(Defaulter, pk=pk)
            serializer = DefaulterSerializer(data=request.data, instance=obj)
            if serializer.is_valid():
                serializer.save()
                logger.info('Defaulter IS UPDATED SUCCESSFULLY!!!!!!!')
                return Response(data=serializer.data, status=status.HTTP_205_RESET_CONTENT)
            return Response(data=serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        return Response(data={'msg': 'please give the ID!!!'}, status=status.HTTP_400_BAD_REQUEST)
    
    def patch(self, request, pk=None):
        if pk:
            obj = get_object_or_404(Defaulter, pk=pk)
            serializer = DefaulterSerializer(data=request.data, instance=obj, partial=True)
            if serializer.is_valid():
                serializer.save()
                logger.info('SINGLE INFO OF Defaulter UPDATED SUCCESSFULLY!!!!!!!')
                return Response(data=serializer.data, status=status.HTTP_205_RESET_CONTENT)
            return Response(data=serializer._errors, status=status.HTTP_400_BAD_REQUEST)
        return Response(data={'msg': 'please provide ID!!!'}, status=status.HTTP_400_BAD_REQUEST)
    
    def delete(self, request, pk=None):
        if pk:
            obj = get_object_or_404(Defaulter, pk=pk)
            obj.delete()
            logger.info('Defaulter IS DELETED SUCCESSFULLY!!!!!!!')
            return Response(data={'msg': 'Deleted Successfully!!!'}, status=status.HTTP_204_NO_CONTENT)
        return Response(data={'msg': 'please give the ID!!!'}, status=status.HTTP_400_BAD_REQUEST)


# Installment API

class InstallmentAddApi(APIView):

    def post(self, request):
        serializer = InstallmentSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            logger.info('Installment IS ADDED SUCCESSFULLY!!!!!!!')
            return Response(data=serializer.data, status=status.HTTP_201_CREATED)
        return Response(data=serializer._errors, status=status.HTTP_400_BAD_REQUEST)
    
    def get(self, request):
        obj = Installment.objects.all()
        logger.info(' ALL Installment IS RETRIEVED SUCCESSFULLY!!!!!!!')
        serializer = InstallmentSerializer(obj, many=True)
        return Response(data=serializer.data, status=status.HTTP_200_OK)
    
class InstallmentShowApi(APIView):

    def get(self, request, pk=None):
        if pk:
            obj = get_object_or_404(Installment, pk=pk)
            logger.info('SIGLE Installment RETRIEVED SUCCESSFULLY!!!!!!!')
            serializer = InstallmentSerializer(obj)
            return Response(data=serializer.data, status=status.HTTP_200_OK)
        return Response(data={'msg': 'please give the ID!!'}, status=status.HTTP_400_BAD_REQUEST)
    
    def put(self, request, pk=None):
        if pk:
            obj = get_object_or_404(Installment, pk=pk)
            serializer = InstallmentSerializer(data=request.data, instance=obj)
            if serializer.is_valid():
                serializer.save()
                logger.info('Installment IS UPDATED SUCCESSFULLY!!!!!!!')
                return Response(data=serializer.data, status=status.HTTP_205_RESET_CONTENT)
            return Response(data=serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        return Response(data={'msg': 'please give the ID!!!'}, status=status.HTTP_400_BAD_REQUEST)
    
    def patch(self, request, pk=None):
        if pk:
            obj = get_object_or_404(Installment, pk=pk)
            serializer = InstallmentSerializer(data=request.data, instance=obj, partial=True)
            if serializer.is_valid():
                serializer.save()
                logger.info('SINGLE INFO OF Installment UPDATED SUCCESSFULLY!!!!!!!')
                return Response(data=serializer.data, status=status.HTTP_205_RESET_CONTENT)
            return Response(data=serializer._errors, status=status.HTTP_400_BAD_REQUEST)
        return Response(data={'msg': 'please provide ID!!!'}, status=status.HTTP_400_BAD_REQUEST)
    
    def delete(self, request, pk=None):
        if pk:
            obj = get_object_or_404(Installment, pk=pk)
            obj.delete()
            logger.info('Installment IS DELETED SUCCESSFULLY!!!!!!!')
            return Response(data={'msg': 'Deleted Successfully!!!'}, status=status.HTTP_204_NO_CONTENT)
        return Response(data={'msg': 'please give the ID!!!'}, status=status.HTTP_400_BAD_REQUEST)


#Disbursement API

class DisbursementAddApi(APIView):

    parser_classes = (MultiPartParser, FormParser)

    def post(self, request):
        serializer = DisbursementSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            logger.info('Disbursement IS ADDED SUCCESSFULLY!!!!!!!')
            return Response(data=serializer.data, status=status.HTTP_201_CREATED)
        return Response(data=serializer._errors, status=status.HTTP_400_BAD_REQUEST)
    
    def get(self, request):
        obj = Disbursement.objects.all()
        logger.info(' ALL Disbursement IS RETRIEVED SUCCESSFULLY!!!!!!!')
        serializer = DisbursementSerializer(obj, many=True)
        return Response(data=serializer.data, status=status.HTTP_200_OK)
    
class DisbursementShowApi(APIView):

    parser_classes = (MultiPartParser, FormParser)

    def get(self, request, pk=None):
        if pk:
            obj = get_object_or_404(Disbursement, pk=pk)
            logger.info('SIGLE Disbursement RETRIEVED SUCCESSFULLY!!!!!!!')
            serializer = DisbursementSerializer(obj)
            return Response(data=serializer.data, status=status.HTTP_200_OK)
        return Response(data={'msg': 'please give the ID!!'}, status=status.HTTP_400_BAD_REQUEST)
    
    def put(self, request, pk=None):
        if pk:
            obj = get_object_or_404(Disbursement, pk=pk)
            serializer = DisbursementSerializer(data=request.data, instance=obj)
            if serializer.is_valid():
                serializer.save()
                logger.info('Disbursement IS UPDATED SUCCESSFULLY!!!!!!!')
                return Response(data=serializer.data, status=status.HTTP_205_RESET_CONTENT)
            return Response(data=serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        return Response(data={'msg': 'please give the ID!!!'}, status=status.HTTP_400_BAD_REQUEST)
    
    def patch(self, request, pk=None):
        if pk:
            obj = get_object_or_404(Disbursement, pk=pk)
            serializer = DisbursementSerializer(data=request.data, instance=obj, partial=True)
            if serializer.is_valid():
                serializer.save()
                logger.info('SINGLE INFO OF Disbursement UPDATED SUCCESSFULLY!!!!!!!')
                return Response(data=serializer.data, status=status.HTTP_205_RESET_CONTENT)
            return Response(data=serializer._errors, status=status.HTTP_400_BAD_REQUEST)
        return Response(data={'msg': 'please provide ID!!!'}, status=status.HTTP_400_BAD_REQUEST)
    
    def delete(self, request, pk=None):
        if pk:
            obj = get_object_or_404(Disbursement, pk=pk)
            obj.delete()
            logger.info('Disbursement IS DELETED SUCCESSFULLY!!!!!!!')
            return Response(data={'msg': 'Deleted Successfully!!!'}, status=status.HTTP_204_NO_CONTENT)
        return Response(data={'msg': 'please give the ID!!!'}, status=status.HTTP_400_BAD_REQUEST)


from rest_framework import generics
from .serializers import ApplicationSerializer, GuarantorSerializer, DocumentSerializer
from .models import Application, Guarantor, Document
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status
from django.shortcuts import get_object_or_404
import logging
from admin_app.models import User
from project1.settings import EMAIL_HOST_USER
from django.core.mail import send_mail
from rest_framework.parsers import FormParser, MultiPartParser
# Create your views here.

logger = logging.getLogger('django')

# APPLICATION API

class ApplicationAddApi(APIView):

    def post(self, request):
        print(request.data)
        data = request.data['user']
        obj = User.objects.get(id=data)
        print(obj.email)
        serializer = ApplicationSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            subject = 'THANK YOU FOR REGISTRATION'
            message = 'Your Application Created Successfully For Further Process Please Click on the Link  ' + f'http://localhost:3000/document/{data}/'
            send_mail(subject, message, EMAIL_HOST_USER, [obj.email], fail_silently=False)
            logger.info('APPLICATION IS ADDED SUCCESSFULLY!!!!!!!')
            return Response(data=serializer.data, status=status.HTTP_201_CREATED)
        return Response(data=serializer._errors, status=status.HTTP_400_BAD_REQUEST)
    
    def get(self, request):
        obj = Application.objects.all()
        logger.info(' ALL APPLICATIONS IS RETRIEVED SUCCESSFULLY!!!!!!!')
        serializer = ApplicationSerializer(obj, many=True)
        return Response(data=serializer.data, status=status.HTTP_200_OK)
    
class ApplicationShowApi(APIView):

    def get(self, request, pk=None):
        if pk:
            obj = get_object_or_404(Application, pk=pk)
            logger.info('SIGLE APPLIACTION RETRIEVED SUCCESSFULLY!!!!!!!')
            serializer = ApplicationSerializer(obj)
            return Response(data=serializer.data, status=status.HTTP_200_OK)
        return Response(data={'msg': 'please give the ID!!'}, status=status.HTTP_400_BAD_REQUEST)
    
    def put(self, request, pk=None):
        if pk:
            obj = get_object_or_404(Application, pk=pk)
            serializer = ApplicationSerializer(data=request.data, instance=obj)
            if serializer.is_valid():
                serializer.save()
                logger.info('APPLICATION IS UPDATED SUCCESSFULLY!!!!!!!')
                return Response(data=serializer.data, status=status.HTTP_205_RESET_CONTENT)
            return Response(data=serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        return Response(data={'msg': 'please give the ID!!!'}, status=status.HTTP_400_BAD_REQUEST)
    
    def patch(self, request, pk=None):
        if pk:
            obj = get_object_or_404(Application, pk=pk)
            serializer = ApplicationSerializer(data=request.data, instance=obj, partial=True)
            if serializer.is_valid():
                serializer.save()
                logger.info('SINGLE INFO OF APPLIACTION UPDATED SUCCESSFULLY!!!!!!!')
                return Response(data=serializer.data, status=status.HTTP_205_RESET_CONTENT)
            return Response(data=serializer._errors, status=status.HTTP_400_BAD_REQUEST)
        return Response(data={'msg': 'please provide ID!!!'}, status=status.HTTP_400_BAD_REQUEST)
    
    def delete(self, request, pk=None):
        if pk:
            obj = get_object_or_404(Application, pk=pk)
            obj.delete()
            logger.info('APPLIACTION IS DELETED SUCCESSFULLY!!!!!!!')
            return Response(data={'msg': 'Deleted Successfully!!!'}, status=status.HTTP_204_NO_CONTENT)
        return Response(data={'msg': 'please give the ID!!!'}, status=status.HTTP_400_BAD_REQUEST)


# GUARANTOR API

class GuarantorAddApi(APIView):

    parser_classes = (MultiPartParser, FormParser)

    def post(self, request):
        serializer = GuarantorSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            logger.info('GUARANTOR IS ADDED SUCCESSFULLY!!!!!!!')
            return Response(data=serializer.data, status=status.HTTP_201_CREATED)
        return Response(data=serializer._errors, status=status.HTTP_400_BAD_REQUEST)
    
    def get(self, request):
        obj = Guarantor.objects.all()
        logger.info(' ALL GUARANTORS IS RETRIEVED SUCCESSFULLY!!!!!!!')
        serializer = GuarantorSerializer(obj, many=True)
        return Response(data=serializer.data, status=status.HTTP_200_OK)
    
class GuarantorShowApi(APIView):

    parser_classes = (MultiPartParser, FormParser)

    def get(self, request, pk=None):
        if pk:
            obj = get_object_or_404(Guarantor, pk=pk)
            logger.info('SIGLE GUARANTOR RETRIEVED SUCCESSFULLY!!!!!!!')
            serializer = GuarantorSerializer(obj)
            return Response(data=serializer.data, status=status.HTTP_200_OK)
        return Response(data={'msg': 'please give the ID!!'}, status=status.HTTP_400_BAD_REQUEST)
    
    def put(self, request, pk=None):
        if pk:
            obj = get_object_or_404(Guarantor, pk=pk)
            serializer = GuarantorSerializer(data=request.data, instance=obj)
            if serializer.is_valid():
                serializer.save()
                logger.info('GUARANTOR IS UPDATED SUCCESSFULLY!!!!!!!')
                return Response(data=serializer.data, status=status.HTTP_205_RESET_CONTENT)
            return Response(data=serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        return Response(data={'msg': 'please give the ID!!!'}, status=status.HTTP_400_BAD_REQUEST)
    
    def patch(self, request, pk=None):
        if pk:
            obj = get_object_or_404(Guarantor, pk=pk)
            serializer = GuarantorSerializer(data=request.data, instance=obj, partial=True)
            if serializer.is_valid():
                serializer.save()
                logger.info('SINGLE INFO OF GUARANTOR UPDATED SUCCESSFULLY!!!!!!!')
                return Response(data=serializer.data, status=status.HTTP_205_RESET_CONTENT)
            return Response(data=serializer._errors, status=status.HTTP_400_BAD_REQUEST)
        return Response(data={'msg': 'please provide ID!!!'}, status=status.HTTP_400_BAD_REQUEST)
    
    def delete(self, request, pk=None):
        if pk:
            obj = get_object_or_404(Guarantor, pk=pk)
            obj.delete()
            logger.info('GUARANTOR IS DELETED SUCCESSFULLY!!!!!!!')
            return Response(data={'msg': 'Deleted Successfully!!!'}, status=status.HTTP_204_NO_CONTENT)
        return Response(data={'msg': 'please give the ID!!!'}, status=status.HTTP_400_BAD_REQUEST)


#DOCUMENT API

class DocumentAddApi(APIView):

    parser_classes = (MultiPartParser, FormParser)

    def post(self, request):
        serializer = DocumentSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            logger.info('DOCUMENT IS ADDED SUCCESSFULLY!!!!!!!')
            return Response(data=serializer.data, status=status.HTTP_201_CREATED)
        return Response(data=serializer._errors, status=status.HTTP_400_BAD_REQUEST)
    
    def get(self, request):
        obj = Document.objects.all()
        logger.info(' ALL DOCUMENTS IS RETRIEVED SUCCESSFULLY!!!!!!!')
        serializer = DocumentSerializer(obj, many=True)
        return Response(data=serializer.data, status=status.HTTP_200_OK)
    
class DocumentShowApi(APIView):

    parser_classes = (MultiPartParser, FormParser)

    def get(self, request, pk=None):
        if pk:
            obj = get_object_or_404(Document, pk=pk)
            logger.info('SIGLE DOCUMENT RETRIEVED SUCCESSFULLY!!!!!!!')
            serializer = DocumentSerializer(obj)
            return Response(data=serializer.data, status=status.HTTP_200_OK)
        return Response(data={'msg': 'please give the ID!!'}, status=status.HTTP_400_BAD_REQUEST)
    
    def put(self, request, pk=None):
        if pk:
            obj = get_object_or_404(Document, pk=pk)
            serializer = DocumentSerializer(data=request.data, instance=obj)
            if serializer.is_valid():
                serializer.save()
                logger.info('DOCUMENT IS UPDATED SUCCESSFULLY!!!!!!!')
                return Response(data=serializer.data, status=status.HTTP_205_RESET_CONTENT)
            return Response(data=serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        return Response(data={'msg': 'please give the ID!!!'}, status=status.HTTP_400_BAD_REQUEST)
    
    def patch(self, request, pk=None):
        if pk:
            obj = get_object_or_404(Document, pk=pk)
            serializer = DocumentSerializer(data=request.data, instance=obj, partial=True)
            if serializer.is_valid():
                serializer.save()
                logger.info('SINGLE INFO OF DOCUMENT UPDATED SUCCESSFULLY!!!!!!!')
                return Response(data=serializer.data, status=status.HTTP_205_RESET_CONTENT)
            return Response(data=serializer._errors, status=status.HTTP_400_BAD_REQUEST)
        return Response(data={'msg': 'please provide ID!!!'}, status=status.HTTP_400_BAD_REQUEST)
    
    def delete(self, request, pk=None):
        if pk:
            obj = get_object_or_404(Document, pk=pk)
            obj.delete()
            logger.info('DOCUMENT IS DELETED SUCCESSFULLY!!!!!!!')
            return Response(data={'msg': 'Deleted Successfully!!!'}, status=status.HTTP_204_NO_CONTENT)
        return Response(data={'msg': 'please give the ID!!!'}, status=status.HTTP_400_BAD_REQUEST)


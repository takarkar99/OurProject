from rest_framework import serializers
from .models import Disbursement, Defaulter, Installment


class DisbursementSerializer(serializers.ModelSerializer):
    class Meta:
        model = Disbursement
        fields = '__all__'


class DefaulterSerializer(serializers.ModelSerializer):
    class Meta:
        model = Defaulter
        fields = '__all__'

class InstallmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Installment
        fields = '__all__'
from rest_framework import serializers
from .models import Loan, Vendor


class LoanSerializer(serializers.ModelSerializer):
    sanction_letter = serializers.FileField(required=False)

    class Meta:
        model = Loan
        fields = '__all__'



class VendorSerializer(serializers.ModelSerializer):
    passbook_copy = serializers.FileField(required=False)
    class Meta:
        model = Vendor
        fields = '__all__'



from rest_framework import serializers
from .models import Application, Guarantor, Document


class ApplicationSerializer(serializers.ModelSerializer):

    class Meta:
        model = Application
        fields = '__all__'



class GuarantorSerializer(serializers.ModelSerializer):
    photo = serializers.ImageField(required=False)
    income_certificate = serializers.FileField(required=False)
    passbook_copy = serializers.FileField(required=False)
    class Meta:
        model = Guarantor
        fields = '__all__'


class DocumentSerializer(serializers.ModelSerializer):
    aadhaar_card = serializers.FileField(required=False)
    pan_card = serializers.FileField(required=False)
    business_address_proof_or_copy_of_rent_agreement = serializers.FileField(required=False)
    electricity_bill = serializers.FileField(required=False)
    msme_certificate = serializers.FileField(required=False)
    gst_certificate = serializers.FileField(required=False)
    udyog_aadhaar_registration = serializers.FileField(required=False)
    business_license = serializers.FileField(required=False)
    business_plan_or_proposal = serializers.FileField(required=False)
    three_year_itr_with_balance_sheet = serializers.FileField(required=False)
    collateral_document = serializers.FileField(required=False)
    stamp_duty = serializers.FileField(required=False)
    class Meta:
        model = Document
        fields = '__all__'
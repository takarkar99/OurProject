from rest_framework import serializers
from .models import User, Family, Bank


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'email', 'password', 'first_name', 'last_name', 'dob', 'gender', 'address', 'city', 'state', 'country', 'pin_code', 'mobile', 'signature', 'role']
        
    def create(self, validated_data):
        return User.objects.create_user(**validated_data)
    
    
class FamilySerializer(serializers.ModelSerializer):
    class Meta:
        model = Family
        fields = '__all__'
        
    
class BankSerilizer(serializers.ModelSerializer):
    passbook_copy = serializers.ImageField(required=False)
    class Meta:
        model = Bank
        fields = '__all__'
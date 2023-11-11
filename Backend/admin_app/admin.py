from django.contrib import admin
from .models import User, Family, Bank
# Register your models here.


class AdminUser(admin.ModelAdmin):
    list_display = ['id','email','first_name','last_name', 'role']

admin.site.register(User, AdminUser)

class FamilyUser(admin.ModelAdmin):
    list_display = ['id', '']

admin.site.register(Family)
admin.site.register(Bank)

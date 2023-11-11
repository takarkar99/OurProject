from django.contrib import admin
from .models import Application, Document, Guarantor
# Register your models here.

class ApplicationAdmin(admin.ModelAdmin):
    list_display= ['id', 'user', 'aadhaar_no', 'status', 'remark']

admin.site.register(Application, ApplicationAdmin)

admin.site.register(Document)
admin.site.register(Guarantor)
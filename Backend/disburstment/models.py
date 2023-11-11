from django.db import models
from loan_sanctioning.models import Loan
from admin_app.models import User
# Create your models here.

class Defaulter(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='Defaulters')
    default_amount = models.FloatField(default=0, blank=True)
    pending_since_date = models.DateField(default="2000-12-12", blank=True)

    def __str__(self):
        return f"{self.id}" 


class Installment(models.Model):

    INSTALLMENT_CHOICES = [
        ('SELECT', 'SELECT'),
        ('OK', 'OK'),
        ('PENDING', 'PENDING'),
        ('LATE', 'LATE')
    ]
    loan = models.ForeignKey(Loan, on_delete=models.CASCADE, related_name='Installments')
    remaining_amount = models.FloatField(default=0, blank=True)
    installment_no = models.IntegerField(default=0, blank=True)
    monthly_installment_amount = models.FloatField(default=0, blank=True)
    installment_expected_date = models.DateField(default="2000-12-12", blank=True)
    installment_paid_date = models.DateField(default="2000-12-12", blank=True)
    penalty_amount = models.FloatField(default=0, blank=True)
    status = models.CharField(max_length=100, blank=True, choices=INSTALLMENT_CHOICES, default='pending')

    def __str__(self):
        return f"{self.id}"


class Disbursement(models.Model):

    PAYMENT_CHOICES = [
        ('SELECT', 'SELECT'),
        ('NEFT', 'NEFT'),
        ('RTGS', 'RTGS'),
        ('IMPS', 'IMPS')
    ]

    DISBURSEMENT_CHOICES = [
        ('SELECT', 'SELECT'),
        ('PENDING', 'PENDING'),
        ('DISBURST', 'DISBURST')
    ]
    loan = models.OneToOneField(Loan, on_delete=models.CASCADE, related_name='Disbursements')
    insurance_doc = models.FileField(upload_to='media/customer/disbursement', default=0, blank=True)
    payment_mode = models.CharField(max_length=250, default=0, blank=True, choices=PAYMENT_CHOICES)
    net_disbursed_amount = models.FloatField(default=0, blank=True)
    disbursed_to_account_no = models.CharField(max_length=25, default=0, blank=True)
    receipt_doc = models.FileField(upload_to='customer/disbursement', default=0, blank=True)
    status = models.CharField(max_length=250, default=0, blank=True, choices=DISBURSEMENT_CHOICES)
    response_timestamp = models.DateTimeField(auto_now=True, blank=True)

    def __str__(self):
        return f"{self.id}"

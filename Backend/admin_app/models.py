from django.db import models
from django.core.mail import send_mail
from django.contrib.auth.models import AbstractBaseUser
from django.contrib.auth.models import PermissionsMixin
from phonenumber_field.modelfields import PhoneNumberField
from .manager import UserManager
# Create your models here.


class User(AbstractBaseUser, PermissionsMixin):

    GENDER_CHOICES = [
        ('MALE', 'MALE'),
        ('FEMALE', 'FEMALE'),
        ('TRANSGENDER', 'TRANSGENDER')
    ]

    ROLE_CHOICES = [
        ('CS', 'CUSTOMER'),
        ('LR', 'LOAN_REPRESENTATIVE'),
        ('OH', 'OPERATIONAL_HEAD'),
        ('LO', 'LOAN_SANCTIONING_OFFICER'),
        ('AD', 'ADMIN'),
        ('AH', 'ACCOUNT_HEAD')
    ]

    first_name = models.CharField(max_length=250)
    last_name = models.CharField(max_length=250)
    dob = models.DateField(default="2000-12-12", blank=True)
    gender = models.CharField(max_length=50, choices=GENDER_CHOICES)
    email = models.EmailField(db_index=True, max_length=50, unique=True)
    address = models.TextField()
    city = models.CharField(max_length=250)
    state = models.CharField(max_length=250)
    country = models.CharField(max_length=250)
    pin_code = models.IntegerField(default=0, blank=True)
    mobile = PhoneNumberField(region='IN')
    photo = models.ImageField(upload_to="customer/user/", default=0, blank=True)
    signature = models.ImageField(upload_to="customer/user/", default=0, blank=True)
    role = models.CharField(max_length=50, default='customer', choices=ROLE_CHOICES)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)

    objects = UserManager()
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []
    
    class Meta:
        verbose_name = 'User'
        verbose_name_plural = 'Users'

    def get_full_name(self):
        '''
        Returns the first_name plus the last_name, with a space in between.
        '''
        full_name = '%s %s' % (self.first_name, self.last_name)
        return full_name.strip()

    def get_short_name(self):
        '''
        Returns the short name for the user.
        '''
        return self.first_name

    def email_user(self, subject, message, from_email=None, **kwargs):
        '''
        Sends an email to this User.
        '''
        send_mail(subject, message, from_email, [self.email], **kwargs)

class Family(models.Model):

    MARITAL_STATUS = [
        ('MARRIED', 'MARRIED'),
        ('UNMARRIED', 'UNMARRIED')
    ]
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='Familys')
    father_name = models.CharField(max_length=250, default=0, blank=True)
    father_profession = models.CharField(max_length=250, default=0, blank=True)
    mother_name = models.CharField(max_length=250, default=0, blank=True)
    mother_profession = models.CharField(max_length=250, default=0, blank=True)
    marital_status = models.CharField(max_length=250, choices=MARITAL_STATUS, default=0, blank=True)
    spouse_name = models.CharField(max_length=250, default=0, blank=True)
    spouse_profession = models.CharField(max_length=250, default=0, blank=True)
    mobile = PhoneNumberField(region='IN')
    address = models.TextField(default=0, blank=True)

    def __str__(self):
        return f"{self.id}"


class Bank(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='Banks')
    bank_name = models.CharField(max_length=250, default=0, blank=True)
    current_account_no = models.CharField(max_length=20, default=0, blank=True)
    ifsc_code = models.CharField(max_length=20, default=0, blank=True)
    passbook_copy = models.ImageField(upload_to='media/customer/bank/', default=0, blank=True)

    def __str__(self):
        return f"{self.id}"

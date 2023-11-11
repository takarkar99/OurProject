# Generated by Django 4.2.2 on 2023-06-12 06:34

import admin_app.manager
from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion
import phonenumber_field.modelfields


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('auth', '0012_alter_user_first_name_max_length'),
    ]

    operations = [
        migrations.CreateModel(
            name='User',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('password', models.CharField(max_length=128, verbose_name='password')),
                ('last_login', models.DateTimeField(blank=True, null=True, verbose_name='last login')),
                ('is_superuser', models.BooleanField(default=False, help_text='Designates that this user has all permissions without explicitly assigning them.', verbose_name='superuser status')),
                ('first_name', models.CharField(max_length=250)),
                ('last_name', models.CharField(max_length=250)),
                ('dob', models.DateField(blank=True, default='2000-12-12')),
                ('gender', models.CharField(choices=[('MALE', 'MALE'), ('FEMALE', 'FEMALE'), ('TRANSGENDER', 'TRANSGENDER')], max_length=50)),
                ('email', models.EmailField(db_index=True, max_length=50, unique=True)),
                ('address', models.TextField()),
                ('city', models.CharField(max_length=250)),
                ('state', models.CharField(max_length=250)),
                ('country', models.CharField(max_length=250)),
                ('pin_code', models.IntegerField(blank=True, default=0)),
                ('mobile', phonenumber_field.modelfields.PhoneNumberField(max_length=128, region='IN')),
                ('photo', models.ImageField(blank=True, default=0, upload_to='customer/user/')),
                ('signature', models.ImageField(blank=True, default=0, upload_to='customer/user/')),
                ('role', models.CharField(choices=[('CS', 'CUSTOMER'), ('LR', 'LOAN_REPRESENTATIVE'), ('OH', 'OPERATIONAL_HEAD'), ('LO', 'LOAN_SANCTIONING_OFFICER'), ('AD', 'ADMIN'), ('AH', 'ACCOUNT_HEAD')], default='customer', max_length=50)),
                ('is_active', models.BooleanField(default=True)),
                ('is_staff', models.BooleanField(default=False)),
                ('groups', models.ManyToManyField(blank=True, help_text='The groups this user belongs to. A user will get all permissions granted to each of their groups.', related_name='user_set', related_query_name='user', to='auth.group', verbose_name='groups')),
                ('user_permissions', models.ManyToManyField(blank=True, help_text='Specific permissions for this user.', related_name='user_set', related_query_name='user', to='auth.permission', verbose_name='user permissions')),
            ],
            options={
                'verbose_name': 'User',
                'verbose_name_plural': 'Users',
            },
            managers=[
                ('objects', admin_app.manager.UserManager()),
            ],
        ),
        migrations.CreateModel(
            name='Family',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('father_name', models.CharField(blank=True, default=0, max_length=250)),
                ('father_profession', models.CharField(blank=True, default=0, max_length=250)),
                ('mother_name', models.CharField(blank=True, default=0, max_length=250)),
                ('mother_profession', models.CharField(blank=True, default=0, max_length=250)),
                ('marital_status', models.CharField(blank=True, choices=[('MARRIED', 'MARRIED'), ('UNMARRIED', 'UNMARRIED')], default=0, max_length=250)),
                ('spouse_name', models.CharField(blank=True, default=0, max_length=250)),
                ('spouse_profession', models.CharField(blank=True, default=0, max_length=250)),
                ('mobile', phonenumber_field.modelfields.PhoneNumberField(max_length=128, region='IN')),
                ('address', models.TextField(blank=True, default=0)),
                ('user', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, related_name='Familys', to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='Bank',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('bank_name', models.CharField(blank=True, default=0, max_length=250)),
                ('current_account_no', models.CharField(blank=True, default=0, max_length=20)),
                ('ifsc_code', models.CharField(blank=True, default=0, max_length=20)),
                ('passbook_copy', models.ImageField(blank=True, default=0, upload_to='media/customer/bank/')),
                ('user', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, related_name='Banks', to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]

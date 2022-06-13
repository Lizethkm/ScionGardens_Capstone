# Generated by Django 4.0.4 on 2022-05-31 20:50

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('reminders', '0002_reminder_created_date_reminder_expired_date_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='reminder',
            name='created_date',
            field=models.DateField(auto_now_add=True),
        ),
        migrations.AlterField(
            model_name='reminder',
            name='expired_date',
            field=models.DateField(),
        ),
        migrations.AlterField(
            model_name='reminder',
            name='updated_date',
            field=models.DateField(auto_now=True),
        ),
    ]
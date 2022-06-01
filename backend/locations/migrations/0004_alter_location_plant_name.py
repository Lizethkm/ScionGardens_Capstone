# Generated by Django 4.0.4 on 2022-06-01 18:56

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('scion_gardens', '0003_remove_reminder_plant_remove_reminder_user_and_more'),
        ('locations', '0003_alter_location_plant_name'),
    ]

    operations = [
        migrations.AlterField(
            model_name='location',
            name='plant_name',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='plant_name', to='scion_gardens.plantcollection'),
        ),
    ]

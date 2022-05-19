from django.contrib import admin

from backend.scion_gardens.models import PlantCollection, Priority, Reminders

# Register your models here.
admin.site.register(PlantCollection)
admin.site.register(Reminders)
admin.site.register(Priority)
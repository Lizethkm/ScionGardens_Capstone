from django.contrib import admin

from .models import PlantCollection
from .models import Reminders
from .models import Priority

# Register your models here.
admin.site.register(PlantCollection)
admin.site.register(Reminders)
admin.site.register(Priority)
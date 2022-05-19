from django.contrib import admin

from .models import PlantCollection
from .models import Reminder
from .models import Priority

# Register your models here.
admin.site.register(PlantCollection)
admin.site.register(Reminder)
admin.site.register(Priority)
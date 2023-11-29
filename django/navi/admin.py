from django.contrib import admin
from .models import Problemas,Lenguajes,Respuesta   
# Register your models here.
@admin.register(Problemas)
class ProblemasAdmin(admin.ModelAdmin):
    list_display = ['lenguaje','tipo','nombre']
@admin.register(Respuesta)
class RespuestaAdmin(admin.ModelAdmin):
    list_display = ['problema','respuestas']
admin.site.register(Lenguajes)
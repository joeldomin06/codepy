from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from . import models
class UsuariosAdmin(admin.ModelAdmin):
    list_display = ['id_rol','user','carrera']
class NivelesAdmin(admin.ModelAdmin):
    list_display = ['id_rol','nivel']
admin.site.register(models.Usuarios,UsuariosAdmin)
admin.site.register(models.Carreras)
admin.site.register(models.Niveles,NivelesAdmin)
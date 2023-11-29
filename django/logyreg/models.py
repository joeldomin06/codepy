from django.db import models
from django.contrib.auth.models import User
class Carreras(models.Model):
    carrera = models.CharField(max_length=60)
    
    def __str__(self):
        return self.carrera
class Usuarios(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    id_rol = models.CharField(max_length=50, primary_key=True)
    carrera = models.ForeignKey(Carreras, on_delete=models.CASCADE)
    def __str__(self):
        return self.id_rol
class Niveles(models.Model):
    id_rol = models.OneToOneField(Usuarios, on_delete=models.CASCADE)
    nivel = models.IntegerField(default=1)
class Problemas_Usuario(models.Model):
    id_rol = models.OneToOneField(Usuarios, on_delete=models.CASCADE)
    problema = models.FileField(null=True)

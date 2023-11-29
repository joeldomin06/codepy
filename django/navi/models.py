from django.db import models
from logyreg.models import Usuarios
class Lenguajes(models.Model):
    lenguaje = models.CharField(max_length=10)
    def __str__(self):
        return self.lenguaje
class Problemas(models.Model):
    tipo_choices = [
        ('Ordenar','Ordenar'),
        ('Ruteo','Ruteo'),
        ('Completar','Completar'),
        ('Quiz','Quiz')
    ]
    lenguaje = models.ForeignKey(Lenguajes, on_delete=models.CASCADE)
    tipo = models.CharField(choices=tipo_choices,max_length=20)
    nombre = models.CharField(max_length=50)
    certamen = models.PositiveIntegerField(null=True)
    filas = models.PositiveIntegerField(null=True)
    columnas = models.PositiveIntegerField(null=True)
    def __str__(self):
        return self.nombre
class Respuesta(models.Model):
    problema = models.OneToOneField(Problemas, on_delete=models.CASCADE)
    respuestas = models.TextField()
    salidas = models.TextField(null=True)
# Generated by Django 3.0 on 2019-12-11 00:00

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Lenguajes',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('lenguaje', models.CharField(max_length=10)),
            ],
        ),
        migrations.CreateModel(
            name='Problemas',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('tipo', models.CharField(choices=[('Ordenar', 'Ordenar'), ('Ruteo', 'Ruteo'), ('Completar', 'Completar'), ('Quiz', 'Quiz')], max_length=20)),
                ('nombre', models.CharField(max_length=50)),
                ('certamen', models.PositiveIntegerField(null=True)),
                ('filas', models.PositiveIntegerField(null=True)),
                ('columnas', models.PositiveIntegerField(null=True)),
                ('lenguaje', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='navi.Lenguajes')),
            ],
        ),
        migrations.CreateModel(
            name='Respuesta',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('respuestas', models.TextField()),
                ('salidas', models.TextField(null=True)),
                ('problema', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to='navi.Problemas')),
            ],
        ),
    ]

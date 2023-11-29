from django import forms
from logyreg.models import Usuarios,Niveles
from django.contrib.auth.models import User
from django.contrib.auth.forms import UserCreationForm
class UsuariosForm(UserCreationForm):
    email = forms.EmailField(max_length=254)

    class Meta:
        model = User
        fields = ('username', 'email', 'password1', 'password2')
class UsuariosExtendForm(forms.ModelForm):
    class Meta:
        model = Usuarios
        fields = [
            'id_rol',
            'carrera',
            ]
        widgets = {
            'id_rol':forms.TextInput(),
            'carrera':forms.Select(attrs={'class':'form-control mt-2','placeholder':'carrera'}),
        }
class NivelForm(forms.ModelForm):
    class Meta:
        model = Niveles
        fields = [
            'nivel'
        ]
class LogForm(forms.Form):
    username = forms.CharField()
    password = forms.CharField(widget=forms.PasswordInput())
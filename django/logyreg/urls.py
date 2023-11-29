from django.urls import path, re_path
from django.contrib.auth.views import LoginView
from logyreg.views import register,log,logoutt,codepy

urlpatterns = [
    path('',register,name='reg'),
    path('login/', log, name='log'),
    path('logout/', logoutt, name='logout'),
    path('codepymaker/',codepy, name='codepy')
]
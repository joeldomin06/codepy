from django.urls import path,include, re_path
from django.contrib.auth.views import login_required
from . import views
from django.views.generic import TemplateView

urlpatterns = [
   path('home/',views.carga_simple,{'template_name':'home'}, name='home'),
   path('perfil/',views.perfil, name='perfil'),
   path('referencias/', include([
      path('',views.carga_simple,{'template_name':'referencias'}, name='ref'),
      path('python/',views.carga_simple,{'template_name':'ref_python'},name='ref_python'),
      path('editores/',views.carga_simple,{'template_name':'editores'}, name='editores')
   ])),
   path('desafios/',include([
      path('',views.carga_simple,{'template_name':'desafios'}, name='desafios')
   ])),
   path('lenguajes/',include([
      path('',views.lenguaje, name='lenguaje'),
      path('<slug:leng>/problemas/',include([
         path('', views.problemas, name='problemas'),
         path('<slug:tip>/',include([
            path('',views.respuesta_problemas,name='resp_problemas'),
            path('<slug:nombre>/',include([
               path('',views.cargar,name='cargar'),
               path('respuesta/<slug:porc>/',views.respuestas,name='respuesta')
            ])) 
         ]))
      ]))
   ])),
]
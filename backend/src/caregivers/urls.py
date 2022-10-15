from django.contrib import admin
from django.urls import path, include
from caregivers.views import index_api_view

api_urlpatterns = [
    path('', index_api_view, name='index'),
]

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/v1/', include((api_urlpatterns, 'caregivers'), namespace='api')),
]

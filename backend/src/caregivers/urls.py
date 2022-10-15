from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import path, include
from apps.users.urls import api_url_patterns as user_api_url_patterns
from caregivers.views import index_api_view

api_urlpatterns = [
    path('', index_api_view, name='index'),
    *user_api_url_patterns,
]

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/v1/', include((api_urlpatterns, 'caregivers'), namespace='api')),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

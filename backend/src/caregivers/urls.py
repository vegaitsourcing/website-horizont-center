from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import path, include
from apps.users.urls import api_url_patterns as user_api_url_patterns
from apps.donations.urls import api_urlpatterns as donation_api_url_patterns
from apps.blogs.urls import api_urlpatterns as blog_api_url_patterns
from apps.common.urls import api_urlpatterns as organization_partner_api_url_patterns
from caregivers.views import index_api_view

api_urlpatterns = [
    path('', index_api_view, name='index'),
    *user_api_url_patterns,
    *donation_api_url_patterns,
    *blog_api_url_patterns,
    *organization_partner_api_url_patterns,
]

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/v1/', include((api_urlpatterns, 'caregivers'), namespace='api')),
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)

from django.core.handlers.wsgi import WSGIRequest


def get_request_base_url(request: WSGIRequest) -> str:
    return f'{request.scheme}://{request.get_host()}'

FROM python:3.10

ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

RUN apt-get update && apt-get install -y postgresql-client gettext

WORKDIR /app

ADD ./scripts /app/scripts
ADD ./requirements /app/requirements
ADD ./src /app/src

RUN pip install --upgrade pip
RUN pip install -r /app/requirements/development.txt

EXPOSE 8000
ENTRYPOINT [ "sh", "/app/scripts/entrypoint.sh" ]
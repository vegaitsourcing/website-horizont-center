FROM python:3.10

ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

RUN apt-get update && apt-get install -y postgresql-client gettext

# Create a user app without sudo permissions
RUN addgroup --gid 1000 app && adduser --uid 1000 --ingroup app --system app
RUN mkdir /app && chown app:app /app /var/log

USER app

COPY ./scripts          /app/scripts
COPY ./requirements     /app/requirements
COPY ./src              /app/src


RUN pip install --upgrade pip
RUN pip install -r /app/requirements/development.txt

WORKDIR /app/src

EXPOSE 8000
ENTRYPOINT [ "sh", "/app/scripts/entrypoint.sh" ]
# Caregivers Django app

## Development setup

### Setup requirements

- **Docker**:
    - Windows - [Docker Desktop for Windows](https://docs.docker.com/docker-for-windows/install/)
    - Mac - [Docker Desktop for Mac](https://docs.docker.com/docker-for-mac/install/)
    - Linux - [Docker Engine](https://docs.docker.com/engine/install/#server)
      and [Docker Compose](https://docs.docker.com/compose/install/)

### Setup steps

1. Create `.env` based on `example.env`
2. Start the app:

   `docker compose up`

   (for older versions of Docker Compose use: `docker-compose up`)

### Superuser (optional)

You can user a superuser to log in to Django Admin. If you followed through the
[Setup steps](#setup-steps), Django Admin should be available at http://0.0.0.0:8000/admin/
(the port is the one set for `DJANGO_PORT` variable in `.evn`).

Run one of the two following commands to create a superuser:

- `docker exec -it caregivers-django sh -c 'python manage.py createsuperuser --noinput'`

  to create a superuser with credentials specified in `.env` file (`DJANGO_SUPERUSER_EMAIL` and
  `DJANGO_SUPERUSER_PASSWORD`)

  **OR**

- `docker exec -it caregivers-django sh -c 'python manage.py createsuperuser'`

  to create a superuser with different credentials that you will choose after running this
  command

### pgAdmin (optional)

[pgAdmin](https://www.pgadmin.org/) is an administration and development platform for PostgreSQL
database. If you followed through the [Setup steps](#setup-steps), there should be
`cargivers-pgadmin` container running and pgAdmin should be available at http://0.0.0.0:8080/
(the port is the one set for `PGADMIN_PORT` variable in `.evn`). To log in, use the credentials
specified in `.env` (`PGADMIN_EMAIL` and `PGADMIN_PASSWORD`). Once you successfully log in,
follow these steps to connect to the database:

1. Click on the "Add New Servers" button that should be under "Quick Links". This should open
   "Register - Server" popup window.
2. Enter any name in the "Name" field (under the first tab called "General").
3. Go to the second tab called "Connection" and enter values for these fields:
    - host name/address: the name of the database service in the `docker-compose.yml` file (it
      should be `postgres` if it was not changed)
    - port: should be prefilled with `5432` which is the correct port
    - username: value set for `DB_USERNAME` variable in `.env`
    - password: value set for `DB_PASSWORD` variable in `.env`
4. Click on the "Save" button and a connection with the database should be created and visible
   under the "Servers" menu item located in the left vertical navigation of the pgAdmin page.

## Production setup

Production setup requirements and steps are the same as for [Development setup](#development-setup),
and the only thing that differs is that you have to put `production` instead of `development` as the
value for `APP_ENV` in `.env` file.

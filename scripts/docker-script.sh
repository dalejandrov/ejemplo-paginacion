#!/bin/bash

# Lee las variables de entorno desde el archivo .env
set -a
source .env
set +a

# Ejecuta el contenedor de PostgreSQL
docker run -d \
  --name my-postgres-container \
  -p $DB_PORT:5432 \
  -e POSTGRES_USER=$DB_USER \
  -e POSTGRES_PASSWORD=$DB_PASSWORD \
  -e POSTGRES_DB=$DB_NAME \
  -v my-postgres-data:/var/lib/postgresql/data \
  postgres

echo "Contenedor de PostgreSQL ejecutándose..."

# Backend


### Para conectarte a un contenedor de PostgreSQL en Docker a través de la terminal, puedes utilizar el cliente de línea de comandos psql. Aquí tienes los pasos para hacerlo:

1. Asegúrate de que el contenedor de PostgreSQL esté en ejecución. Puedes verificarlo ejecutando el comando:

```shell
docker ps
```
- el comando le mostrara tambien los contenedores inactivos
```shell
docker ps -a
```
Esto mostrará una lista de los contenedores en ejecución.

2. Copia el nombre o el ID del contenedor de PostgreSQL que deseas acceder.

3. Ejecuta el siguiente comando para conectarte al contenedor de PostgreSQL usando psql:

```shell
docker exec -it nombre_o_id_del_contenedor bash
```

```shell
psql -U usuario -d basededatos
```

o tambien:
```shell
docker exec -it nombre_o_id_del_contenedor psql -U usuario -d basededatos
```

Sustituye nombre_o_id_del_contenedor por el nombre o el ID del contenedor de PostgreSQL.

Sustituye usuario por el nombre de usuario de PostgreSQL que deseas utilizar para la conexión.

Sustituye basededatos por el nombre de la base de datos a la que deseas conectarte.

4. Se te pedirá la contraseña del usuario de PostgreSQL. Ingresa la contraseña correspondiente y presiona Enter.

5.  Después de ingresar la contraseña, estarás conectado al cliente psql y podrás ejecutar comandos de PostgreSQL en la terminal.

Recuerda que para utilizar el comando docker exec, el contenedor de PostgreSQL debe estar en ejecución. Además, asegúrate de tener el cliente psql instalado en tu sistema antes de intentar conectarte al contenedor.


### Postgres

#### comandos de terminal de PostgreSQL comúnmente utilizados:

1. Listar bases de datos:
```shell
psql -l
```

2. Conectarse a una base de datos:
```shell
psql -d nombre_de_la_base_de_datos
```


3. Listar tablas en la base de datos actual:
```shell
\dt
```

4. Mostrar usuarios:
```shell
\du
```

5. Crear un nuevo usuario:
```shell
CREATE USER nombre_de_usuario WITH PASSWORD 'contraseña';
```

6. Cambiar la contraseña de un usuario existente:
```shell
ALTER USER nombre_de_usuario WITH PASSWORD 'nueva_contraseña';
```

7. Conectarse como usuario específico:
```shell
psql -U nombre_de_usuario -d nombre_de_la_base_de_datos
```

8. Salir de la terminal de PostgreSQL:
```shell
\q
```


Recuerda que estos comandos se ejecutan en la terminal después de haber iniciado una sesión de PostgreSQL utilizando psql. Asegúrate de tener PostgreSQL instalado en tu sistema y haber configurado las variables de entorno adecuadas para poder ejecutar estos comandos.

#### db
```sql
CREATE TABLE
    products (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255),
        description TEXT,
        price DECIMAL(8, 2),
        image VARCHAR(255)
    );
SELECT * FROM products;
/////////////////////////////////////////////////////
ALTER TABLE products
ALTER COLUMN
    price TYPE INTEGER USING price :: INTEGER;
ALTER TABLE products ADD COLUMN image VARCHAR;
drop table products;
```

#### Redis
1. Ver almacenamiento de cache
```shell
    redis-commander
```

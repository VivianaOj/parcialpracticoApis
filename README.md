# Ejectuar la aplicación

Antes de iniciar la aplicación, configura la variable de entorno `DATABASE_URL` con la URL correcta para acceder a la base de datos.

- Para PostgreSQL, una URL típica se ve así: `postgres://usuario:contraseña@127.0.0.1:5432/nombre_de_la_base_de_datos`
- Para SQLite (ideal para desarrollo y pruebas), se puede usar una URL como esta: `sqlite://db.sqlite`

En sistemas Unix se puede configurar la variable de entorno con:

```sh
export DATABASE_URL="sqlite://db.sqlite"
```

En sistemas Windows con:

```sh
set DATABASE_URL="sqlite://db.sqlite"
```

Una vez configurada la variable de entorno, puedes ejecutar la aplicación utilizando uno de los siguientes comandos:

- `npm run start`
- `nest start`

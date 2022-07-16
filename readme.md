# PRUEBA DESARROLLADORES KRU360

## Pasos para ejecutar la aplicación

Versiónes utilizadas:

- **Node**: v16.14.0
- **NPM**: 8.3.1

Para verificar que versión se tiene instalada:

> node -v
>
> npm -v

El proyecto está separado en dos carpetas: `api` y `client`. En estas carpetas esta el código del back-end y el front-end respectivamente.

El proyecto cuenta con un registro mediante Firebase por lo que se debe crear un proyecto en dicha plataforma a fin de obtener las variables necesarias que irán en el archivo "`.env`".

## Carpeta api

- En la carpeta `api` crear un archivo llamado "`.env`" en donde estarán la url de la base de datos de Mongo y las variables de Firebase, que debe tener el siguiente formato:

```
MONGO_DB_URL=urlDbMongo
MONGO_DB_URL=mongodb+srv://<username>:<password>@cluster0.vw9mbue.mongodb.net/?retryWrites=true&w=majority
PORT=3001
FIREBASE_TYPE=service_account
FIREBASE_PROJECT_ID=app-auth-firebase-d5c61
FIREBASE_PRIVATE_KEY_ID=34d0a40ff81747add703e8af5923cebe37d393b6
FIREBASE_PRIVATE_KEY=-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBCQCQMTtQWGABigIF\nFJ/SKokblAId/lVTN3os4pPXC+Mai7bV/xXALGlHDZsy7TxoiOyvksY4ndYV8HPU\ngvVo1eBe3NqXC2zVwAN9tf0V6ARbEn/2iYlbxsxICq7mL2nsTJT4fCOplsIZQ2P3\nXD38Py+notNth7FEbTB0MxebPejcc1vSg559lCUDgpUgZzJK7vgGYNuxzvqdrsss\njAjl4afJ/bbl80fwpKTX6YVT+2EIgIwUE5RvCoK0d9jrKdCuyBWCpHmrGK3AWuSF\nb0spVfk/sph4k6Q6HqcpkxwPQ7qKWs11Tw/hXVlxjUcOfWoe/XbExsaDJEjcQrup\n8zahimcNAgMBAAECggEARKE6Iwa9Q15Fkdd8LlMSiS7MRyxbvk0EeMKrLUq6IFNp\nhbdwydQZk7kVKosiGns5dGO+twng8PZOm1JtriVGMsCZxhSpC5/lyXrKaBfToulO\nQLC70RPw/UUgc+0TVGYq7Y5ghwJ7hfy+Yujjk+EbNIXabiKMrA3wZw4+aSRxZiNH\nJg2jeTf8Yo+8MgETGc3erFbqGs34Ybpvr2IMHRb6e3RMNUCHOzGT8veBmGGKoKVU\nqvyOsAusc32sUR2RmSQ4GZn3ypldbkBPtSifhcD2rirLrx8ynPkQqVyOto6vgrI5\nutRVu83D/K2E6DcyMbmQWKutMTSqvPcCncFkNbrmfQKBgQDBjHKQQ5Zka+uvTrDf\nhd+FvZOeMx1e2WCPgHBR6kphFVHK3NKmU1l3I7rI/WtjG/NTHK1AATbv4aQ0yv6W\n3G5LG5cP0efY0iHm9q/SIdgTyr/0+iuIq4ZwwKTJHCPMolj241HauShbVnEHWkO/\nEfacFcKhW3bmMRNNJFdIsrEyYwKBgQC+t9dyT8saJnrhkfM1wDwhI+5ib9Bd3Tca\nOvo1uM1F+uA0A7RvUwv5uYFRXHhpx0rXjAz7stHJ3cgxqBXdj7H7EkQAxRlLPtEy\nfzWdXduh/HtkgYa64r5HiuO8hfGy626Azpa9L7qL3HqTL/5k4ccs/2Ui39neHvaL\nYSlxRr6DzwKBgEwuwBlQwS2d3RMP4kbZJvY5fJVUgUcIQR267HsRwV0dSyiSasfV\nHu3qPmdGeLJ2Gfyo2PjMgZdCNaQiErvG4BLoNTmg4aVScM28Y9BOSgLgV1ZR8jjF\naxGOgk42qVCuxl3HdDynjN8G006VlPzsUSl21zk0C0ToJDTFDSYsT9sJAoGAOjvS\nSjI5FtwHC1dQRupSsd/RyzbPDcodKCI4Ai1SaHrI+Ljk4FUgQ/kzlk9A6TOUE6rM\n0BHy4suYdCkZvBRDSSFzqDSGm6YrpFqZWVquVJDOcIroQ6o2ZYvwK8FOYs5maGgs\nOMoZENmah9TQvab+9StqizKEyMD1kOtzBwaN55sCgYALF5wL0Dcc8uGuwqoW2K4P\nU99D4YYP2ezTcKxMCZOwMhtFjObBVmA0l5U/TNZx/MJ0dNZEH4u0FSaXSQFDYe+c\nDYaMBCTtuq2nWK5MHtLmIB+fouRBZJq+AaLek1xXZHlffsMzUsLmv+abENry0/VY\nyZZBKtED1L+qG9algpswjQ==\n-----END PRIVATE KEY-----\n
FIREBASE_CLIENT_EMAIL=firebase-adminsdk-bchjrx@app-auth-firebase-d2c10.iam.gserviceaccount.com
FIREBASE_CLIENT_ID=608259240785571651113
FIREBASE_AUTH_URI=https://accounts.google.com/o/oauth2/auth
FIREBASE_TOKEN_URI=https://oauth2.googleapis.com/token
FIREBASE_AUTH_PROVIDER=https://www.googleapis.com/oauth2/v1/certs
FIREBASE_CLIENT=https://www.googleapis.com/robot/v1/metadata/x501/firebase-adminsdk-bcjrx%41app-auth-firebase-d2c60.iam.gserviceaccount.com
```

- Posicionarse en la carpeta `api`
- Iniciar una terminal en el editor de código y ejecutar el comando `npm install` para instalar las dependecias necesarias
- Una vez finalizada la instalacion de dependencias ejecutar en la terminal el comando `npm start`, si todo va bien deberá verse una respuesta como la siguiente

```
[nodemon] restarting due to changes...
[nodemon] starting node index.js
server listening at 3001
Mongo test connected!
```

## Carpeta client

- En la carpeta `client` crear un archivo llamado "`.env`", en donde estarán la url apuntando al backend, que debe tener el siguiente formato:

```
REACT_APP_API=http://192.168.100.20:3001
ó
REACT_APP_API=http://localhost:3001
```

- Posicionarse en la carpeta `client`
- Iniciar una terminal en el editor de código y ejecutar el comando `npm install` para instalar las dependecias necesarias
- Una vez finalizada la instalacion de dependencias ejecutar en la terminal el comando `npm start`, si todo va bien deberá verse una respuesta como la siguiente y desplegar la aplicación en el navegador.

```
Compiled successfully!

You can now view client in the browser.

  Local:            http://localhost:3000
  On Your Network:  http://192.168.1.11:3000

Note that the development build is not optimized.
To create a production build, use npm run build.

webpack compiled successfully
```

Al ser este proyecto pensado para una organización, el registro no cuenta con una validación de email.

Para acceder como administrador el correo de registro deberá tener el formato `username@admin.com`, para cualquier otro formato se considerará un usuario normal.

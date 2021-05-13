## Express.js + PlanetScale example

Example code for using PlanetScale with

## Usage

### Setup your database
1. [Install the PlanetScale CLI](https://planetscale.com/cli).
2. Authenticate the CLI.
```
pscale auth
```

3. Create a new database.
```
pscale database create my-app
```

4. Connect to your database's `main` branch.
```
pscale connect my-app main
```

By default this will allow you to connect to your PlanetScale database
by connecting to `127.0.0.1:3306` with the username `root` and no password (the CLI handled authentication for you).
You can also set your local address with the following: `pscale connection my-app main --local-addr 127.0.0.1:1337`

### Running the example app

1. Clone this repository.
2. run `npm install`.
3. Edit `app.js` to update the credentials to match your PlanetScale connection.
4. Run `node app.js` to start the app.

## Connecting in Express.js

1. `npm install mysql --save`

2. Create a connection to your database.

```JavaScript
const mysql = require('mysql')
const connection = mysql.createConnection({
  host: 'localhost',
  port: '1337', // Make sure this matches the port used by pscale connect.
  user: 'root', // Username is root, password is empty.
  database: 'my-app'
})

connection.connect()

connection.query('SELECT * from users', function (err, rows, fields) {
  if (err) throw err

  res.send(rows[0])
})

connection.end()

```

## Deploying to Heroku
TODO




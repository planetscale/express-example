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

### Running the example app

1. Clone this repository.
2. run `npm install`.
3. Edit `app.js` to update the credentials to match your PlanetScale connection.
4. Use pscale to create a connection to your database and start up the app
```
pscale connect your-db-name main --execute 'node app.js'
```

Running pscale connect with `execute` will pass a `DATABASE_URL` to the node application, enabling it to connect to PlanetScale.

## Connecting in Express.js

1. `npm install mysql --save`

2. Create a connection to your database.

```JavaScript
const mysql = require('mysql')
const connection = mysql.createConnection(process.env.DATABASE_URL)

connection.connect()

connection.query('SELECT * from users', function (err, rows, fields) {
  if (err) throw err

  res.send(rows[0])
})

connection.end()
```

## Deploying to Heroku
We'll use the pscale CLI on Heroku to establish a secure connection to your database.

1. Create a PlanetScale service token
```
pscale service-token create
```

Take note of the values it returns to you.

2. Grant that token access to your database.
```
pscale service-token add-access your-token-name connect_production_branch read_branch --database your-db-name
```

3. Set config vars for your Heroku application. You'll use your service token to authenticate to your database.
```
heroku config:set PLANETSCALE_ORG=your-org-name
heroku config:set PLANETSCALE_SERVICE_TOKEN_NAME=your-token-name
heroku config:set PLANETSCALE_SERVICE_TOKEN=your-token
```

4. Add the `pscale` linux distribution to your repository. [Download here](https://github.com/planetscale/cli/releases).

```
TODO
wget path-to-cli
tar
```

5. Add a Procfile that initiates your app using pscale.

Procfile
```
web: ./pscale connect your-db-name main --execute 'node app.js'
```

6. That's it! Push to Heroku and you'll have a working app.







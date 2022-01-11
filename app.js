require('dotenv').config();
const express = require('express')
const app = express()
const port = process.env.PORT || 3000

const mysql = require('mysql2')
let connection = {};

/*
  ---- Note: You only need one connection object in the if/else statement ----

  OPTION 1:
    Use if you're using connection strings in your app (see docs)
    https://docs.planetscale.com/tutorials/connect-nodejs-app#using-a-connection-string

  OPTION 2:
    Use if you're connecting with client certificates via CLI (see docs)
    https://docs.planetscale.com/tutorials/connect-nodejs-app#using-client-certificates-with-the-cli
    
  Feel free to remove the if/else statement once you decide which you'll use
*/

if (process.env.DATABASE_HOST) {
  connection = mysql.createConnection({
    host : process.env.DATABASE_HOST,
    database: process.env.DATABASE_NAME,
    user : process.env.DATABASE_USERNAME,
    password : process.env.DATABASE_PASSWORD,
    ssl : {
        rejectUnauthorized: true
    }
  });
} else {
  connection = mysql.createConnection(process.env.DATABASE_URL)
}

connection.connect()

app.get('/', (req, res) => {
  connection.query('SELECT * FROM users', function (err, rows, fields) {
    if (err) throw err

    res.send(rows)
  })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

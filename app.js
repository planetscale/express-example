require('dotenv').config();
const express = require('express')
const app = express()
const port = process.env.PORT || 3000

const mysql = require('mysql2')
const connection = mysql.createConnection({
  host : process.env.DATABASE_HOST,
  user : process.env.DATABASE_USERNAME,
  password : process.env.DATABASE_PASSWORD,
  ssl : {
      rejectUnauthorized: true
  }
});

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

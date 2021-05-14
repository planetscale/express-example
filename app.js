const express = require('express')
const app = express()
const port = 3000

const mysql = require('mysql')
const connection = mysql.createConnection(process.env.DATABASE_URL)

connection.connect()

app.get('/', (req, res) => {
  connection.query('SELECT * from users', function (err, rows, fields) {
    if (err) throw err

    res.send(rows[0])
  })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

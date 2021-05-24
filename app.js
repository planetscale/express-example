const express = require('express')
const app = express()
const port = process.env.PORT || 3000

const mysql = require('mysql')
const connection = mysql.createConnection(process.env.DATABASE_URL)

connection.connect()

app.get('/', (req, res) => {
  connection.query('SELECT VERSION()', function (err, rows, fields) {
    if (err) throw err

    res.send(rows)
  })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

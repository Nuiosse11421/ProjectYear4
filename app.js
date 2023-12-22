import express from 'express'
import ejs from 'ejs'
import pool from './database/db.js'
const app = express()
const port = 8080

app.set('view engine', 'ejs')

app.get('/',  (req, res) => {
    res.render('index')
})
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`)
})
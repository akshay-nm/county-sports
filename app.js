require('dotenv').config()

const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const multer = require('multer')
const helmet = require('helmet')

const app = express()

app.use(express.static(path.join(__dirname, 'public')))

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use(helmet())

app.use(function(req, res, next) {
  if(!req.secure && req.get('x-forwarded-proto') !== 'https' && process.env.NODE_ENV !== "development") {
    return res.redirect('https://' + req.get('host') + req.url)
  }
  next()
})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(multer().array())

app.get('/', (req, res) => {
  res.render('pages/index')
})

app.listen(process.env.PORT, function() {
  console.log(`App listening on port: ${process.env.PORT}`)
})

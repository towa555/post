const express = require('express')
const cookieParser = require('cookie-parser')
// const flash = require('flash')
// const session = require('session')
const mongoose = require('mongoose')
const Article = require('./models/article')
const articleRouter = require('./routes/articles')
const methodOverride = require('method-override')

const app = express()
//connect to mongodb database
mongoose.connect('mongodb://localhost/blog', {
  useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true
})
//set view engine to ejs which is what we will be writing out html based code with
app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: false }))
//mehtode override allows us to use the delete methode
app.use(methodOverride('_method'))
//renders our new article in our index file
app.get('/', async (req, res) => {
  const articles = await Article.find().sort({ createdAt: 'desc' })
  res.render('articles/index', { articles: articles })
})
// app.get('/login', (req, res) => {
//   res.render('login')
// })
// app.get('/register', (req, res) => {
//   res.render('register')
// })

app.use('/articles', articleRouter)
app.listen(2000)
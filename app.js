//Carregando módulos 
const express = require('express')
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser')
const app = express()
const admin = require("./routes/admin")
const path = require('path')
const mongoose = require('mongoose')
const session = require('express-session')
const flash = require('connect-flash')

//Configurações
//app.use serve para criação de middlewares
//Session
    app.use(session({
        secret: "qualquercoisa", //o legal é uma secre segura talkey
        resave: true,
        saveUninitialized: true
    }))
    //o flash tem que ser configurado abaixo da session
    app.use(flash())
//Configurando o Middleware
    app.use((req, res, next) => {
        res.locals.success_msg = req.flash("success_msg")
        res.locals.error_msg = req.flash("error_msg")
        next()
    })    
//BodyParser
    app.use(bodyParser.urlencoded({extended:true}))
    app.use(bodyParser.json())
//Handlebars
    app.engine('handlebars',handlebars({defaultLayout: 'main'}))
    app.set('view engine', 'handlebars')
//Mongoose
    mongoose.Promise = global.Promise;
    mongoose.connect("mongodb://localhost/bancop").then(() => {
        console.log("Conectado ao mongo")
    }).catch((erro) => {
        console.log("erro ao se conectar: " + erro )
    })
//Public - programar a pasta de arquivos estáticos
    app.use(express.static(path.join(__dirname, "public")))
        //middleware
        // app.use((req, res, next) => {
        //     console.log("oi eu sou um middleware")
        // })

//Rotas


app.get('/',(req, res) => {
    res.render("index")
})


//Outros
const PORT = 8081
app.listen(PORT,() => {
console.log("Servidor Rodando")
})
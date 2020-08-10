// Funcionalidades

// function getSubject(subjectNumber){
//     const position = +subjectNumber - 1
//     return subjects[position]
// }


// function pageLanding(req, res) {
//     return res.render('index.html')

// }

// function pageStudy(req, res) {
//     const filters = req.query
//     return res.render('study.html', { proffys, filters, subjects, weekdays })
// }

// function pageGiveClasses(req, res) {
//     const data = req.query

//     // [name, avatar, bio]
//     // se tiver dados
//     const isNotEmpty = Object.keys(data).length > 0
//     if (isNotEmpty) {
//         data.subject = getSubject(data.subject)
//         // adicionar data ao a lista de proffys
//         proffys.push(data)
//         return res.redirect('/study')
//     }

//     // se nao, nao adicionar
//     return res.render('give-classes.html', { subjects, weekdays })
// }


// servidor
const express = require('express')
const server = express()

const { pageLanding, pageStudy, pageGiveClasses, saveClasses } = require("./pages")


// configurar nunjucks (template engine)
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
    express: server,
    noCache: true,

})

// Inicio e configuracao do servidor
server
    .use(express.urlencoded({extended: true}))
    
    // configurar arquivos estaticos (css, scripts, images)
    .use(express.static('public'))
    
    // rotas de aplicacao
    .get('/', pageLanding)
    .get('/study', pageStudy)
    .get('/give-classes', pageGiveClasses)
    .post("/save-classes", saveClasses)
    
    // start do servidor
    .listen(5500)
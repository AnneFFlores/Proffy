//Dados
const proffys = [
    {
        name: "Diego Fernandes",
        avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4",
        whatsapp: "89989898",
        bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências.Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
        subject: "Quimica",
        cost: "20",
        weekday: [0],
        time_from: [720],
        time_to: [1220]
    },
    {
        name: "Anne Flores",
        avatar: "https://avatars2.githubusercontent.com/u/67755078?s=460&u=3f1f8d4b9ad5d5bc2e9f12f8b69ae32caa426a03&v=4",
        whatsapp: "044 99967-0711",
        bio: "Entusiasta dos melhores designers. Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências.Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
        subject: "HTML / CSS",
        cost: "20",
        weekday: [0],
        time_from: [720],
        time_to: [1220]
    }
]

const subjects = [
    "Algorítimo",
    "Lógica",
    "Design Gráfico",
    "Educação Física",
    "JavaScript",
    "HTML / CSS",
    "Full Stack",
    "Matemática",
    "Português",
    "Química",
]

const weekdays = [
    "Domingo",
    "Segunda-Feira",
    "Terça-Feira",
    "Quarta-Feira",
    "Quinta-Feira",
    "Sexta-Feira",
    "Sábado",
]

//Funcionalidades

function getSubject(subjectNumber) {
    const position = +subjectNumber - 1
    return subjects[position]
}

function pageLanding(req, res) {
    return res.render("index.html")
}

function pageStudy(req, res) {
    const filters = req.query
    return res.render("study.html", { proffys, filters, subjects, weekdays })
}

function pageGiveClasses(req, res) {
    const data = req.query

    //se tiver dados (data): 
    const isNoEmpty = Object.keys(data).length > 0
    if (isNoEmpty) {

        data.subject = getSubject(data.subject)
        //adicionar dados(data) a lista proffys
        proffys.push(data)

        return res.redirect("/study")
    }

    //se não, mostrar a página:
    return res.render("give-classes.html", { subjects, weekdays })
}

//Servidor
const express = require('express')
const server = express()

//Configurar Nunjucks
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
    express: server,
    noCache: true,
})

//Início e configuração do servidor
server
    //configurar arquivos estáticos (css. scripts, imagens)
    .use(express.static("public"))
    //rotas da aplicação
    .get("/", pageLanding)
    .get("/study", pageStudy)
    .get("/give-classes", pageGiveClasses)
    //Starr do servidor
    .listen(3333)




// console.log(__dirname);
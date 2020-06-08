const express = require("express")
const server = express()

const db = requier("./database/db.js")


//configurar pasta pública
server.use(express.static("public"))

const nunjucks = require("nunjucks")
nunjucks.configure("src/views",{
    express: server,
    noCache: true
})

//config de rotas
server.get("/", (req,res) =>{
    return res.render("index.html",{
        title:"one title"
    })
})

server.get("/create-point", (req,res) =>{
    return res.render("create-point.html")
})

server.get("/search", (req,res) =>{
    return res.render("search-results.html")
})

server.listen(3000)



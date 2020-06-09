const express = require("express")
const server = express()

const db = require("./database/db.js")
//habilitar o uso do req body
server.use(express.urlencoded({extended : true}))

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
    console.log(req.query)
    return res.render("create-point.html")
})

server.post("/save-point",(req,res) => {
    console.log(req.body)

    const query = `
    INSERT INTO places (
        image,
        name,
        adress,
        adress2,
        state,
        city,
        items
    ) VALUES (?, ?, ?, ?, ?, ?,?);`

    const values = [
        req.body.image,
        req.body.name,
        req.body.adress,
        req.body.adress2,
        req.body.state,
        req.body.city,
        req.body.items
    ]
    
    function afterInsertData(err){
        if(err){
            console.log(err)
            return res.send("Erro no cadastro.html")

        }
            

        console.log("Cadastrado com sucesso")
        console.log(this)

        return res.render("create-point.html", {saved : true})
    }

    db.run(query,values,afterInsertData)

    
})


server.get("/search", (req,res) =>{
    const search = req.query.search

    if (search == "")
    {
        return res.render("search-results.html",{total: 0 })
    }


    function showData(err,rows){
        if(err)
            return console.log(err)
        console.log("Aqui estão seus dados")
        console.log(rows)
        
        const total = rows.length

        //mostrar na pagina html os dados do bando de dados
        return res.render("search-results.html",{places:rows,total:total})
    }
    db.all(`SELECT * FROM places WHERE city LIKE '%${search}%'`,showData)
})

server.listen(3000)



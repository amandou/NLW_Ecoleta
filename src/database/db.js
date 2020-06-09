const sqlite3 = require("sqlite3").verbose()

const db = new sqlite3.Database("./src/database/database.db")

module.exports = db


//db.serialize( () =>{
//     //Criação de tabela
//     db.run(`
//         CREATE TABLE IF NOT EXISTS places (
//             id INTEGER PRIMARY KEY AUTOINCREMENT,
//             image TEXT,
//             name TEXT,
//             adress TEXT,
//             adress2 TEXT,
//             state TEXT,
//             city TEXT,
//             items TEXT
//         );
//     `)

//     //Inserir dados na tabela
//     const query = `
//     INSERT INTO places (
//         image,
//         name,
//         adress,
//         adress2,
//         state,
//         city,
//         items
//     ) VALUES (?, ?, ?, ?, ?, ?,?);`

//     const values = [
//     "https://images.unsplash.com/photo-1528323273322-d81458248d40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1101&q=80",
//     "PaperSide",
//     "Guilherme Gamballa, Jardim America",
//     "Nro 360",
//     "Santa Catarina",
//     "Rio do Sul",
//     "Papéis e Papelão"]

//     function afterInsertData(err){
//         if(err)
//             return console.log(err)

//         console.log("Cadastrado com sucesso")
//         console.log(this)
//     }

//     db.run(query,values,afterInsertData)

//     //Consulta de dados
//     function showData(err,rows){
//         if(err)
//             return console.log(err)
//         console.log("Aqui estão seus dados")
//         console.log(rows)
//     }
//     db.all("SELECT * FROM places",showData)

    // //Deletar dados
    // function deletionComplete(err){
    //     if(err)
    //         return console.log(err)
    //     console.log("Registro deletado com sucesso")
    // }
    
    // db.run("DELETE FROM places WHERE id = ?",[9],deletionComplete)
     
//     db.all("SELECT * FROM places",showData)

//})
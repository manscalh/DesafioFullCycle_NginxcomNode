const express   = require('express')
const app = express()
const port = 3000

const config ={
    host:'db',
    user:'root',
    password: 'root',
    database:'nodedb'
}

const mysql = require('mysql')
const connection = mysql.createConnection(config)

const sql = `INSERT INTO people(name) values('Deus é +')`
connection.query(sql)
connection.end()

app.get('/', async(req,res) =>{

    const con = mysql.createConnection(config)
    const sql = `SELECT id, name FROM people`;  
  
    await con.query(sql, (error, results, fields) => {
      if (error) {
        throw error
      };
      
      let lista = '';
      for(let people of results) {      
        lista += `<li>${people.id} - ${people.name}</li>`;
      }
  
      res.send('<h1>Full Cycle Rocks!</h1>' + lista);    
    });   
    con.end();
})

app.listen(port,()=>{
    console.log('Rodando na port',port);
})
const express =  require("express");
const app = express();
const mysql = require("mysql");
const cors = require('cors');


const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "root",
    database: "pvendas",
})

app.use(express.json());
app.use(cors());

app.post('/login', (req, res) => {
    const email = req.body.email;
    const senha = req.body.senha;
    db.query("SELECT * FROM usuario WHERE email = ? AND senha = ?", [email, senha], (err, result) => {
        if(err){
            res.send(err);  
        }
        if(result.length > 0){
            res.send({msg: "Usuário logado com sucesso", usuario: result[0]});
        }else{
            res.send({msg: "Usuário não encontrado."})
        }   
    }); 
}); 

app.post('/promotores', (req, res) => {
    db.query("SELECT nome, id FROM usuario WHERE perfil = 'Promotor'", (err, result) => {
        if(err){
            res.send(err);  
        }
        if(result.length > 0){
            res.send({msg: "Promotores encontrados com sucesso", promotores: result});
        } 
    }); 
}); 

app.post('/rotasPromotor', (req, res) => {
    const idPromotor = req.body.promotor;
    console.log('!!!! ' + idPromotor);
    db.query("SELECT loja, id, localizacao FROM rota WHERE promotor = ?", [idPromotor], (err, result) => {
        if(err){
            res.send(err);  
        }
        if(result.length > 0){
            res.send({msg: "Rotas encontradas com sucesso", rotas: result});
        } 
    }); 
}); 

app.post('/cadastro', (req, res) => {
    const email = req.body.email;
    const senha = req.body.senha;
    const nome = req.body.nome;
    const email_supervisor = req.body.email_supervisor;
    const cpf = req.body.cpf;
    const perfil = req.body.perfil;
    
    db.query("SELECT * FROM usuario WHERE email = ?", [email], (err, result) => {
        if(err){
            res.send(err);  
        }
        if(result.length == 0){
            db.query("INSERT INTO usuario (email, senha, nome, email_supervisor, cpf, perfil) VALUES (?, ?, ?, ?, ?, ?)", [email, senha, nome, email_supervisor, cpf, perfil], (err, response) => {
                if(err){
                    res.send(err);  
                }
                res.send({msg: "Cadastrado com sucesso"}) 
            });
        }else{
            res.send({msg: "Usuário já cadastrado."})
        }   
    }); 
});

app.post('/cadastroRota', (req, res) => {
    const loja = req.body.loja;
    const localizacao = req.body.localizacao;
    const promotor = req.body.promotor;
    const duracao = req.body.duracao;
    
    db.query("INSERT INTO rota (loja, localizacao, promotor, duracao) VALUES (?, ?, ?, ?)", [loja, localizacao, promotor, duracao], (err, response) => {
        if(err){
            res.send(err);  
        }
        res.send({msg: "Rota cadastrada com sucesso"}) 
    });
});

/*app.get('/', (req,res) => {
    db.query("INSERT INTO usuario (email, senha) VALUES ('chirlenyfranca@hotmail.com', '145876')", (err, result) => {
        if(err){
            console.log(err);  
        }
    });
});*/

app.listen(3001, () => {
    console.log('Rodando na porta 3001');
});
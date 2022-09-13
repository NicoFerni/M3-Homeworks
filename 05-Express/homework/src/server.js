// const bodyParser = require("body-parser");
const express = require("express");

const STATUS_USER_ERROR = 422;
const path = '/post'

// This array of posts persists in memory across requests. Feel free
// to change this to a let binding if you need to reassign it.
const posts = [];
const id = 0;

const server = express();
// to enable parsing of json bodies for post requests
server.use(express.json());

server.post(path, (req, res) => {
    const {author, title, contents} = req.body

    if (!author || !title || !contents){
       return res.status(STATUS_USER_ERROR).json({error: "No se recibieron los parámetros necesarios para crear el Post"})
    }
    const post = {author, title, contents, id:id++}

    post.push(post)
    res.json(post)
})

server.post(`${path}/author/:author`, (req, res) => {
    let {author} = req.params
    let {title, contents} = req.body

    if (!author || !title || !contents){
        return res.status(STATUS_USER_ERROR).json({error: "No se recibieron los parámetros necesarios para crear el Post"})
     }
     const post = {author, title, contents, id:id++}
 
     post.push(post)
     res.json(post)
 })

server.get(path, (req, res) => {

    let {term} = req.query

    if (term){
        const term_post = post.filter(el => el.title.includes(term) || el.contents.includes(term)) 
        return res.json(term_post)
    }
    
res.json(post)
})

server.get("/post/:author", (req, res) =>{
    let {author} = req.params
    const author_post = post.filter(el => el.author === author)
    if (author_post.length > 0){
        res.json(author_post)
    } else {
        res.status(STATUS_USER_ERROR).json({error: 'No existe ningun post del autor indicado'})
    }
})

// server.get("/post/:author/:title", (req, res) =>{
//     let {author, title} = req.params
//     const post = post.filter(el => el.title === title && )

// })    
module.exports = { posts, server };

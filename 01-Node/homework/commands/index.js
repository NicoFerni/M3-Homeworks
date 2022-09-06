
//file system
const fs = require('fs')
const request = require('request')

module.exports = {
        date: function(arg, done){
            done(Date())
        },
        pwd: function(arg, done){
            done(process.cwd())
        },
        ls: function(arg, done){
            fs.readdir('.', 'utf-8', function(error, files){
                if(error) throw error
               // console.log("files:", files)
               let lista = files.join('\n')
               done(lista)
            })
        },
        echo: function(arg, done){
            done(arg.join(" "))
        },
        cat: function(arg, done){
            fs.readFile(arg[0], 'utf-8', function(error, data){
                if(err) console.log('path not found')
                console.log('prueba hola', data)
            })
            done(data)
        },
        head: function(arg, done){
            fs.readFile(arg[0], 'utf-8', function(error, data){
                if(err) console.log('path not found')
                const lines = data.split('\n').slice(0,10).join('\n')
                done(lineas)
        }) },
        tail: function(arg, done){
            fs.readFile(arg[0], 'utf-8', function(error, data){
                if(err) console.log('path not found')
                const lines = data.split('\n').slice(-10).join('\n')
                done(lineas)
        }) },
        curl: function(arg, done){
            request(arg[0], function(error, response, body){
                if(error) throw error
                done(body)
            })
        }
}
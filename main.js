const http = require('http')

const port = 5000

 const fs = require('fs')

const data = fs.readFileSync('hello.txt')
console.log(data.toString())

http.createServer(function(request, response){
 response.write('Welcome to this server')
response.end()
}).listen(port)

console.log(`server is runing at ${port}`)
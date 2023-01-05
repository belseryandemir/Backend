// console.log(__filename);
console.log(__dirname);

const http = require('http')
const fs = require('fs')
const port = 3245
// const temp = fs.readFileSync(`${__dirname}`)
// const content = temp.toString()
// console.log(content)
const fileobj = {
    file1: '/app.js',
    file2: '/index.html',
    file3: '/callbacks.js',
}
const temp = fs.readFileSync(`${__dirname}fileobj.file1`,`${__dirname}fileobj.file2`,`${__dirname}fileobj.file3`)
const content = temp.toString()

const server = http.createServer(function(req, res) {    
    if(req.params.pathname === fileobj) {
        const filetodisplay = fs.readFileSync(`${__dirname, fileobj}`)
        res.writeHead(200, {'Content-Type': 'text/plain'})
        res.end(content)
    } else {
        res.writeHead(404, {'Content-Type': 'text/plain'})
        res.end(404, `There is no file with the name ${req.params.pathname}`)
    }
})


server.listen(port, function(error){
    if(error){
        console.log(`Something went wrong ${error}`)
    } else{
        console.log(`Server is listening at ${port}`)
    }
})

const http = require('http') //untuk mengambil modul
const url = require('url')
const fs = require('fs')

const app = http.createServer((req, res) => {

    let nameRoute = url.parse(req.url).pathname

    switch (nameRoute) {
        case "/":
            res.writeHead(200, { 'Content-Type': 'text/html' })
            let homePage = fs.readFileSync('./view/index.html')
            res.write(homePage)
            res.end()
            break;

        case "/about":
            res.writeHead(201, { 'Content-Type': 'text/html' })
            let aboutPage = fs.readFileSync('./view/about.html')
            res.write(aboutPage)
            res.end()
            break;

        case "/contact":
            res.writeHead(202, { 'Content-Type': 'text/html' })
            let contactPage = fs.readFileSync('./view/contact.html')
            res.write(contactPage)
            res.end()
            break;

        default:
            res.writeHead(404, { 'Content-Type': 'text/plain' })
            res.end()
            break;
    }


})

app.listen(3000)

console.log("this app is running on http://localhost:3000")
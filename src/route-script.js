const http = require("http")
const url = require("url")
const fs = require("fs")

const app = http.createServer((req,res) => {
    let pathName = url.parse(req.url).pathname
    console.log(`Current path name is: ${pathName}`);
    res.writeHead(200, {"Content-Type": "text/html"})
    
    switch (pathName) {
        case "/":
            res.write(fs.readFileSync("./view/home-page.html"));
            break;
        case "/about":
            res.write(fs.readFileSync("./view/about-page.html"));
            break;
        case "/contact":
            res.write(fs.readFileSync("./view/contact-page.html"));
            break;
        default:
            res.write(fs.readFileSync("./view/404-page.html"));
            break;
    }

    res.end()
})

app.listen(8080)
console.log("Application is running on: http://localhost:8080");

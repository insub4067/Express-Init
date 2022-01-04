import express from "express";
import path from "path";
import http from "http"; 

const __dirname = path.resolve();
const app = express();

// APP
app.set("views", path.join(__dirname, "views"))
app.set("view engine", "ejs")
app.use('/static', express.static(__dirname+"/static"));

app.get("/",(req, res) => { 
    res.render('home')
})

// Server
const httpServer = http.createServer(app);


// Liste
const handleListen = () => console.log("Listen on http://localhost:3000")

httpServer.listen(3000, handleListen); 

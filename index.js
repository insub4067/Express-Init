import express from "express";
import path from "path";
import http from "http"; 

const __dirname = path.resolve();

// APP
const app = express();

app.set('view engine', 'ejs');
app.use('/static', express.static(__dirname+"/static"));
app.set("views", path.join(__dirname, "views"))

app.get("/",(req, res) => { 
    res.render('home')
})


// SERVER
const httpServer = http.createServer(app);
const handleListen = () => console.log("Listen on http://localhost:3000")

httpServer.listen(3000, handleListen); 

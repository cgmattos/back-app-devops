import express from 'express';
import cors from 'cors';
import fs from 'fs';

const app = express();
const port = process.env.BACKEND_PORT || 8080;
const IP = process.env.BACKEND_IP || '0.0.0.0';

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Credentials", true)
    next()
});

app.use(cors({
    origin: "*",
}));

app.get("/text", (req, res) => {
    console.log(req.originalUrl);
    try{
        fs.readFile(process.env.FILE_PATH, 'utf8', (err, data) => {
            if (err) {
              console.error(err);
              return;
            }
            res.send(data);
        });
    }catch(e){
        console.log(e);
    }
});

app.get("/", (req, res) => {
    console.log(req.originalUrl);
    res.send("Ok");
})

app.get("/color", (req, res) => {
    console.log(req.originalUrl);
    if (process.env.BACKGROUND_COLOR){
        res.send(process.env.BACKGROUND_COLOR);
    }else{
        res.send("#fff");
    }
    
});

app.listen(port, IP, () => {
    console.log(`Server listening on ${IP}:${port}`);
});
import  express  from "express";
import dotenv from "dotenv";
import cors from "cors";
import conectarDB from './config/db.js';

dotenv.config(); //Para trabajar las varialbles de entorno


const PORT = process.env.PORT || 4090; 

const app = express();

//Para trabajar con document JSON 
app.use(express.json());

conectarDB();

//Middleware
app.use('/', (req, res)=> {
    res.json("Hola pingÜis")
});

app.listen (PORT, () => {
    console.log(`Servidor encendido en el puerto ${PORT}`);
});
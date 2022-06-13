import express from "express";
import pizzaRouter from "./controllers/pizzaController.js";
import cors from 'cors'
const app = express();

const port = 5000;

//middlewares
app.use(cors());
app.use(express.json());


//probamos el serverrrrrrrrrrrrrrrr
app.listen(port, () => {
    console.log(`Listening on ${port}`)
})

//rutitas
app.use("/api/pizzas", pizzaRouter);
app.use("usuarios/")

import Router from 'express';
import Pizza from '../models/Pizza.js';
import PizzaService from '../services/pizzas-services.js';

const pizzaRouter = Router();

const pizzaService = new PizzaService();

pizzaRouter.get('', async (req, res) => {
    try {
        const pizzas = await pizzaService.getAll();
        return res.status(200).send(pizzas);
    }
    catch (error) {
        res.status(500).send("Hubo un error")
    }
});

pizzaRouter.get('/:id', async (req, res) => {
    try {

        const { id } = req.params
        const pizzas = await pizzaService.getById(id);
        if(pizzas==null){
            return res.sendStatus(404);
        }
        else{
            return res.status(200).send(pizzas);
        }
    }
    catch (error) {
        res.status(500).send({ error })
    }
});

pizzaRouter.post('/create', async (req, res) => {
    try {
        const nuevaPizza = req.body;
        const pizzaCreada = await pizzaService.createPizza(nuevaPizza);
        return res.status(200).send(nuevaPizza);
    }
    catch (error) {
        res.status(500).send({ error })
    }
});

pizzaRouter.put('/update/:id', async (req, res) => {
    try {
        const { nombre, libreGluten, importe, descripcion } = req.body
        const { id } = req.params
        const nuevaPizza = new Pizza(nombre, libreGluten, importe, descripcion)
        const pizzaActualizada = await pizzaService.updatePizza(id, nuevaPizza);
        return res.status(200).send(nuevaPizza);
    }


    catch (error) {
        res.status(500).send({ error })
    }
});


pizzaRouter.delete('/delete/:id', async (req, res) => {
    try {
        const { id } = req.params
        const pizzaBorrada = await pizzaService.deleteById(id);
        return res.status(200).send(pizzaBorrada);
    }
    catch (error) {
        res.status(500).send({ error })
    }
});

export default pizzaRouter;
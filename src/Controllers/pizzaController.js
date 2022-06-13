import Router from 'express'

import PizzaService from '../services/pizzas-services.js';

const pizzaRouter = Router();

const pizzaService = new PizzaService();

pizzaRouter.get('', async (req, res) => {
    const pizzas = await pizzaService.getAll();
    console.log("aca tenes las pizzas")
 return res.status(200).json(pizzas);
});
                           
export default pizzaRouter;
import config from'./dbconfig.js';
import sql from'mssql';
import PizzaService from './src/services/pizzas-services.js';
import Pizza from './src/models/Pizza.js';
import express from 'express';

//const express = require("express");
const app = express();

app.get('/conchadetumadre', function (req, res) {
    console.log("conchadetumadre")
    res.send('hola!!!!!!!!!');
});

/*
let svc = new PizzaService();
let all = await svc.getAll();
let pizzaId = await svc.getById(2);
const pizzaNueva = new Pizza('Pizza de verdura', false, 1200, 'Pizza de verdura con salsa blanca y queso.');
let nuevaPizza = await svc.createPizza(pizzaNueva);
const pizzaEditada = new Pizza('Pizza de humita', true, 1500, 'Pizza de choclo pero sin choclo de verdad, es como humita rara y salsa blanca.');
let editadaPizza = await svc.updatePizza(3, pizzaEditada);
let pizzaBorrada = await svc.deleteById(4);

console.log(all);
console.log(pizzaNueva);
console.log();
*/
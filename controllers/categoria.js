import { response } from 'express';
import Categoria from '../models/categoria.js';

const GetCtegorias = async (req, res = response) => {
    try {
        const users = await Categoria.getCategorias();
        res.json(users);
    } catch (error) {
        console.log("el: ", error)
        res.status(500).json({ error: 'Error al obtener los estados.' });
    }
};
const getCategoriasById = async (req, res = response) => {
    const idMaquina = req.params.idMaquina;
    try {
        const users = await Categoria.getCategoriasById(idMaquina);
        res.json(users);
    } catch (error) {
        console.log("el: ", error)
        res.status(500).json({ error: 'Error al obtener los estados.' });
    }
};

export { GetCtegorias, getCategoriasById };
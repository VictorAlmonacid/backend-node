import { response } from 'express';
import BaseInspeccion from '../models/BaseInpeccion.js';

const getBaseInpeccion = async (req, res = response) => {
    try {
        const users = await BaseInspeccion.getBaseInpeccion();
        res.json(users);
    } catch (error) {
        console.log("el: ", error)
        res.status(500).json({ error: 'Error al obtener los estados.' });
    }
};
const getBaseInpeccionByCategoria = async (req, res = response) => {
    const idCategoria = req.params.idCategoria;
    try {
        const users = await BaseInspeccion.getBaseInpeccionByCategoria(idCategoria);
        res.json(users);
    } catch (error) {
        console.log("el: ", error)
        res.status(500).json({ error: 'Error al obtener los estados.' });
    }
};

export { getBaseInpeccion, getBaseInpeccionByCategoria };
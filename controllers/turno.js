import { response } from 'express';
import Turno from '../models/turno.js';

const GetTurnos = async (req, res = response) => {
    try {
        const users = await Turno.getUsers();
        res.json(users);
    } catch (error) {
        console.log("el: ", error)
        res.status(500).json({ error: 'Error al obtener los usuarios.' });
    }
};

export { GetTurnos };
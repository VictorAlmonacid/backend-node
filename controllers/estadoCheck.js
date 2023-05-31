import { response } from 'express';
import EstadoCheck from '../models/estadoCheck.js';

const GetEstadosCheck = async (req, res = response) => {
    try {
        const users = await EstadoCheck.getEstadosCheck();
        res.json(users);
    } catch (error) {
        console.log("el: ", error)
        res.status(500).json({ error: 'Error al obtener los estados.' });
    }
};

export { GetEstadosCheck };
import { response } from 'express';
import BaseInspeccion from '../models/BaseInpeccion.js';
import Categoria from '../models/categoria.js';


const GetCheckMaquinaria = async (req, res = response) => {
    const idMaquina = req.params.idCategoria;

    const preguntas = [];
    const checkItem = {
        Categoria: '',
        IdCategoria: '',
        Preguntas: []
    }

    try {
        const categorias = await Categoria.getCategoriasById(idMaquina);

        for (const b of categorias) {
            checkItem.Categoria = b.Descripcion;
            checkItem.Categoria = b.Id;

            let BaseFind = await BaseInspeccion.getBaseInpeccionByCategoria(b.Id);
            BaseFind.forEach(element => {
                checkItem.Preguntas.push(element)
            });
            console.log(BaseFind)
        }

        res.json({
            Categoria: categorias[0].Descripcion,
            IdCategoria: categorias[0].Id,
            Preguntas: preguntas
        });
    } catch (error) {
        console.log("el: ", error)
        res.status(500).json({ error: 'Error al obtener los estados.' });
    }
};

export { GetCheckMaquinaria };
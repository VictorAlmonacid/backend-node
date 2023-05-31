import { Router } from "express";
import { GetCheckMaquinaria } from "../controllers/maquinaria.js";

const router = Router();


router.get('/:idCategoria', GetCheckMaquinaria);

export {
    router
};

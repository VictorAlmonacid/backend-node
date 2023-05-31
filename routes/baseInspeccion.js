import { Router } from "express";
import { getBaseInpeccion, getBaseInpeccionByCategoria } from "../controllers/BaseInpeccion.js";

const router = Router();


router.get('/', getBaseInpeccion);
router.get('/:idCategoria', getBaseInpeccionByCategoria);

export {
    router
};

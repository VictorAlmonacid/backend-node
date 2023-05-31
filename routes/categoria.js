import { Router } from "express";
import { GetCtegorias, getCategoriasById } from "../controllers/categoria.js";

const router = Router();


router.get('/', GetCtegorias);
router.get('/:idMaquina', getCategoriasById);

export {
    router
};

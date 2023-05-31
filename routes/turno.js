import { Router } from "express";
import { GetTurnos } from "../controllers/turno.js";

const router = Router();


router.get('/', GetTurnos);

export {
    router
};

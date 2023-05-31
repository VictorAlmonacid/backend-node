import { Router } from "express";
import { GetEstadosCheck } from "../controllers/estadoCheck.js";

const router = Router();


router.get('/', GetEstadosCheck);

export {
    router
};

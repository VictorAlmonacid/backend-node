import { config } from 'dotenv';
import express from 'express';
import { router as turnoRouter } from './routes/turno.js';
import { router as estadoCheckRouter } from './routes/estadoCheck.js';
import { router as categoriaRouter } from './routes/categoria.js';
import { router as baseInspeccionRouter } from './routes/baseInspeccion.js';
import { router as maquinariaRouter } from './routes/maquinaria.js';
import cors from 'cors';


export class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.turnoPath = '/api/aza/turno';
        this.EstadosCheckPath = '/api/aza/estados-check';
        this.categoriaPath = '/api/aza/categoria';
        this.baseInspeccionPath = '/api/aza/base-inspeccion';
        this.maquinariaPath = '/api/aza/maquinaria';


        // Middlewares
        this.middlewares();

        // Rutas de mi Aplicación
        this.routes();

    }


    middlewares() {
        // Middleware para configurar CORS, body parser, etc.
        this.app.use(express.json());
    }

    routes() {
        // Configuración de las rutas
        this.app.use(this.turnoPath, turnoRouter);
        this.app.use(this.EstadosCheckPath, estadoCheckRouter);
        this.app.use(this.categoriaPath, categoriaRouter);
        this.app.use(this.baseInspeccionPath, baseInspeccionRouter);
        this.app.use(this.maquinariaPath, maquinariaRouter);
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Server running en el puerto:', this.port);
        });
    }
}

config(); // Cargar las variables de entorno desde el archivo .env
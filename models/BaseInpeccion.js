// model.js
import { poolPromise } from '../database/DBconfig.js';
import sql from 'mssql';
class BaseInspeccion {
    constructor(Id, Categoria, Pregunta, Puntaje, IdMaquinaria) {
        this.Id = Id;
        this.Categoria = Categoria;
        this.Pregunta = Pregunta;
        this.Puntaje = Puntaje;
        this.IdMaquinaria = IdMaquinaria;
    }

    static async getBaseInpeccion() {
        try {
            const pool = await poolPromise;

            const query = 'SELECT * FROM BaseInspeccion';
            const result = await pool.request().query(query);

            // Mapeo de datos a objetos User
            const BasesInspeccion = result.recordset.map(record => new BaseInspeccion(record.Id, record.Categoria, record.Pregunta, record.Puntaje, record.IdMaquinaria));

            return BasesInspeccion;
        } catch (error) {
            throw error;
        }
    }
    static async getBaseInpeccionByCategoria(idCategoria) {
        try {
            const pool = await poolPromise;

            const query = 'SELECT * FROM BaseInspeccion WHERE Categoria = @idCategoria';
            const result = await pool.request()
                .input('idCategoria', sql.Int, idCategoria)
                .query(query);

            // Mapeo de datos a objetos Categoria
            const BasesInspeccion = result.recordset.map(record => new BaseInspeccion(record.Id, record.Categoria, record.Pregunta, record.Puntaje, record.IdMaquinaria));

            return BasesInspeccion;
        } catch (error) {
            throw error;
        }
    }
}

export default BaseInspeccion;
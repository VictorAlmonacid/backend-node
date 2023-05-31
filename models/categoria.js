// model.js
import { poolPromise } from '../database/DBconfig.js';
import sql from 'mssql';
class Categoria {
    constructor(Id, Descripcion, IdMaquinaria) {
        this.Id = Id;
        this.Descripcion = Descripcion;
        this.IdMaquinaria = IdMaquinaria;
    }

    static async getCategorias() {
        try {
            const pool = await poolPromise;

            const query = 'SELECT * FROM Categoria';
            const result = await pool.request().query(query);

            // Mapeo de datos a objetos User
            const Categorias = result.recordset.map(record => new Categoria(record.Id, record.Descripcion, record.IdMaquinaria));

            return Categorias;
        } catch (error) {
            throw error;
        }
    }
    static async getCategoriasById(idMaquina) {
        try {
            const pool = await poolPromise;

            const query = 'SELECT * FROM Categoria WHERE IdMaquinaria = @idMaquina';
            const result = await pool.request()
                .input('idMaquina', sql.Int, idMaquina)
                .query(query);

            // Mapeo de datos a objetos Categoria
            const Categorias = result.recordset.map(record => new Categoria(record.Id, record.Descripcion, record.IdMaquinaria));

            return Categorias;
        } catch (error) {
            throw error;
        }
    }
}

export default Categoria;
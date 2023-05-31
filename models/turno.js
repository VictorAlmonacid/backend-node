// model.js
import { poolPromise } from '../database/DBconfig.js';

class Turno {
    constructor(Id, Descripcion) {
        this.Id = Id;
        this.Descripcion = Descripcion;
    }

    static async getUsers() {
        try {
            const pool = await poolPromise;

            const query = 'SELECT * FROM Turno';
            const result = await pool.request().query(query);

            // Mapeo de datos a objetos User
            const Turnos = result.recordset.map(record => new Turno(record.Id, record.Descripcion));

            return Turnos;
        } catch (error) {
            throw error;
        }
    }
}

export default Turno;
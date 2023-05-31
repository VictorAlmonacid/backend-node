// model.js
import { poolPromise } from '../database/DBconfig.js';

class EstadoCheck {
    constructor(Id, Descripcion) {
        this.Id = Id;
        this.Descripcion = Descripcion;
    }

    static async getEstadosCheck() {
        try {
            const pool = await poolPromise;

            const query = 'SELECT * FROM EstadoCheck';
            const result = await pool.request().query(query);

            // Mapeo de datos a objetos User
            const EstadowCheck = result.recordset.map(record => new EstadoCheck(record.Id, record.Descripcion));

            return EstadowCheck;
        } catch (error) {
            throw error;
        }
    }
}

export default EstadoCheck;
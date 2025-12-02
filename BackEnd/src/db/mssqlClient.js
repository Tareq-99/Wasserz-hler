import sql from 'mssql';
import { dbConfig } from '../config/dbConfig.js';

export async function query(sqlQuery, params = {}) {
    try {
        const pool = await sql.connect(dbConfig);

        const request = pool.request();
        for (const key in params) {
            request.input(key, params[key]);
        }

        const result = await request.query(sqlQuery);
        return result.recordset;

    } catch (error) {
        console.error("❌ MSSQL Fehler:", error);
        throw error;
    }
}

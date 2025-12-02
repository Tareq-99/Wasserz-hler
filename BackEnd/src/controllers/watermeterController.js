import { query } from '../db/mssqlClient.js';

export async function getAllValues(req, res, next) {
    try {
        const sqlQuery = `
            SELECT TOP 1000 *
            FROM dbo.TA_MAIN_WATERMETER
            ORDER BY Timestamp DESC
        `;

        const result = await query(sqlQuery);

        res.json({
            status: "ok",
            count: result.length,
            data: result
        });

    } catch (err) {
        next(err);
    }
}

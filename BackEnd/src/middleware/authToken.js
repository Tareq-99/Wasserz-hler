export function authToken(req, res, next) {
    const clientToken = req.headers["x-api-token"];
    const serverToken = process.env.API_TOKEN;

    // Kein Token gesendet
    if (!clientToken) {
        return res.status(401).json({ error: "Kein API-Token gesendet" });
    }

    // Token stimmt nicht
    if (clientToken !== serverToken) {
        return res.status(403).json({ error: "Ungültiges API-Token" });
    }

    // Token korrekt → Zugriff erlaubt
    next();
}

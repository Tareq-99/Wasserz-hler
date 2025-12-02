📘 Wasserzähler Monitoring System

Projekt von Tareq Alasadi
Backend: Node.js + Express + MSSQL
Frontend: HTML • CSS • JavaScript • Chart.js

🔍 Projektbeschreibung

Dieses Projekt dient zur Erfassung, Visualisierung und Analyse von Daten eines industriellen Wasserzähler-Messsystems im Unternehmen Magna (Waste Water Treatment).

Ein Wachendorff-Gateway misst Wasser- und Durchflussdaten und sendet diese an eine SQL-Datenbank.
Dieses System liest die Daten automatisiert aus, stellt sie per API über ein Node.js-Backend bereit und visualisiert sie im Frontend über ein Dashboard.

🎯 Ziele des Projekts

✔ Automatisierte Datenbereitstellung aus MSSQL
✔ Berechnung und Darstellung wichtiger Werte
✔ Live-Überwachung von Temperatur, Durchfluss & m³-Zählerstand
✔ Benutzerfreundliches Dashboard für technische Mitarbeiter
✔ IHK-taugliche Softwarearchitektur

🏗 Architektur
Wasserzaehler_Projekt_Tareq
│
├── BackEnd/
│   ├── src/
│   │   ├── app.js
│   │   ├── server.js
│   │   ├── routes/
│   │   ├── controllers/
│   │   ├── services/
│   │   └── db/
│   ├── .env
│   ├── package.json
│
└── FrontEnd/
    ├── index.html
    ├── style.css
    ├── script.js

Datenfluss
SQL-Datenbank → Node.js Backend → REST API → Frontend (Chart.js)

⚙ Backend (Node.js + Express + MSSQL)

Das Backend stellt folgende API-Endpunkte bereit:

📌 GET /api/watermeter/all

Liefert alle Wasserzähler-Datensätze (Parameter, Timestamp, Value, Unit …)

Beispielantwort:

{
  "status": "ok",
  "count": 1000,
  "data": [
    {
      "id": 123,
      "timestamp": "2025-11-30T12:00:00.000Z",
      "parameter": "WaterTemperature",
      "value": 24.1,
      "unit": "°C"
    }
  ]
}

🖥 Frontend (HTML • JS • Chart.js)

Das Frontend-Dashboard bietet:

✔ Interaktive Chips (Filter)

Parameter auswählen → Temperatur / Durchfluss / m³

Datenmenge auswählen → 50 / 200 / 1000

✔ Karten (Cards)

Letzter Wert

Einheit

Parametername

✔ Diagramm

Line-Chart in Echtzeit

Dynamisches Nachladen

Automatisch nach Filtern aktualisiert

🚀 Installation & Setup
1️⃣ Backend installieren

Im /BackEnd Ordner:

npm install
npm start


Die API läuft auf:

http://localhost:3000

2️⃣ Frontend starten

Einfach doppelklicken:

FrontEnd/index.html

🔐 Umgebungsvariablen (.env)

NICHT ins Git committen!

PORT=3000
DB_USER=...
DB_PASSWORD=...
DB_SERVER=SOEMSSQLDEV01
DB_NAME=SOE_I40_Test

📊 Verwendete Technologien
Bereich	Technologie
Backend	Node.js, Express
Datenbank	Microsoft SQL Server
Frontend	HTML, CSS, JavaScript
Charts	Chart.js
Sicherheit	dotenv / API-Token
Tools	VS Code, GitHub
🧪 Beispiel-Screenshot des Dashboards (Platzhalter)
[Dashboard Screenshot hier einfügen]

📄 Lizenz

Dieses Projekt wurde im Rahmen der IHK-Umschulung Fachinformatiker – Anwendungsentwicklung erstellt.
Copyright ©
Autor: Tareq Alasadi
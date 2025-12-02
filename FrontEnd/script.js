let selectedParam = "WaterTemperature";
let selectedLimit = 50;
let chart;

// API laden
async function loadData() {
    const res = await fetch("http://localhost:3000/api/watermeter/all");
    const json = await res.json();
    const all = json.data;

    // Filter nach Parameter + Anzahl
    const filtered = all
        .filter(d => d.parameter === selectedParam)
        .slice(0, selectedLimit);

    if (filtered.length === 0) return;

    // Karten aktualisieren
    const last = filtered[0];
    document.getElementById("card_value").innerText = last.value;
    document.getElementById("card_unit").innerText = last.unit || "-";
    document.getElementById("card_param").innerText = selectedParam;

    drawChart(filtered);
}

// Diagramm zeichnen
function drawChart(data) {
    if (chart) chart.destroy();

    const labels = data.map(d => d.timestamp);
    const values = data.map(d => d.value);

    chart = new Chart(document.getElementById("chart"), {
        type: "line",
        data: {
            labels,
            datasets: [{
                label: selectedParam,
                data: values,
                borderWidth: 2
            }]
        }
    });
}

// --- CHIP EVENTS ---

// Parameter-Chips
document.querySelectorAll(".chip[data-param]").forEach(chip => {
    chip.addEventListener("click", () => {
        document.querySelectorAll(".chip[data-param]").forEach(c => c.classList.remove("chip-active"));
        chip.classList.add("chip-active");

        selectedParam = chip.dataset.param;
        loadData();
    });
});

// Limit-Chips
document.querySelectorAll(".chip-limit").forEach(chip => {
    chip.addEventListener("click", () => {
        document.querySelectorAll(".chip-limit").forEach(c => c.classList.remove("chip-active"));
        chip.classList.add("chip-active");

        selectedLimit = Number(chip.dataset.limit);
        loadData();
    });
});

// Starten
loadData();

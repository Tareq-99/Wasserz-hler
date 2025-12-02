async function fetchWatermeterData(params) {
  const query = new URLSearchParams(params);
  const res = await fetch(`http://localhost:3000/api/watermeter/values?${query.toString()}`, {
    headers: {
      'X-API-TOKEN': 'geheimes_token_fuer_frontend'
    }
  });
  if (!res.ok) throw new Error('API-Fehler');
  return res.json();
}

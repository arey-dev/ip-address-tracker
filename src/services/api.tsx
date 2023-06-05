export async function fetchGeo(inputVal: string) {
  const API_KEY = "ad31405ff37e4c0984ca79e828210f21";

  let url;
  if (!inputVal) {
    url = `https://api.ipgeolocation.io/ipgeo?apiKey=${API_KEY}`;
  } else {
    url = `https://api.ipgeolocation.io/ipgeo?apiKey=${API_KEY}&ip=${inputVal}`;
  }

  const response = await fetch(url);

  if (response.ok) {
    const result = await response.json();
    return result;
  }

  throw new Error(response.status + "");
}

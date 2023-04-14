export async function fetchGeo(inputVal) {
  const API_KEY = "ad31405ff37e4c0984ca79e828210f21";

  let url;
  if (!inputVal) {
    url = `https://api.ipgeolocation.io/ipgeo?apiKey=${API_KEY}`;
  } else {
    url = `https://api.ipgeolocation.io/ipgeo?apiKey=${API_KEY}&ip=${inputVal}`;
  }

  try {
    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
  }
}

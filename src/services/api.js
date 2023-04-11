export async function fetchGeo(inputVal) {
  const KEY = "at_zisTv1cpXnJL20kkXFleBakt8AMYG";

  let url;
  if (!inputVal) {
    url = `https://geo.ipify.org/api/v2/country,city?apiKey=${KEY}`;
  } else {
    url = `https://geo.ipify.org/api/v2/country,city?apiKey=${KEY}&ipAddress=${inputVal}`;
  }

  try {
    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
  }
}

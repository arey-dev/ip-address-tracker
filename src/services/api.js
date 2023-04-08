export async function fetchGeo(value) {
  const KEY = "at_zisTv1cpXnJL20kkXFleBakt8AMYG";
  const url = `https://geo.ipify.org/api/v2/country,city?apiKey=${KEY}`;

  try {
    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (error) {
    // "an error page or popup is better than console.log"
    console.log(error);
  }
}

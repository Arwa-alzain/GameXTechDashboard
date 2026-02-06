import fetch from "node-fetch";

export default async function handler(req, res) {
  try {
    const response = await fetch("https://www.freetogame.com/api/games");
    if (!response.ok) throw new Error(`FreeToGame API returned ${response.status}`);
    const data = await response.json();
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
}

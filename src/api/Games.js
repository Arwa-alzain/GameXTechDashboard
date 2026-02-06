// api/games.js
import fetch from "node-fetch";

export default async function handler(req, res) {
  try {
    const response = await fetch("https://www.freetogame.com/api/games", {
      headers: { "Accept": "application/json" },
    });

    if (!response.ok) {
      const text = await response.text(); // نطبع الرد عند الخطأ
      console.error("API error response:", text);
      throw new Error(`FreeToGame API returned ${response.status}`);
    }

    const data = await response.json(); // هذا مضمون الآن
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.status(200).json(data);
  } catch (error) {
    console.error("Fetch failed:", error);
    res.status(500).json({ error: error.message });
  }
}


import { useState, useEffect } from "react";

function GamingApi() {
  const [allGames, setAllGames] = useState([]);
  const [filteredGames, setFilteredGames] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("/api/games")
      .then(async (response) => {
        const text = await response.text(); // نقرأ الرد كـ text أولاً
        try {
          const data = JSON.parse(text); // نحاول تحويله لـ JSON
          return data;
        } catch (e) {
          console.error("Invalid JSON received:", text);
          throw new Error("Invalid JSON received from API");
        }
      })
      .then((data) => {
        setAllGames(data);
        setFilteredGames(data);
      })
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);
  
  
  

  

  useEffect(() => {
    if (search.length < 1) {
      setFilteredGames(allGames);
      return;
    }

    const filtered = allGames.filter((game) =>
      game.title.toLowerCase().includes(search.toLowerCase())
    );

    setFilteredGames(filtered);
  }, [search, allGames]);

  return (
    <div className="gaming-api-page">
      <h2>Gaming API</h2>
      <input
        type="text"
        className="search-input"
        placeholder="Search games..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {loading && <p className="loading">Searching...</p>}

      {!loading && filteredGames.length === 0 && search.length > 0 && (
        <p className="no-results">No results found.</p>
      )}

      <div className="gaming-list">
        {filteredGames.map((game) => (
          <div key={game.id} className="game-card">
            <div className="game-image">
              {game.thumbnail ? (
                <img
                  src={game.thumbnail}
                  alt={game.title}
                  className="game-thumbnail"
                />
              ) : (
                <div className="no-image">No Image</div>
              )}
            </div>
            <div className="game-content">
              <h3 className="game-title">{game.title}</h3>
              <h5 className="game-platform">{game.platform}</h5>
              <p className="game-description">{game.short_description}</p>
              <a
                href={game.game_url}
                target="_blank"
                rel="noopener noreferrer"
                className="game-link"
              >
                Play Now
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GamingApi;

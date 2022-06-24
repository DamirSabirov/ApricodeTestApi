async function EditGame(gameId, gameName, gameDeveloper, gameGenre) {
    const response = await fetch("api/games", {
        method: "PUT",
        headers: { "Accept": "application/json", "Content-Type": "application/json" },
        body: JSON.stringify({
            id: parseInt(gameId, 10),
            name: gameName,
            developer: gameDeveloper,
            genre: gameGenre
        })
    });
    if (response.ok === true) {
        const game = await response.json();
        reset();
        document.querySelector("tr[data-rowid='" + game.id + "']").replaceWith(row(game));
    }
}
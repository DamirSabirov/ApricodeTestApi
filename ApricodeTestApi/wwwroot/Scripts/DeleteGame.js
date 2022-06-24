async function DeleteGame(id) {
    const response = await fetch("/api/games/" + id, {
        method: "DELETE",
        headers: { "Accept": "application/json" }
    });
    if (response.ok === true) {
        const game = await response.json();
        document.querySelector("tr[data-rowid='" + game.id + "']").remove();
    }
}
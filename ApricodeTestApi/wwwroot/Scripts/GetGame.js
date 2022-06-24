async function GetGame(id) {
    const response = await fetch("/api/games/" + id, {
        method: "GET",
        headers: { "Accept": "application/json" }
    });
    if (response.ok === true) {
        const game = await response.json();
        const form = document.forms["gameForm"];
        form.elements["id"].value = game.id;
        form.elements["name"].value = game.name;
        form.elements["developer"].value = game.developer;
        form.elements["genre"].value = game.genre;
    }
}
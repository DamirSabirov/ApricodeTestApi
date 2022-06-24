async function GetGames() {
    // отправляет запрос и получаем ответ
    const response = await fetch("/api/games/search/platform", {
        method: "GET",
        headers: { "Accept": "application/json" }
    });
    // если запрос прошел нормально
    if (response.ok === true) {
        // получаем данные
        const games = await response.json();
        let rows = document.querySelector("tbody");
        games.forEach(game => {
            // добавляем полученные элементы в таблицу
            rows.append(row(game));
        });
    }
}
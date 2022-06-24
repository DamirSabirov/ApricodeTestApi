async function CreateGame(gameName, gameDeveloper, gameGenre) {

    const response = await fetch("api/games", {
        method: "POST",
        headers: { "Accept": "application/json", "Content-Type": "application/json" },
        body: JSON.stringify({
            name: gameName,
            developer: gameDeveloper,
            genre: gameGenre
        })
    });
    if (response.ok === true) {
        const game = await response.json();
        reset();
        document.querySelector("tbody").append(row(game));
    }
    else {
        const errorData = await response.json();
        console.log("errors", errorData);
        if (errorData) {
            // ошибки вследствие валидации по атрибутам
            if (errorData.errors) {
                if (errorData.errors["Name"]) {
                    addError(errorData.errors["Name"]);
                }
                if (errorData.errors["Developer"]) {
                    addError(errorData.errors["Developer"]);
                }
                if (errorData.errors["Genre"]) {
                    addError(errorData.errors["Genre"]);
                }
            }
            // кастомные ошибки, определенные в контроллере
            // добавляем ошибки свойства Name
            if (errorData["Name"]) {
                addError(errorData["Name"]);
            }

            // добавляем ошибки свойства Developer
            if (errorData["Developer"]) {
                addError(errorData["Developer"]);
            }

            // добавляем ошибки свойства Genre
            if (errorData["Genre"]) {
                addError(errorData["Genre"]);
            }
        }

        document.getElementById("errors").style.display = "block";
    }
}
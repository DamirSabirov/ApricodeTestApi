function row(game) {

    const tr = document.createElement("tr");
    tr.setAttribute("data-rowid", game.id);

    const nameTd = document.createElement("td");
    nameTd.append(game.name);
    tr.append(nameTd);

    const developerTd = document.createElement("td");
    developerTd.append(game.developer);
    tr.append(developerTd);

    const genreTd = document.createElement("td");
    genreTd.append(game.genre);
    tr.append(genreTd);

    const linksTd = document.createElement("td");

    const editLink = document.createElement("a");
    editLink.setAttribute("data-id", game.id);
    editLink.setAttribute("style", "cursor:pointer;padding:15px;");
    editLink.append("Изменить");
    editLink.addEventListener("click", e => {

        e.preventDefault();
        GetGame(game.id);
    });
    linksTd.append(editLink);

    const removeLink = document.createElement("a");
    removeLink.setAttribute("data-id", game.id);
    removeLink.setAttribute("style", "cursor:pointer;padding:15px;");
    removeLink.append("Удалить");
    removeLink.addEventListener("click", e => {

        e.preventDefault();
        DeleteGame(game.id);
    });

    linksTd.append(removeLink);
    tr.appendChild(linksTd);

    return tr;
}
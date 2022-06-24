document.getElementById("reset").addEventListener("click", function (e) {

    e.preventDefault();
    reset();
})

document.forms["gameForm"].addEventListener("submit", e => {
    e.preventDefault();
    document.getElementById("errors").innerHTML = "";
    document.getElementById("errors").style.display = "none";

    const form = document.forms["gameForm"];
    const id = form.elements["id"].value;
    const name = form.elements["name"].value;
    const developer = form.elements["developer"].value;
    const genre = form.elements["genre"].value;
    if (id == 0)
        CreateGame(name, developer, genre);
    else
        EditGame(id, name, developer, genre);
});
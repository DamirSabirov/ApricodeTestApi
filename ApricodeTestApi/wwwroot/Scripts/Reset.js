function reset() {
    const form = document.forms["gameForm"];
    form.reset();
    form.elements["id"].value = 0;
}
function addError(errors) {
    errors.forEach(error => {
        const p = document.createElement("p");
        p.append(error);
        document.getElementById("errors").append(p);
    });
}
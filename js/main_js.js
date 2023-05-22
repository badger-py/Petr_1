function openMenu() {
    menu = document.getElementById("menu");
    if (!(menu.className.includes("visible"))) {
        menu.className += " visible"
    } else {
        menu.className = menu.className.replace(" visible", "");
    }
}
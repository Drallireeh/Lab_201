let menu = document.getElementById('menu-button');
let menu_div = document.getElementById('menu-div');

menu.addEventListener("click", displayMenu)

let menu_displayed = false;

function displayMenu() {
    if (!menu_displayed) {
        menu_div.style.display = "flex";
        menu_displayed = true;
        menu.innerHTML = `<img src="Assets/Images/menu/oeuf_casse.png" alt="Oeuf du menu">`
    }
    else {
        menu_div.style.display = "none";
        menu_displayed = false;
        menu.innerHTML = `<img src="Assets/Images/menu/oeuf_menu.png" alt="Oeuf du menu">`
    }
}
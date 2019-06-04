let menu = document.getElementById('menu-button');
let menu_div = document.getElementById('menu-div');
let tracklist_container = document.getElementById('tracklist-container');

menu.addEventListener("click", displayMenu);

let menu_displayed = false;

function displayMenu() {
    if (!menu_displayed) {
        menu_div.style.display = "flex";
        menu_displayed = true;
        menu.innerHTML = `<img src="Assets/Images/menu/oeuf_casse.png" alt="Oeuf cassé du menu">`
    }
    else {
        menu_div.style.display = "none";
        menu_displayed = false;
        menu.innerHTML = `<img src="Assets/Images/menu/oeuf_menu.png" alt="Oeuf du menu">`
    }
}

function displayMusic(track, id) {
    document.getElementById(id).addEventListener("click", function() {
        if (track.style.visibility == "visible"){
            track.style.visibility = "hidden";
            tracklist_container.style.filter = "none"
        }
        else {
            let spotify_content = document.getElementsByClassName('spotify');
            for (let i = 0; i < spotify_content.length; i++) {
                
                spotify_content[i].style.visibility = "hidden";
            }
            track.style.visibility = "visible";
            tracklist_container.style.filter = "blur(5px)"
        }
    })
}

function addListenerOnGifs() {
    displayMusic(document.getElementById('first-track'), "first-gif");
    displayMusic(document.getElementById('second-track'), "second-gif");
    displayMusic(document.getElementById('third-track'), "third-gif");
    displayMusic(document.getElementById('fourth-track'), "fourth-gif");
    displayMusic(document.getElementById('fifth-track'), "fifth-gif");
    displayMusic(document.getElementById('sixth-track'), "sixth-gif");
    displayMusic(document.getElementById('seventh-track'), "seventh-gif");
    displayMusic(document.getElementById('eight-track'), "eight-gif");
    displayMusic(document.getElementById('nineth-track'), "nineth-gif");
    displayMusic(document.getElementById('tenth-track'), "tenth-gif");
}

addListenerOnGifs();
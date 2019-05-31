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

//////////////////// A REFAIRE ////////////////////////

function displayGifOne() {
    let first_track = document.getElementById('first-track');
    document.getElementById('first-gif').addEventListener("click", function() {
        if (first_track.style.visibility == "visible"){
            first_track.style.visibility = "hidden";
            tracklist_container.style.filter = "none"
        }
        else {
            let spotify_content = document.getElementsByClassName('spotify');
            for (let i = 0; i < spotify_content.length; i++) {
                
                spotify_content[i].style.visibility = "hidden";
            }
            first_track.style.visibility = "visible";
            tracklist_container.style.filter = "blur(5px)"
        }
    })
}

function displayGifTwo() {
    let second_track = document.getElementById('second-track');
    document.getElementById('second-gif').addEventListener("click", function() {
        if (second_track.style.visibility == "visible"){
            second_track.style.visibility = "hidden";
            tracklist_container.style.filter = "none"
        }
        else {
            let spotify_content = document.getElementsByClassName('spotify');
            for (let i = 0; i < spotify_content.length; i++) {
                
                spotify_content[i].style.visibility = "hidden";
            }
            second_track.style.visibility = "visible";
            tracklist_container.style.filter = "blur(5px)"
        }
    })
}

function displayGifThree() {
    let third_track = document.getElementById('third-track');
    document.getElementById('third-gif').addEventListener("click", function() {
        if (third_track.style.visibility == "visible"){
            third_track.style.visibility = "hidden";
            tracklist_container.style.filter = "none"
        }
        else {
            let spotify_content = document.getElementsByClassName('spotify');
            for (let i = 0; i < spotify_content.length; i++) {
                
                spotify_content[i].style.visibility = "hidden";
            }
            third_track.style.visibility = "visible";
            tracklist_container.style.filter = "blur(5px)"
        }
    })
}

function displayGifFour() {
    let fourth_track = document.getElementById('fourth-track');
    document.getElementById('fourth-gif').addEventListener("click", function() {
        if (fourth_track.style.visibility == "visible"){
            fourth_track.style.visibility = "hidden";
            tracklist_container.style.filter = "none"
        }
        else {
            let spotify_content = document.getElementsByClassName('spotify');
            for (let i = 0; i < spotify_content.length; i++) {
                
                spotify_content[i].style.visibility = "hidden";
            }
            fourth_track.style.visibility = "visible";
            tracklist_container.style.filter = "blur(5px)"
        }
    })
}

function displayGifFive() {
    let fifth_track = document.getElementById('fifth-track');
    document.getElementById('fifth-gif').addEventListener("click", function() {
        if (fifth_track.style.visibility == "visible"){
            fifth_track.style.visibility = "hidden";
            tracklist_container.style.filter = "none"
        }
        else {
            let spotify_content = document.getElementsByClassName('spotify');
            for (let i = 0; i < spotify_content.length; i++) {
                
                spotify_content[i].style.visibility = "hidden";
            }
            fifth_track.style.visibility = "visible";
            tracklist_container.style.filter = "blur(5px)"
        }
    })
}

function displayGifSix() {
    let sixth_track = document.getElementById('sixth-track');
    document.getElementById('sixth-gif').addEventListener("click", function() {
        if (sixth_track.style.visibility == "visible"){
            sixth_track.style.visibility = "hidden";
            tracklist_container.style.filter = "none"
        }
        else {
            let spotify_content = document.getElementsByClassName('spotify');
            for (let i = 0; i < spotify_content.length; i++) {
                
                spotify_content[i].style.visibility = "hidden";
            }
            sixth_track.style.visibility = "visible";
            tracklist_container.style.filter = "blur(5px)"
        }
    })
}

function displayGifSeven() {
    let seventh_track = document.getElementById('seventh-track');
    document.getElementById('seventh-gif').addEventListener("click", function() {
        if (seventh_track.style.visibility == "visible"){
            seventh_track.style.visibility = "hidden";
            tracklist_container.style.filter = "none"
        }
        else {
            seventh_track.style.visibility = "visible";
            tracklist_container.style.filter = "blur(5px)"
        }
    })
}

function displayGifEight() {
    let eight_track = document.getElementById('eight-track');
    document.getElementById('eight-gif').addEventListener("click", function() {
        if (eight_track.style.visibility == "visible"){
            eight_track.style.visibility = "hidden";
            tracklist_container.style.filter = "none"
        }
        else {
            let spotify_content = document.getElementsByClassName('spotify');
            for (let i = 0; i < spotify_content.length; i++) {
                
                spotify_content[i].style.visibility = "hidden";
            }
            eight_track.style.visibility = "visible";
            tracklist_container.style.filter = "blur(5px)"
        }
    })
}

function displayGifNine() {
    let nineth_track = document.getElementById('nineth-track');
    document.getElementById('nineth-gif').addEventListener("click", function() {
        if (nineth_track.style.visibility == "visible"){
            nineth_track.style.visibility = "hidden";
            tracklist_container.style.filter = "none"
        }
        else {
            let spotify_content = document.getElementsByClassName('spotify');
            for (let i = 0; i < spotify_content.length; i++) {
                
                spotify_content[i].style.visibility = "hidden";
            }
            nineth_track.style.visibility = "visible";
            tracklist_container.style.filter = "blur(5px)"
        }
    })
}

function displayGifTen() {
    let tenth_track = document.getElementById('tenth-track');
    document.getElementById('tenth-gif').addEventListener("click", function() {
        if (tenth_track.style.visibility == "visible"){
            tenth_track.style.visibility = "hidden";
            tracklist_container.style.filter = "none"
        }
        else {
            let spotify_content = document.getElementsByClassName('spotify');
            for (let i = 0; i < spotify_content.length; i++) {
                
                spotify_content[i].style.visibility = "hidden";
            }
            tenth_track.style.visibility = "visible";
            tracklist_container.style.filter = "blur(5px)"
        }
    })
}

displayGifOne();
displayGifTwo();
displayGifThree();
displayGifFour();
displayGifFive();
displayGifSix();
displayGifSeven();
displayGifEight();
displayGifNine();
displayGifTen();
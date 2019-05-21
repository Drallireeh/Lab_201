const config = {
    apiKey: "AIzaSyAbDqLa6Ae6jRS0mK6Mai05Ae2kTi5M7ic",
    authDomain: "lab-201.firebaseapp.com",
    databaseURL: "https://lab-201.firebaseio.com",
    projectId: "lab-201",
    storageBucket: "lab-201.appspot.com",
    messagingSenderId: "1044900319422",
    appId: "1:1044900319422:web:83291de8d31560b0"
}

firebase.initializeApp(config);

const db = firebase.firestore();

$('#login-form').on('submit', emailPasswordLogin);
$('#date-form').on('submit', onAddPressed);

const login = document.getElementById('login-div');
const date_div = document.getElementById('date-div');

let number_of_dates;

db.collection('tour').get().then(snap => {
    number_of_dates = snap.size;
});

function updateData(docRef, value) {
    const order = document.getElementById(value).value;
    const date = document.getElementById('date' + value).value;
    const city = document.getElementById('city' + value).value;
    const country = document.getElementById('country' + value).value;
    const place = document.getElementById('place' + value).value;
    let complete = document.getElementById('complete' + value).value;

    if (complete === "Oui") complete = true;
    else complete = false;

    db.collection('tour').doc(docRef).update({
        order: parseInt(order),
        date: date,
        city: city,
        country: country,
        place: place,
        complete: complete,
    }).then(function (doc) {
        displayData();
        console.log("doc : ", doc);
    }).catch(function(error) {
        console.log(error)
    });
}

function displayData() {
    db.collection("tour").orderBy("order", "asc").get().then(function (querySnapshot) {
        let html_val = "";
        let increment = 1;
        let complet = "Oui";
        querySnapshot.forEach(function (doc) {
            const { order, date, city, country, place, complete } = doc.data();
            if (complete) complet = "Oui";
            else complet = "Non";

            html_val += `
            <div class="list">
            <h2>Date n°${increment}</h2>
            <strong>Ordre :</strong> <input type="text" class="form-control" value="${order}" id="${increment}">
            <strong>Date :</strong> <input type="text" class="form-control" value="${date}" id="date${increment}">
            <strong>Ville :</strong> <input type="text" class="form-control" value="${city}" id="city${increment}">
            <strong>Pays :</strong> <input type="text" class="form-control" value="${country}" id="country${increment}">
            <strong>Lieu / Nom de l'évènement :</strong> <input type="text" class="form-control" value="${place}" id="place${increment}">
            <strong>Complet :</strong> <input type="text" class="form-control" value="${complet}" id="complete${increment}">
            <div>
                <button onclick="updateData(this.id, ${increment})" type="button" class="btn btn-success" id="${doc.id}">Modifier</button>
                <button onclick="deleteDate(this.id)" type="button" class="btn btn-danger" id="${doc.id}">Supprimer</button>
            </div>
            </div>`;
            increment++;
        });
        $('#dates_list').html(html_val);
    });
}

function deleteDate(id) {
    db.collection('tour').doc(id).delete().then(function () {
        console.log("delete");
    }).catch(function (error) {
        console.log("error", error);
    });
    displayData();
}

function emailPasswordLogin(event) {
    event.preventDefault();

    const email = $('#email').val();
    const password = $('#password').val();

    firebase.auth().signInWithEmailAndPassword(email, password)
        .then(function (result) {
            $('#auth-results').html(`
                <div class="alert alert-success">Connected</div>
            `);
            login.style.display = "none";
            date_div.style.display = "inherit";

            displayData();
        })
        .catch(function (error) {
            $('#auth-results').html(`
                <div class="alert alert-danger">${error.message}</div>
            `);
        });
}

function onAddPressed(event) {
    event.preventDefault();
    number_of_dates++;

    const date = document.getElementById('date').value;
    const city = document.getElementById('city').value;
    const country = document.getElementById('country').value;
    const place = document.getElementById('place').value;

    console.log(number_of_dates)

    db.collection("tour").add({
        order: parseInt(number_of_dates),
        date: date,
        city: city,
        country: country,
        place: place,
        complete: getRadioCheckedValue(),
    })
        .then(function (docRef) {
            console.log("Document written with ID :", docRef.id);
        })
        .catch(function (error) {
            console.error("Error adding document :", error);
        });
    displayData();
}

function getRadioCheckedValue() {
    var radios = document.forms[1].elements["completeRadios"];

    if (radios[0].checked) return true;
    else return false;
}
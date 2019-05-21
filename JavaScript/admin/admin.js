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

function updateData(docRef, value) {
    const date = document.getElementById('date' + value).value;
    const city = document.getElementById('city' + value).value;
    const country = document.getElementById('country' + value).value;
    const place = document.getElementById('place' + value).value;
    const complete = document.getElementById('complete' + value).value;

    db.collection('tour').doc(docRef).update({
        date: date,
        city: city,
        country: country,
        place: place,
        complete: complete,
    }).then(function (doc) {
        console.log("doc : ", doc);
    }).catch(function(error) {
        console.log(error)
    })
}

function displayData() {
    db.collection("tour").get().then(function (querySnapshot) {
        let html_val = "";
        let increment = 1;
        querySnapshot.forEach(function (doc) {
            const { date, city, country, place, complete } = doc.data();
            html_val += `
            <div class="list">
            <h2>Date n°${increment}</h2>
            <strong>Date :</strong> <input type="text" class="form-control" value="${date}" id="date${increment}">
            <strong>City :</strong> <input type="text" class="form-control" value="${city}" id="city${increment}">
            <strong>Country :</strong> <input type="text" class="form-control" value="${country}" id="country${increment}">
            <strong>Place :</strong> <input type="text" class="form-control" value="${place}" id="place${increment}">
            <strong>Complete :</strong> <input type="text" class="form-control" value="${complete}" id="complete${increment}">
            <div>
                <button onclick="updateData(this.id, ${increment})" type="button" class="btn btn-success" id="${doc.id}">Modify</button>
                <button onclick="deleteDate(this.id)" type="button" class="btn btn-danger" id="${doc.id}">Delete</button>
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

    const date = document.getElementById('date').value;
    const city = document.getElementById('city').value;
    const country = document.getElementById('country').value;
    const place = document.getElementById('place').value;

    db.collection("tour").add({
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
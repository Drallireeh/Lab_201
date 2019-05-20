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
        city_name: city,
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
}

function getRadioCheckedValue() {
    var radios = document.forms[1].elements["completeRadios"];

    if (radios[0].checked) return true;
    else return false;
}
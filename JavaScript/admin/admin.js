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

$('#login-form').on('submit', emailPasswordLogin);
$('#date-form').on('submit', emailPasswordLogin);

const login = document.getElementById('login-div');
const date = document.getElementById('date-div');

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
            date.style.display = "inherit";
        })
        .catch(function (error) {
            $('#auth-results').html(`
                <div class="alert alert-danger">${error.message}</div>
            `);
        });
}
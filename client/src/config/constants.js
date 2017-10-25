import firebase from 'firebase';
const config = {
    apiKey: "AIzaSyDhZfZwIR7ozFhWJBfKSl2P8LjK8ltCopE",
    authDomain: "fir-react-test-f8970.firebaseapp.com",
    databaseURL: "https://fir-react-test-f8970.firebaseio.com"
}

firebase.initializeApp(config)

export const ref = firebase
    .database()
    .ref()
export const firebaseAuth = firebase.auth
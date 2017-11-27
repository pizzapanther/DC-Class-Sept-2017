import * as firebase from "firebase";

var config = {
  apiKey: "AIzaSyCZt4pZRAE9ra6zLtFFlTzFWw6wUqB4bU0",
  authDomain: "dcclass092017.firebaseapp.com",
  databaseURL: "https://dcclass092017.firebaseio.com",
  storageBucket: "dcclass092017.appspot.com",
};

firebase.initializeApp(config);

var database = firebase.database();

export var User = {};
export function auth () {
  return new Promise(function (resolve, reject) {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider)
      .then(function (result) {
        User.user = result.user;
        resolve(User);
      })
      .catch(function (e) {
        reject(e);
      });
  });
}

firebase.auth()
  .onAuthStateChanged(function(user) {
    if (user) {
      User.user = user;
      console.log(user);
    }
  });


export default database;

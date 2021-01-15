//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyCRMajKPYIsKFPF5E-YTJmFgHLbURAt4j8",
      authDomain: "kwitter-b384e.firebaseapp.com",
      projectId: "kwitter-b384e",
      storageBucket: "kwitter-b384e.appspot.com",
      messagingSenderId: "55447781687",
      appId: "1:55447781687:web:e1d4ca94338ae000385ab2"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();

const firebaseConfig = {
  apiKey: "AIzaSyCElqQ3w8j2DHaH-vsiWrZPatmLWTCiczs",
  authDomain: "kwitter-639a7.firebaseapp.com",
  databaseURL: "https://kwitter-639a7-default-rtdb.firebaseio.com",
  projectId: "kwitter-639a7",
  storageBucket: "kwitter-639a7.appspot.com",
  messagingSenderId: "481554477461",
  appId: "1:481554477461:web:53dee00b1e667771e2c69c"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
function addUser() {

    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
    purpose: "adding user"
});    
    localStorage.setItem("user_name", user_name);

      window.location = "kwitter_room.html";
}   
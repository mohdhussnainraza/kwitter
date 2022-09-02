
//ADD YOUR FIREBASE LINKS HERE
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

    user_name = localStorage.getItem("user_name");

    document.getElementById("user_name").innerHTML = "welcome " + user_name + "!";
    function addRoom()
    {
      room_name = document.getElementById("room_name").value;
      
      firebase.database().ref("/").child(room_name).update({
        purpose : "adding room name"
      });

        localStorage.setItem("room_name", room_name);

        window.location = "kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("room name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+"onclick='redirectToRoomNames(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();
function redirectToRoomNames(names)
{
   console.log(names);
   localStorage.setItem("room_names", names);
     window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "kwitter.html";
}
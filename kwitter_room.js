
//ADD YOUR FIREBASE LINKS HERE

  var firebaseConfig = {
    apiKey: "AIzaSyALSaTurSmpAleigRztiQC2tI52objrBM4",
    authDomain: "kwitter-65749.firebaseapp.com",
    projectId: "kwitter-65749",
    storageBucket: "kwitter-65749.appspot.com",
    messagingSenderId: "11813149348",
    appId: "1:11813149348:web:3cdc917132b9aca2e7e431"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

  localStorage.setItem("room_name",room_name);

  window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
    console.log("Room Nam'es - " + Room_names);
    row = "<div class = 'room_name' id = "+Room_names+" onclick = 'redirectToRoomName(this.id)'> #"+Room_names +"</div><hr>";
    document.getElementById("output").innerHTML = row;
      //End code
      });});}
getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name",name);
  window.location = "kwitter_page.html";
}



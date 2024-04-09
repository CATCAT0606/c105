
//ADD YOUR FIREBASE LINKS HERE
//https://c100-f6328-default-rtdb.firebaseio.com
var firebaseConfig = {
      apiKey: "AIzaSyDqAs53yqrUCqvlUlOnVy35b5ZsLdwoOP8",
      authDomain: "c100-f6328.firebaseapp.com",
      databaseURL: "https://c100-f6328-default-rtdb.firebaseio.com",
      projectId: "c100-f6328",
      storageBucket: "c100-f6328.appspot.com",
      messagingSenderId: "1090635728030",
      appId: "1:1090635728030:web:cf95338c26eaafb338678f"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name=localStorage.getItem("user_name")
    console.log(user_name);
    document.getElementById("user_name").innerHTML="welcome "+ user_name +" !" 

    function addRoom(){
      room_name=document.getElementById("room_name").value; 
      firebase.database().ref("/").child(room_name).update({
       purpose:"Adding room name"})
       localStorage.setItem("room_name", room_name)
       window.location= "kwitter_page.html";
      }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("room_names -"+ Room_names);
      row="<div class='room_name' id= "+ Room_names+ " onclick='RedirectToRoomName(this.id)' >#"+Room_names+" </div><hr>"
      document.getElementById("output").innerHTML+= row;
      //End code
      });});}
getData();
function RedirectToRoomName(){
      console.log(name)
      localStorage.setItem("room_name", name);
      window.location= "kwitter_page.html"
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location= "index.html";
}
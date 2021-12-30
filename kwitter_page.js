// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyCfIpS_NHIXYeY6G19Q2Hb56Q_zmCkYcOU",
      authDomain: "lets-chat-app-91ebf.firebaseapp.com",
      databaseURL: "https://lets-chat-app-91ebf-default-rtdb.firebaseio.com",
      projectId: "lets-chat-app-91ebf",
      storageBucket: "lets-chat-app-91ebf.appspot.com",
      messagingSenderId: "1088849106562",
      appId: "1:1088849106562:web:827e84c3f908f73ad2c69b"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    room_name = localStorage.getItem("Roomname");
    user_name = localStorage.getItem("Username");

    console.log("room name "+room_name);
    console.log("user name "+user_name);

    function logout() {
          localStorage.removeItem("Roomname");
          localStorage.removeItem("Username");
          window.location.replace("index.html");
    }
    function send() {
          msg = document.getElementById("msg").value;
          console.log("Message "+msg);
          firebase.database().ref(room_name).push({
                name:user_name,
                message:msg,
                like:0,
                dislike:0
          });
          document.getElementById("msg").value = "";
    }
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
      
//End code
      } });  }); }
getData();

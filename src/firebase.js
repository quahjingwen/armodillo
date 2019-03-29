  // Initialize Firebase
  import Firebase from "firebase";

  var config = {
    apiKey: "AIzaSyAwILYZRcPyfGGgOExUvfRrufm4_3L5iAc",
    authDomain: "newproject-98805.firebaseapp.com",
    databaseURL: "https://newproject-98805.firebaseio.com",
    projectId: "newproject-98805",
    storageBucket: "newproject-98805.appspot.com",
    messagingSenderId: "861582755297"
  };

  //let db = firebase.firestore()
  let app = Firebase.initializeApp(config);
  let db = app.database();

  let modRef = db.ref("mod")
 
  export default {db,modRef};

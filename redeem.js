
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  
  // Initialize Firebase
  var firebaseConfig = {
    apiKey: "AIzaSyCkyYCoGxBZ7qRjqQUAI_QK1CK1UjZ3C1s",
  authDomain: "oricoinorders.firebaseapp.com",
  databaseURL: "https://oricoinorders-default-rtdb.firebaseio.com",
  projectId: "oricoinorders",
  storageBucket: "oricoinorders.appspot.com",
  messagingSenderId: "163444654010",
  appId: "1:163444654010:web:75c93a2617543ae0702783",
  measurementId: "G-Y0YBKFCB71"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  const auth =  firebase.auth();

  //signup function
  function signUp(){
    var email = document.getElementById("email");
    var password = document.getElementById("psw");

    const promise = auth.createUserWithEmailAndPassword(email.value+"@aldsfiousbd.com",password.value);
    //
    promise.catch(e=>alert(e.message));
    localStorage.setItem('usrname', email.value);
    alert("SignUp Successfully");
  }

  //signIN function
  function  signIn(){
    var email = document.getElementById("email");
    var password  = document.getElementById("psw");
    const promise = auth.signInWithEmailAndPassword(email.value+"@aldsfiousbd.com",password.value);
    localStorage.setItem('usrname', email.value);
    promise.catch(e=>alert(e.message));
    
  }


  var coins = localStorage.getItem('currentcoinsval');
  var email = document.getElementById("email");
  var user = auth.currentUser;

  //signOut

  function signOut(){
    auth.signOut();
    window.location.href="/index.html";
    window.location.reload();
  }


  var database = firebase.database();
  function synccoins(){
   
  
  
      database.ref('userSync/' + auth.currentUser.uid).set({
          name : usernamename,
          uid : auth.currentUser.uid,
          coins : localStorage.getItem('currentcoinsval'),
          discount1Badge : localStorage.getItem('discount1'),
          admin : localStorage.getItem('admin'),
          hackerBadge : localStorage.getItem('ishacker'),
          addCoinUsed : localStorage.getItem('addcoinused'),
          freeClaimed : localStorage.getItem('freeclaimed3'),
          banned : localStorage.getItem('banned')
      })
      console.log("coin val saved");
      getsynccoins()
  
  }

  function getsynccoins() {

    var user_ref = database.ref('userSync/' + auth.currentUser.uid)
      return user_ref.once("value", function(snapshot) {
      var data = snapshot.val();
      console.log(data);
      //alert(data.coins)
      localStorage.setItem('currentcoinsval', data.coins)
      localStorage.setItem('discount1', data.discount1Badge)
      localStorage.setItem('admin', data.admin)
      localStorage.setItem('ishacker', data.hackerBadge)
      localStorage.setItem('addcoinused', data.addCoinUsed)
      localStorage.setItem('freeclaimed3', data.freeClaimed)
      localStorage.setItem('banned', data.banned)
    })
    }


  //active user to homepage
  firebase.auth().onAuthStateChanged((user)=>{
    if(user){
      var usremail = user.email;
      localStorage.setItem('usrname', usremail.replace("@aldsfiousbd.com", ""));
      //alert("Active user "+usremail);
      //user is signed in, use email variable to get the user's email
      document.getElementById('loginbanner').style.display="none";
      synccoins();
      getsynccoins();
    }else{
        window.location.href="/index.html";
    }
  })





  
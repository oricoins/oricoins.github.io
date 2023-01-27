
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
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


  function hasNetwork(online) {
    // Update the DOM to reflect the current status
    if (online) {
      console.log('System Online.')
    } else {
      alert('Device Offline.')
    }
  }


hasNetwork(navigator.onLine);
window.addEventListener("online", () => {
  // Set hasNetwork to online when they change to online.
  hasNetwork(true);
});
window.addEventListener("offline", () => {
  // Set hasNetwork to offline when they change to offline.
  hasNetwork(false);
});



  //signup function
  function signUp(){
    var email = document.getElementById("email");
    var password = document.getElementById("psw");

    const promise = auth.createUserWithEmailAndPassword(email.value+"@aldsfiousbd.com",password.value);
    //
    promise.catch(e=>alert(e.message));
    createDBChild().then(
    alert("SignUp Successfully")
    )
  }

  //signIN function
  function  signIn(){
    var email = document.getElementById("email");
    var password  = document.getElementById("psw");
    const promise = auth.signInWithEmailAndPassword(email.value+"@aldsfiousbd.com",password.value);
    promise.catch(e=>alert(e.message));
    getsynccoins()
    
  }


  //signOut

  function signOut(){
    
    auth.signOut();
    localStorage.setItem('currentcoinsval', "");
    localStorage.setItem('discount1', "");
    localStorage.setItem('admin', "");
    localStorage.setItem('ishacker', "");
    localStorage.setItem('addcoinused', "");
    localStorage.setItem('freeclaimed3', "");
    localStorage.setItem('banned', "");
    document.getElementById('loginbanner').style.display="block";
    
    window.location.reload();
  }
 var database = firebase.database();

 function createDBChild(){

  database.ref('userSync/' + auth.currentUser.uid).set({
      name : "null",
      uid : "null",
      coins : "0",
      discount1Badge : "null",
      admin : "false",
      hackerBadge : "false",
      addCoinUsed : "false",
      freeClaimed : "false",
      banned : "false",
      reload : "false"
  })
  console.log("coin val saved");


}



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
        banned : localStorage.getItem('banned'),
        reload : localStorage.getItem('reload'),
    })
    console.log("coin val saved");


}


function getsynccoins() {

  var user_ref = database.ref('userSync/' + auth.currentUser.uid)
    return user_ref.once("value", function(snapshot) {
    var data = snapshot.val();
    console.log(data);
    //alert(data.coins)
    
    localStorage.setItem('currentcoinsval', data.coins);
    localStorage.setItem('discount1', data.discount1Badge);
    localStorage.setItem('admin', data.admin);
    localStorage.setItem('ishacker', data.hackerBadge);
    localStorage.setItem('addcoinused', data.addCoinUsed);
    localStorage.setItem('freeclaimed3', data.freeClaimed);
    localStorage.setItem('banned', data.banned);
    localStorage.setItem('reload', data.reload);
    document.getElementById("accountNameDisplay").innerHTML = data.name;
    document.getElementById("accountFreeCoinDisplay").innerHTML = data.freeClaimed;
    document.getElementById("accountAddCoinDisplay").innerHTML = data.addCoinUsed;
    document.getElementById("accountOricoinValDisplay").innerHTML = data.coins;
    document.getElementById("accountAdminDisplay").innerHTML = data.admin;
    document.getElementById("accountBannedDisplay").innerHTML = data.banned;
    document.getElementById("accountHackerDisplay").innerHTML = data.hackerBadge;
    document.getElementById("accountRichPersonBadgeDisplay").innerHTML = data.discount1Badge;
    document.getElementById("accountUID").innerHTML = data.uid;
  })
  }





  //vars
  var coins = localStorage.getItem('currentcoinsval');
  var email = document.getElementById("email");
  var user = auth.currentUser;

var loginbox = document.getElementById('loginbox');
var hideonstart = document.getElementById('hideonstart');
var loginbtn = document.getElementById('signinbutton');
var psw = document.getElementById('psw');
var loginusername = document.getElementById('email');
var signinbutton = document.getElementById('signupbutton');
var signinloading = document.getElementById("signinloading");
  //active user to homepage
  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
  firebase.auth().onAuthStateChanged((user)=>{
    if(user){
      var usremail = user.email;
      
      localStorage.setItem('usrname', usremail.replace("@aldsfiousbd.com", ""));
      document.getElementById('hideonstart').style.display="none";
      document.getElementById('signinbutton').style.display="none";
      document.getElementById('psw').style.display="none";
      document.getElementById('email').style.display="none";
      
      document.getElementById('signupbutton').style.display="none";
      document.getElementById("signinloading").style.display="block";
      getsynccoins()
      sleep(1500).then(() => {
        document.getElementById("signinloading").style.display="none";
        document.getElementById('loginbox').style.boxShadow="none";
        document.getElementById('loginbox').style.height="1px";
        document.getElementById('loginbanner').style.height="3px";
        document.getElementById('loginbanner').style.width="3px";
        
        sleep(2000).then(() =>{
        document.getElementById('loginbox').style.display="none";
        document.getElementById('loginbanner').style.display="none";
        })
      })
      //alert("Active user "+usremail);
      //user is signed in, use email variable to get the user's email
      
    }else{
      document.getElementById('loginbanner').style.display="block";
    }
  })

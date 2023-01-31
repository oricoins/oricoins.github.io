
var hideonstart = document.getElementById('hideonstart');
var loginbtn = document.getElementById('signinbutton');
var psw = document.getElementById('psw');
var loginusername = document.getElementById('email');
var signinbutton = document.getElementById('signupbutton');
var signinloading = document.getElementById("signinloading");


if(window.top.location.href.includes('login')){
document.body.style.backgroundColor='rgb(79, 136, 221)'
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
hideonstart.style.display="none";
loginbtn.style.display="none";
psw.style.display="none";
loginusername.style.display="none";
loginbtn.style.display="none";
signinbutton.style.display="none";
signinloading.style.display="none";
document.getElementById('loginbanner').style.backgroundColor="white";
document.getElementById('loginbanner').style.boxShadow="none";
sleep(1000).then(() => {
    document.getElementById('loginbanner').style.height="500px";
    document.getElementById('loginbanner').style.borderRadius="250px";
})
document.getElementById('loginbanner').style.boxShadow="";
sleep(3000).then(() => {
hideonstart.style.display="block";
loginbtn.style.display="block";
psw.style.display="block";
loginusername.style.display="block";
signinbutton.style.display="block";
document.getElementById('loginbanner').style.borderRadius="30px";
})

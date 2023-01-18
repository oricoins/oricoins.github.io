
var loginbox = document.getElementById('loginbox');
var hideonstart = document.getElementById('hideonstart');
var loginbtn = document.getElementById('signinbutton');
var psw = document.getElementById('psw');
var loginusername = document.getElementById('email');
var signinbutton = document.getElementById('signupbutton');

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
hideonstart.style.display="none";
loginbtn.style.display="none";
psw.style.display="none";
loginusername.style.display="none";
loginbtn.style.display="none";
signinbutton.style.display="none";
sleep(1000).then(() => {
loginbox.style.height="500px";
})
sleep(3000).then(() => {
hideonstart.style.display="block";
loginbtn.style.display="block";
psw.style.display="block";
loginusername.style.display="block";
signinbutton.style.display="block";
})

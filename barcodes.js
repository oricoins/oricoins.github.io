
function setState(data, useritem){
    var user_ref = database.ref('barcodes/' + '/values/' + [data])
    return user_ref.once("value", function(snapshot) {
    var usersdata = snapshot.val();
    console.log(data);
    if(usersdata.state.state ==true){
        useritem.innerHTML = 'Active';
    }else{
        useritem.innerHTML = 'Disabled';
    }
  })
    
}

function getVal(){
    var user_ref = database.ref('barcodes/' + '/values/')
    return user_ref.once("value", function(snapshot) {
    var data = snapshot.val();
    console.log(data);
    //alert(data.a)
    document.getElementById("adisplay").innerHTML = data.a.val;
    document.getElementById("bdisplay").innerHTML = data.b.val;
    document.getElementById("cdisplay").innerHTML = data.c.val;
    document.getElementById("ddisplay").innerHTML = data.d.val;
    document.getElementById("edisplay").innerHTML = data.e.val;
    document.getElementById("fdisplay").innerHTML = data.f.val;
    document.getElementById("gdisplay").innerHTML = data.g.val;
    document.getElementById("hdisplay").innerHTML = data.h.val;
    document.getElementById("idisplay").innerHTML = data.i.val;
    document.getElementById("jdisplay").innerHTML = data.j.val;
    document.getElementById("kdisplay").innerHTML = data.k.val;
    document.getElementById("admindisplay").innerHTML = data.admin.val;
    document.getElementById('oricardCountDisplay').innerHTML = data.admin.used.used;
    setState('a', document.getElementById("astate"));
    setState('b', document.getElementById("bstate"));
    setState('c', document.getElementById("cstate"));
    setState('d', document.getElementById("dstate"));
    setState('e', document.getElementById("estate"));
    setState('f', document.getElementById("fstate"));
    setState('g', document.getElementById("gstate"));
    setState('h', document.getElementById("hstate"));
    setState('i', document.getElementById("istate"));
    setState('j', document.getElementById("jstate"));
    setState('k', document.getElementById("kstate"));
    setState('admin', document.getElementById("adminstate"));
  })
}


function changeVal(qrcode, syncVal){
    //alert('hi')
    database.ref('barcodes/values/' + [qrcode]).set({
        val : syncVal
    })
    var trueo = true;
    database.ref('barcodes/values/' + [qrcode] + '/state/').set({
        state : trueo
    })

    console.log("QR Code value saved");
    getVal();

}

if(window.top.location.href.includes('barcodes')){
    getVal();
}


function checktrue(ticketVal, nextstate){
    //alert('hi')
    database.ref('barcodes/values/' + [ticketVal] + '/state/').set({
        state : nextstate
    })
    //alert("coin val saved");

}
function changeState(ticketVal){
    var user_ref = database.ref('barcodes/' + '/values/' + [ticketVal] +'/state/')
    return user_ref.once("value", function(snapshot) {
    var data = snapshot.val();
    console.log(data.state);
    if(data.state==true){
        checktrue(ticketVal, false);
        getVal();
    }else{
        checktrue(ticketVal, true);
        getVal();
    }
  })

}




 async function runsys(ticketVal){
    var user_ref = database.ref('barcodes/' + '/values/' + [ticketVal])
    return user_ref.once("value", async function(snapshot) {
    var data = snapshot.val();
    console.log(data.state.state);
    var dataval = data.val
    if(data.state.state==true){
        changeVal(ticketVal, 0);
        var falsoo = false;
        database.ref('barcodes/values/' + [ticketVal] + '/state/').set({
            state : falsoo
        })
    numofcoin.value=numofcoin.value.replace(numofcoin.value, dataval);
    numofcoin.disabled = true;


    checkbarcodedone = 1;
    if(isadmin=="true"){
        
        for(let i=0; i<adminpassmain.length; i++){
            adminpass.value=adminpass.value+adminpassmain.charAt(i);
            await sleep(Math.floor(Math.random() * 200) + 100);
        }
    
    
    document.getElementById('adminpass').disabled=true;
    //alert(document.querySelector('.result').innerText);
}else{
    for(let i=0; i<sdfasf.length; i++){
            adminpass.value=adminpass.value+sdfasf.charAt(i);
            await sleep(Math.floor(Math.random() * 200) + 100);
        }
    document.getElementById('adminpass').disabled=true;
    //alert(document.querySelector('.result').innerText+"1");
}
}else{
    document.getElementById('numofcoins').type = 'text';
    document.getElementById('numofcoins').value = 'Code Expired.';
}



  })
}



async function runsysoricard(){
    var user_ref = database.ref('barcodes/' + '/values/' + 'admin/')
    return user_ref.once("value", async function(snapshot) {
    var data = snapshot.val();
    console.log(data.state.state);

if(data.state.state==true){


    checkbarcodedone = 1;
    if(isadmin=="true"){
        for(let i=0; i<adminpassmain.length; i++){
            adminpass.value=adminpass.value+adminpassmain.charAt(i);
            await sleep(Math.floor(Math.random() * 200) + 100);
        }
    
    
    document.getElementById('adminpass').disabled=true;
    //alert(document.querySelector('.result').innerText);
}else{
    for(let i=0; i<sdfasf.length; i++){
            adminpass.value=adminpass.value+sdfasf.charAt(i);
            await sleep(Math.floor(Math.random() * 200) + 100);
        }
    document.getElementById('adminpass').disabled=true;
    //alert(document.querySelector('.result').innerText+"1");
}





        var timesUsed = data.used.used;
        timesUsed = parseInt(timesUsed)+1;


    database.ref('barcodes/values/' + 'admin/used/').set({
        used : timesUsed
    })

}else{
    document.getElementById('numofcoins').type = 'text';
    document.getElementById('numofcoins').value = 'OriCard has not been activated.';
}




  })
}













  //active user to homepage
  firebase.auth().onAuthStateChanged((user)=>{
    if(user){
        var usremail = user.email;
        
    }else{
        if(window.top.location.href.includes('barcodes')){
        window.location.href="/index.html";
    }
    }
  })





  
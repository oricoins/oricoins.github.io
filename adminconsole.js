






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

//var select = document.getElementById('select');
var selectval = '';
function whenselctchange(){
    selectval = document.getElementById('select').value;
    showVal(selectval)
}



function showVal(selectval){
    if (selectval=='Choose User'){
        document.getElementById('usrsname').innerHTML = 'undefined';
    document.getElementById('usrbanned').innerHTML = 'undefined';
    document.getElementById('usrrichbadge').innerHTML = 'undefined';
    document.getElementById('usrfreeclaimed').innerHTML = 'undefined';
    document.getElementById('usrhackerbadge').innerHTML = 'undefined';
    document.getElementById('useroricoinsvalue').innerHTML = 'undefined';
    document.getElementById('usradmin').innerHTML = 'undefined';
    document.getElementById('usraddcoinused').innerHTML = 'undefined';
    }else{
    var user_ref = database.ref('userSync/' + [selectval])
    return user_ref.once("value", function(snapshot) {
    var data = snapshot.val();
    console.log(data.name);
    document.getElementById('usrsname').innerHTML = data.name;
    document.getElementById('usrbanned').innerHTML = data.banned;
    document.getElementById('usrrichbadge').innerHTML = data.discount1Badge;
    document.getElementById('usrfreeclaimed').innerHTML = data.freeClaimed;
    document.getElementById('usrhackerbadge').innerHTML = data.hackerBadge;
    document.getElementById('useroricoinsvalue').innerHTML = data.coins;
    document.getElementById('usradmin').innerHTML = data.admin;
    document.getElementById('usraddcoinused').innerHTML = data.addCoinUsed;
  })
}
}







function getVal(varlol){
    for (let i = 1; i < 19; i++){
        //console.log(i)
    var user_ref = database.ref('uid/' + i)
    user_ref.once("value", function(snapshot) {
    var data = snapshot.val();
    

        console.log(data.val);
        var select = document.getElementById('select');
        var newOption = document.createElement('option');
        newOption.innerHTML=data.val;
        select.appendChild(newOption)
        var newText = document.createElement('button');
        var nexttxt = '';
        var user_ref1 = database.ref('userSync/' + newOption.innerHTML)
        var datalol = data.val;
        user_ref1.once("value", function(snapshot) {
            var data = snapshot.val();
            //alert(data.name)
            nexttxt = data.name;
            //alert(datalol)
            newText.innerHTML = datalol + " : " + nexttxt;
            if(varlol==1){
                showVal(document.getElementById('select').value)
            }
        })
        //alert(nexttxt)
        
        newText.style.backgroundColor = 'transparent';
        newText.style.border = 'none';
        newText.style.cursor = 'pointer';
        newText.style.marginTop = '5px';
        
        newText.addEventListener('click', function(){
            //alert(this.innerHTML)
            document.getElementById('select').value = this.innerHTML.replace(' : ' + nexttxt, '');
            whenselctchange()
        })
        document.getElementById('displaynames').appendChild(newText)
    
    

    //alert(data.a)
    
  })}
  showVal(selectval);
}
getVal(0)

function changeVal(type, nextval, uid){
    //alert('hi')
    var updates = {
        [type] : nextval
    }

    database.ref('userSync/' + [uid]).update(updates)
}


function getnextval(type, value, statement, val){
    if(type=='tf'){
        if(document.getElementById(value).innerHTML == 'true'){
        changeVal(statement, 'false', document.getElementById('select').value)
        whenselctchange();
    }else{
        changeVal(statement, 'true', document.getElementById('select').value)
        whenselctchange();
    }
    }else if(type=='num'){
        changeVal(statement, val, document.getElementById('select').value)
        whenselctchange();
        document.getElementById(value).value="";
    }

}

function reloadusr(uid){
    var updates = {
        reload : 'true'
    }
    database.ref('userSync/' + [uid]).update(updates)
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
    document.getElementById('numofcoins').value = 'Code has expired or has not been activated.';
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

function hidenotification(item, val){
    document.getElementById(item).style.display='none';
    document.getElementById('notificationtxt').innerHTML='';
}

function shownotification(item, val){
    document.getElementById(item).style.display='block';
    document.getElementById('notificationtxt').innerHTML=val;
    window.scrollTo({ top: 0, behavior: 'smooth' });
}








  //active user to homepage
  firebase.auth().onAuthStateChanged((user)=>{
    if(user){
        var usremail = user.email;
        



    }else{
        window.location.href="/login.html";
    }
  })





  
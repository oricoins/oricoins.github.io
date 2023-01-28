const sysstatus = window.navigator.onLine;
if(sysstatus) console.log('hi')
else offline()

document.getElementById('onlinecontainer').style.display = 'block';
//document.getElementById('onlinecontainer').style.top='60';

window.addEventListener('online', online);
window.addEventListener('offline', offline);

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
    document.getElementById('onlinecontainer').style.top='60';
async function online(){

    await sleep(1000);
    document.getElementById('onlinecontainer').style.top='17.7%';
    document.getElementById('onlinecontainer').style.backgroundColor = 'green';
    document.getElementById('statspan').textContent = 'Online';
    await sleep(2500);
    document.getElementById('onlinecontainer').style.top='60';

    if(!window.top.location.href.includes('redeem') & !window.top.location.href.includes('adminconsole') & !window.top.location.href.includes('barcodes')){
        document.getElementById('claimbutton').style.backgroundColor='transparent';
        document.getElementById('claimbutton').style.border='1px solid #008394';
        document.getElementById('claimbutton').style.color='#008394';
        document.getElementById('claimbutton').style.cursor='pointer';
    }
    document.getElementById('header1').style.backgroundColor='#24252a';
    document.getElementById('header1').style.pointerEvents= 'auto';

}

async function offline(){
    await sleep(1000);
    document.getElementById('onlinecontainer').style.top='17.7%';
    document.getElementById('onlinecontainer').style.backgroundColor = 'red';
    document.getElementById('statspan').textContent = 'Offline';
    
    if(!window.top.location.href.includes('redeem') & !window.top.location.href.includes('adminconsole') & !window.top.location.href.includes('barcodes')){
    document.getElementById('claimbutton').disabled=true;
    document.getElementById('claimbutton').style.backgroundColor='rgba(166, 149, 158, 0.38)';
    document.getElementById('claimbutton').style.border='none';
    document.getElementById('claimbutton').style.color='black';
    document.getElementById('claimbutton').style.cursor='not-allowed';
}
document.getElementById('header1').style.backgroundColor='rgba(166, 149, 158, 0.38)';
document.getElementById('header1').style.pointerEvents= 'none';

    
}
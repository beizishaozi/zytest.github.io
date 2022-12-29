
var oDiv = document.createElement('div');
oDiv.id = 'div1';
oDiv.innerHTML = '566';
document.body.appendChild(oDiv);


function myFun(data){
    var div = document.getElementbyId('div1');
    div.innerHTML = data;
}

window.mkAobj.bridgejs("app", "getUserInfo", "{'callback':'oDiv.innerHTML='}");


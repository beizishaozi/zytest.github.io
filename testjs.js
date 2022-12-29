
var oDiv = document.createElement('div');
oDiv.id = 'div1';
oDiv.innerHTML = '566';
document.body.appendChild(oDiv);


window.mkAobj.bridgejs("app", "getUserInfo", "{'callback':'oDiv.innerHTML='}");


function getUserInfo(result){
    var oDiv = document.createElement('div');
    oDiv.id = 'div1';
    oDiv.innerHTML = result;
    document.body.appendChild(oDiv);
}
//window.mkAobj.bridgejs("app", "getUserInfo", "{'callback':'getUserInfo'}");
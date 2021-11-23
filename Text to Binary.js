	 var text = document.querySelector("textarea");
		var dis = document.querySelector("div.content div");
  setInterval(function() {
  var v = text.value;
		var ascii ="",remain="", binary="";
	
	 if(v.length>0)
	 {
	 		for(var i = 0; i<v.length; i++)
	 		{
	 		  ascii=v.charCodeAt(i);
	 		  while(ascii>0)
	 			 {
	 			 		remain+=Math.round(ascii%2);
	 			 		ascii=Math.floor(ascii/2);
	 			 }
	 		for(var j = remain.length-1; j>=0; j--)
	  	binary+=remain.charAt(j)+"\n";
	 		dis.innerHTML=binary;
	  }
	 }
	 else 
		  dis.innerHTML="";
},100);
var clear = document.querySelector("#clear");
clear.onclick=function () {
    text.value = "";
}
alert("Anything that we type on Computer is translated to Binary using interpreter. Have a look how a random texts look like using my Text to Binary");
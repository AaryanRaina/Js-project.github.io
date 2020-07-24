
var start=new Date().getTime(); 					//stores the current time in start variable

function randomcolour(){
	var values="0123456789ABCDEF".split("");
	var colours="#";
	for(var i=0;i<6;i++){
		colours=colours+values[Math.floor(Math.random() * 16)];
	}
return (colours);
}



function appear(){
	
	
	// giving random position values to the shape to appear randomly within a given range of pixels.
	var top=Math.random()* 500;
	
	var width=Math.random() * 200;
	
	document.getElementById("shape").style.backgroundColor=randomcolour();
	document.getElementById("shape").style.top=top+"px";
	document.getElementById("shape").style.left=top+"px";
	document.getElementById("shape").style.display="block";						//display:block displays the element like a paragraph .
	document.getElementById("shape").style.width=width+"px";
	document.getElementById("shape").style.height=width+"px";
	
	if(Math.random()>0.5){												//sets any random number between 0&1, if its > than 0.5 then we will get a circle else a square
		document.getElementById("shape").style.borderRadius="50%";		//that is 50% of the times it will be a squar and other 50% of it will be a circle.
		
	}
	
	else{
		document.getElementById("shape").style.borderRadius="0";
		
	}
	
	start=new Date().getTime();						// again resets the old time to the current time and stores in start variable
	
}
//setTimeout(appear,2000); 					//it means that the appear function will execute after 2000 milliseconds.

function appearagain(){
	setTimeout(appear, Math.random() *3000);

}

appearagain();
    				

document.getElementById("shape").onclick=function(){
	
	document.getElementById("shape").style.display="none";
	
	var end=new Date().getTime();
	
	var timetaken=(end - start)/1000;							//time taken in seconds
	
	document.getElementById("timetaken").innerHTML=timetaken+" seconds"; 			//it assigns the written value/text to the id timetaken
	
	appearagain();
	
	
	
}


				
				
				
				
				
				
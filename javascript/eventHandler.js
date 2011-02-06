var li = document.getElementsByTagName("li");
for(var i=0; i<li.length; i++){
	li[i].onclick = handleClick;
}

function handleClick(){
	this.style.backgroundColor = "blue";
	this.style.color = "white";
}

function stopBubble(e){
	if(e && e.stopPropagation){
		e.stopPropagation();
	}else{
		window.event.cancelBubble = true;
	}
}

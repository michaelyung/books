function addLoadEvent(func){
	var oldhandler = window.onload;
	if(typeof window.onload != 'function'){
		window.onload = func;
	}else{
		window.onload = function(){
			oldhandler();
			func();
		};
	}
}

function checkSupport(){
	return document.getElementsByTagName &&
	   document.createElement &&
	   document.createTextNode;
}

function checkBrowserSupport(){
	return document.getElementByTagName &&
		document.createElement &&
		document.createTextNode &&
		document.getElementById &&
		document.getElementById("imagegallery");
}

function addClass(element, value){
	if(!element.className){
		element.className = value;
	}else{
		newName = element.className;
		newName += " ";
		newName += value;
		element.className = newName;
	}
}
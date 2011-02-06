function styleElementSiblings(tag, theClass){
	if(!document.getElementsByTagName) return false;
	
	var elems = document.getElementsByTagName(tag);
	for(var i=0; i<elems.length; i++){
		var elem = getNextElement(elems[i].nextSibling);
		addClass(elem, theClass);
	}
}

function styleHeaderSiblings(){

	styleElementSiblings("h1", "intro");
/*
	if(!document.getElementsByTagName) return false;

	var headers = document.getElementsByTagName("h1");
	for(var i=0; i<headers.length; i++){
		var elem = getNextElement(headers[i].nextSibling);
		addClass(elem, "intro");
*/

//		elem.style.fontWeight = "bold";
//		elem.style.fontSize = "1.2em";
//	}
}

function getNextElement(node){
	if(node.nodeType == 1){
		return node;
	}

	if(node.nextSibling){
		return getNextElement(node.nextSibling);
	}

	return null;
}

addLoadEvent(styleHeaderSiblings);

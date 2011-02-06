function insertAfter(newElement, targetElement){
	var parent = targetElement.parentNode;
	if (parent.lastChild == targetElement){
		parent.appendChild(newElement);
	}else{
		parent.insertBefore(newElement, targetElement.nextSibling);
	}
}

function preparePlaceholder(){
	if (!checkBrowserSupport) return false;

	var placeholder = document.createElement("img");
	placeholder.setAttribute("id", "placeholder");
	placeholder.setAttribute("src", "images/placeholder.gif");
	placeholder.setAttribute("alt", "my image gallery");

	var description = document.createElement("p");
	description.setAttribute("id", "description");
	var desctext = document.createTextNode("Choose an imge");
	description.appendChild(desctext);
	
	var gallery = document.getElementById("imagegallery");
	insertAfter(placeholder, gallery);
	insertAfter(description, placeholder);
}


function prepareGallery(){
	if(!checkBrowserSupport) return false;

	var gallery = document.getElementById("imagegallery");
	var links = gallery.getElementsByTagName("a");

	for(var i=0; i<links.length; i++){
		links[i].onclick = function(){
			return showPic(this);
		};
		links[i].onkeypress = links[i].onclick;
	}
}

function showPic(whichpic){
	if(!document.getElementById("placeholder"))
		return true;

	var source = whichpic.getAttribute("href");
	var placeholder = document.getElementById("placeholder");
	if(placeholder.nodeName != "IMG")
		return true;
	placeholder.setAttribute("src", source);

	if(!document.getElementById("description"))
		return false;
	var text = whichpic.getAttribute("title") ? whichpic.getAttribute("title") : "";
	var description = document.getElementById("description");
	if(description.firstChild.nodeType == 3){
		description.firstChild.nodeValue = text;		
	}
	return false;
}

addLoadEvent(preparePlaceholder);
addLoadEvent(prepareGallery);

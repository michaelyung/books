function displayAccesskeys(){
	if(!checkSupport) return false;

	var links = document.getElementsByTagName("a");
	var keys = new Array();

	for(var i=0; i<links.length; i++){
		var current = links[i];
		if(!current.getAttribute("accesskey")) continue;

		var key = current.getAttribute("accesskey");
		var text = current.lastChild.nodeValue;
		keys[key] = text;
	}

	var list = document.createElement("ul");
	for (key in keys){
		var text = keys[key];
		var str = key + ": " + text;

		var item = document.createElement("li");
		var item_text = document.createTextNode(str);
		item.appendChild(item_text);

		list.appendChild(item);
	}

	var header = document.createElement("h3");
	var header_text = document.createTextNode("AccessKeys");
	header.appendChild(header_text);
	
	document.body.appendChild(header);
	document.body.appendChild(list);
}

addLoadEvent(displayAccesskeys);

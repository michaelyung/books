function showPic(picture){
	var source = picture.getAttribute("href");
	var placeholder = document.getElementById("placeholder");
	placeholder.setAttribute("src", source);
	
	var text = picture.getAttribute("title");
	var description = document.getElementById("description");
	description.firstChild.nodeValue = text;
}

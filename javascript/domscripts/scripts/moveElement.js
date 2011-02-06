function moveElement(elemID, width, height, interval){
	if (!document.getElementById) return false;
	if (!document.getElementById) return false;

	var elem = document.getElementById(elemID);
	var xpos = parseInt(elem.style.left);
	var ypos = parseInt(elem.style.top);

	if (xpos==width && ypos==height) return true;

	if (xpos < width) xpos++;
	if (xpos > width) xpos--;

	if (ypos < height) ypos++;
	if (ypos > height) ypos--;

	elem.style.left = xpos + "px";
	elem.style.top = ypos + "px";

	var func = "moveElement('" + 
		        elemID + "'," + 
		        width + "," +
		        height + "," +
		        interval + ")";

	movement = setTimeout(func, interval);
}

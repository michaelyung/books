window.onload = function(){
	var para = document.createElement("p");
	var txt = document.createTextNode("hello world");
	var testdiv = document.createElementById("testdiv");
	testdiv.appendChild(para);
	para.appendChild(txt);

	var info = "nodeName: ";
	info += para.nodeName;
	info += " nodeType: ";
	info += para.nodeType;
	alert(info);
};

window.onload();


/*
 * Michael Yang
 * lib functions for 'Manage Files'
 */

/*
 * Return the letters with len length randomly : [0-9], [a-zA-Z]
 */
function getRandomLetters(len){
	var numberList = range(48, 57); // 0-9
	var capCharList = range(65, 90); // A-Z
	var lowCharList = range(97, 122); //a-z

	var letterRangeList = numberList.concat(capCharList, lowCharList);

	return getRandomCharsFromCodes(len, letterRangeList);	
}

/* A workaround for generating printable ascii characters
    Recomend using the followed one, which has bigger coverage of all possible ascii values
*/
function getPrintAsciiChars(len) {
	var asciiRange= "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456~!@#$%^&()_+=-;,";

	var randomAscii = '';

	for (var i = 0; i < len; i++) {
		var randomIndex = Math.floor(Math.random() * asciiRange.length);
		randomAscii += asciiRange.substring(randomIndex, randomIndex + 1);
	}
	return randomAscii;
}

function getValidAsciiCharList(){
	var asciiRange = range(32, 126);
	var invalidList = [34 , 42,  46, 47,  58,  60,  62,  63,  92,  124];
	// ( ", * , /, :, <, >, ?, \, | ) 
	// add "."  (46) and "&" (38)  (removed again) into the list to avoid the extension issue
	return asciiRange.filterElements(invalidList);
}

/* getRandomAsciiChars(len) 
 * @return randomly generated ascii strings
 * @param len: the maximum length of allowed characters
 */
function getRandomAsciiChars(len) {
	return getRandomCharsFromCodes(len, getValidAsciiCharList());
}

/*
 * Return the invalid characters randomly
 */
function getRandomInvalidAsciiChars(len){
	var invalidList = [34 , 42,  47,  58,  60,  62,  63,  92,  124];
	// ( ", * , /, :, <, >, ?, \, | )
	
	return getRandomCharsFromCodes(len, invalidList);
}	

/* Return the unicode characters randomly
 * 
 */
function getRandomUnicodeChars(len, charSet){
	var isoCharList = range(160, 255);

	// put the variable unicodeRange here to add more supported codes into it.
	var unicodeRange = isoCharList;
	// generate randomString from random unicodeRange
	return getRandomCharsFromCodes(len, unicodeRange);

}

/* Return the htmlEntities randomly
 * 
 */
function getRandomHtmlEntities(len){
	var htmlEntitiesCodes = [38, 39, 169, 174]; // [ & '  &copy; &reg;]
	// define a list of all supported html entities, maybe the list of code values
	
	return getRandomCharsFromCodes(len, htmlEntitiesCodes);
}

function getAllRandomChars(len){
	var asciiRange = getValidAsciiCharList();
	var unicodeRange = range(160, 255);
	var allList = asciiRange.concat(unicodeRange);
	return getRandomCharsFromCodes(len, allList);
}

function getRandomChineseChars(len){
	var rangeList = [
		['4E00', '9FFF'],
		['3400', '4DFF'],
		['20000', '2A6DF'],
		['F900', 'FAFF'],
		['2F800', '2FA1F']
	];

	var chineseList = [];
	for (var iter=0; iter<rangeList.length; iter++){
		var start = rangeList[iter][0];
		var end = rangeList[iter][1];
		var blockList = range(parseInt(start, 16), parseInt(end, 16));
		chineseList = chineseList.concat(blockList);
	}

	return getRandomCharsFromCodes(len, chineseList);
}

// get the rows of the table via the table's xpath expression
function getRowsOfTable(xpath){
	try{
		var table = selenium.browserbot.findElement(xpath);		
	} catch (x) {
	}
	
	// skip one table body that is hidden under the table head: "This folder is empty."
	var tableBody = table.getElementsByTagName('tbody')[1];

	var tableRows = tableBody.getElementsByTagName('tr');
	return tableRows;
}

// get the number of rows under the table
// it may only be applicable for the table in 'manage files', as there are additional information actually hidden between the theader and tbody
// if the situation is the same to other tools, it can be reused.
function getRowsNum(tableXpath){
	return getRowsOfTable(tableXpath).length;
}


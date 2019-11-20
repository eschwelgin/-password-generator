//returns single character from char set
function lowerCase () {
    var lcCharset = [ "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m" ]
    return lcCharset[Math.floor(Math.random() * lcCharset.length)]
}
function upperCase () {
    var ucCharset = [ "Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "A", "S", "D", "F", "G", "H", "J", "K", "L", "Z", "X", "C", "V", "B", "N", "M" ]
    return ucCharset[Math.floor(Math.random() * ucCharset.length)]
}
function nums () {
    var nmCharset = [ "1", "2", "3", "4", "5", "6", "7", "8", "9", "0" ]
    return nmCharset[Math.floor(Math.random() * nmCharset.length)]
}
function specials () {
    var spCharset = [ "!", "$", "%", "&", "(", ")", "+", "-", "/", "?", "[", "]", "^", "_", "{", "|", "}", "~" ]
    return spCharset[Math.floor(Math.random() * spCharset.length)]
}

var finalPass1 = [] //create an array to hold the password 
//create variables to store values while they convert from an array to a string
var finalPass2 = ""
var finalPass3 = ""

//take input from input form <-------------DOM.value------------------------------------------------------------INCOMPLETE----------------------------------------------------------
var pLength = 28
// document.getElementById("pLengthBox").value

// variables for char sets - called by user input checkboxes 
var lcInclude = true
var ucInclude = true
var nmInclude = true
var spInclude = true

function sanitize() {
    if (pLength < 8 || pLength > 128) {
        alert("Please select a number in between 8 and 128")
    } 
    else if (lcInclude === false && ucInclude === false && nmInclude === false && spInclude === false) {
        alert(" Please select 1+ Character Sets")
    } else {
        alert("Generating password now")
    }
    finalPass1.length = 0;
}
function createPass() {
    // appends values to array of value is true 
    var fns = []
    if (lcInclude === true) {
        fns.push(lowerCase)
    }
    if (ucInclude === true) {
        fns.push(upperCase)
    }
    if (nmInclude === true) {
        fns.push(nums)
    }
    if (spInclude === true) {
        fns.push(specials)
    }
    // for loop that creates a password of the right length
    for (i = 0; i < pLength; i++) {
        var rando = Math.floor(Math.random() * fns.length)
        finalPass1.push(fns[rando]())
    }
}
function convert () {
    //convert password from an array to a string
    finalPass2 = (finalPass1.toString())
    finalPass3 = (finalPass2.replace(/,/g, ""))
}
function releasePass() {
    (document.getElementById("passOut").innerHTML = finalPass3)
    (document.getElementById("passOut").style.display = "inline-block");
}
// Button press 
function myFunction () {
    sanitize();
    createPass();
    convert ();
    releasePass();
}

//-----------------------------------------------------
// DEGRADED CODE AND TEST 
//-----------------------------------------------------
// random digit to console log 
// console.log(lcCharset[Math.floor(Math.random() * 26)])
// console.log(ucCharset[Math.floor(Math.random() * 26)])
// console.log(nmCharset[Math.floor(Math.random() * 10)])
// console.log(spCharset[Math.floor(Math.random() * 19)])

// random digits with output to an array
// finalPass[i] = (lcCharset[Math.floor(Math.random() * 26)])
// finalPass[1] = (ucCharset[Math.floor(Math.random() * 26)])
// finalPass[2] = (nmCharset[Math.floor(Math.random() * 10)])
// finalPass[3] = (spCharset[Math.floor(Math.random() * 19)])

// Watch the password convert from a string to a clean array
// console.log(finalPass1)
// console.log(finalPass2)
// console.log(finalPass3)
// console.log(finalPass3.length)

// manually set functions for various character sets 
// var fns = [lowerCase, upperCase, nums, specials]

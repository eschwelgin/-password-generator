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

//create an array to hold the password 
var finalPass1 = [] 
//create variables to store values while they convert from an array to a string
var finalPass2 = ""
var finalPass3 = ""

//take input from input form 
var pLength = 28

// variables to include various char sets
var lcInclude = false
var ucInclude = false
var nmInclude = false
var spInclude = false

function uInput() {
    //take input from input form 
    pLength = document.getElementById("pLengthBox").value
    
    if (document.getElementById("lcIncludeBox").checked) {
        lcInclude = true
    } else {
        lcInclude = false
    }
    if (document.getElementById("ucIncludeBox").checked) {
        ucInclude = true
    } else {
        ucInclude = false
    }
    if (document.getElementById("nmIncludeBox").checked) {
        nmInclude = true
    } else {
        nmInclude = false
    }
    if (document.getElementById("spIncludeBox").checked) {
        spInclude = true
    } else {
        spInclude = false
    }
}
function sanitize() {
    if (pLength < 8 || pLength > 128) {
        alert("Please select a number in between 8 and 128")
    } 
    else if (lcInclude === false && ucInclude === false && nmInclude === false && spInclude === false) {
        alert(" Please select 1+ Character Sets")
    } else {
        // alert("Generating password now")
    }
    finalPass1.length = 0;
}
function createPass() {
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
    uInput(); 
    sanitize();
    createPass();
    convert ();
    releasePass();
}
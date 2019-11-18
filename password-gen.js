// alert("This app will generate a random password")
var finalPass1 = [] //create an array
//creeate variables to store values while they convert from an array to a string
var finalPass2 = ""
var finalPass3 = ""

//basic - set a variable for the password length 
//advanced - take input from input form <-------------------------------------------------------------------------------------INCOMPLETE----------------------------------------------------------
var pLength = 128
// document.getElementById("pLengthBox").value
// variables for char sets - called by user input checkboxes 
var lcInclude = false
var ucInclude = true
var nmInclude = true
var spInclude = true

//basic - create an array of all lower case numbers 
var lcCharset = [ "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m" ]
//advanced - create 4 arrays - one for each charset and connect them to the input boxes for use 
var ucCharset = [ "Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "A", "S", "D", "F", "G", "H", "J", "K", "L", "Z", "X", "C", "V", "B", "N", "M" ]
var nmCharset = [ "1", "2", "3", "4", "5", "6", "7", "8", "9", "0" ]
var spCharset = [ "!", "$", "%", "&", "(", ")", "+", "-", "/", "?", "[", "]", "^", "_", "{", "|", "}", "~" ] //deleted items with special meaning to prevent errors 

// for loop that creates a password of the right length
for (i = 0; i < pLength; i++) {
//basic - logic to create a password of length pLength from character set lcCharset 
//finalPass1[i] = (lcCharset[Math.floor(Math.random() * lcCharset.length)])
//advanced - include character sets based on values of variables
    if (lcInclude === true && ucInclude === false && nmInclude === false && spInclude === false) { //<-- one box
        finalPass1[i] = (lcCharset[Math.floor(Math.random() * lcCharset.length)])
    } else if (lcInclude === false && ucInclude === true && nmInclude === false && spInclude === false) {
        finalPass1[i] = (ucCharset[Math.floor(Math.random() * ucCharset.length)])
    } else if (lcInclude === false && ucInclude === false && nmInclude === true && spInclude === false) {
        finalPass1[i] = (nmCharset[Math.floor(Math.random() * nmCharset.length)])
    } else if (lcInclude === false && ucInclude === false && nmInclude === false && spInclude === true) {
        finalPass1[i] = (spCharset[Math.floor(Math.random() * spCharset.length)])
    } else if (lcInclude === true && ucInclude === true && nmInclude === false && spInclude === false) { //<-- two box
        if (Math.floor(Math.random() * 2) === 1) { 
            finalPass1[i] = (lcCharset[Math.floor(Math.random() * lcCharset.length)]) 
        } else { 
            finalPass1[i] = (ucCharset[Math.floor(Math.random() * ucCharset.length)])
            }
    } else if (lcInclude === true && ucInclude === false && nmInclude === true && spInclude === false) { //<-- two box
        if (Math.floor(Math.random() * 2) === 1) { 
            finalPass1[i] = (lcCharset[Math.floor(Math.random() * lcCharset.length)]) 
        } else { 
            finalPass1[i] = (nmCharset[Math.floor(Math.random() * nmCharset.length)])
            }
    } else if (lcInclude === true && ucInclude === false && nmInclude === false && spInclude === true) { //<-- two box
        if (Math.floor(Math.random() * 2) === 1) { 
            finalPass1[i] = (lcCharset[Math.floor(Math.random() * lcCharset.length)]) 
        } else { 
            finalPass1[i] = (spCharset[Math.floor(Math.random() * spCharset.length)])
            }
    } else if (lcInclude === false && ucInclude === true && nmInclude === true && spInclude === false) { //<-- two box
        if (Math.floor(Math.random() * 2) === 1) { 
            finalPass1[i] = (ucCharset[Math.floor(Math.random() * ucCharset.length)]) 
        } else { 
            finalPass1[i] = (nmCharset[Math.floor(Math.random() * nmCharset.length)])
            }
    } else if (lcInclude === false && ucInclude === true && nmInclude === false && spInclude === true) { //<-- two box
        if (Math.floor(Math.random() * 2) === 1) { 
            finalPass1[i] = (ucCharset[Math.floor(Math.random() * ucCharset.length)]) 
        } else { 
            finalPass1[i] = (spCharset[Math.floor(Math.random() * spCharset.length)])
            }
    } else if (lcInclude === false && ucInclude === false && nmInclude === true && spInclude === true) { //<-- two box
        if (Math.floor(Math.random() * 2) === 1) { 
            finalPass1[i] = (nmCharset[Math.floor(Math.random() * nmCharset.length)]) 
        } else { 
            finalPass1[i] = (spCharset[Math.floor(Math.random() * spCharset.length)])
            }
    } else if (lcInclude === true && ucInclude === true && nmInclude === true && spInclude === false) { //<-- three box 123
        var randomNum = (Math.floor(Math.random() * 3))
        if (randomNum === 1) { 
            finalPass1[i] = (lcCharset[Math.floor(Math.random() * lcCharset.length)]) 
        } else if (randomNum === 2){ 
            finalPass1[i] = (ucCharset[Math.floor(Math.random() * ucCharset.length)])
        } else {
            finalPass1[i] = (nmCharset[Math.floor(Math.random() * nmCharset.length)])
        } 
    } else if (lcInclude === true && ucInclude === false && nmInclude === true && spInclude === true) { //<-- three box 134
        var randomNum = (Math.floor(Math.random() * 3))
        if (randomNum === 1) { 
            finalPass1[i] = (lcCharset[Math.floor(Math.random() * lcCharset.length)]) 
        } else if (randomNum === 2){ 
            finalPass1[i] = (nmCharset[Math.floor(Math.random() * nmCharset.length)])
        } else {
            finalPass1[i] = (spCharset[Math.floor(Math.random() * spCharset.length)])
        } 
    } else if (lcInclude === true && ucInclude === true && nmInclude === false && spInclude === true) { //<-- three box 124
        var randomNum = (Math.floor(Math.random() * 3))
        if (randomNum === 1) { 
            finalPass1[i] = (lcCharset[Math.floor(Math.random() * lcCharset.length)]) 
        } else if (randomNum === 2){ 
            finalPass1[i] = (ucCharset[Math.floor(Math.random() * ucCharset.length)])
        } else {
            finalPass1[i] = (spCharset[Math.floor(Math.random() * spCharset.length)])
        } 
    } else if (lcInclude === false && ucInclude === true && nmInclude === true && spInclude === true) { //<-- three box 234
        var randomNum = (Math.floor(Math.random() * 3))
        if (randomNum === 1) { 
            finalPass1[i] = (ucCharset[Math.floor(Math.random() * ucCharset.length)]) 
        } else if (randomNum === 2){ 
            finalPass1[i] = (nmCharset[Math.floor(Math.random() * nmCharset.length)])
        } else {
            finalPass1[i] = (spCharset[Math.floor(Math.random() * spCharset.length)])
        } 
    } else {                                                                                             //<-- four box
        var randomNum = (Math.floor(Math.random() * 4))
        if (randomNum === 1) { 
            finalPass1[i] = (lcCharset[Math.floor(Math.random() * lcCharset.length)]) 
        } else if (randomNum === 2) { 
            finalPass1[i] = (ucCharset[Math.floor(Math.random() * ucCharset.length)])
        } else if (randomNum === 3) { 
            finalPass1[i] = (spCharset[Math.floor(Math.random() * spCharset.length)])
        } else {
            finalPass1[i] = (nmCharset[Math.floor(Math.random() * nmCharset.length)])
        } 
    } 
} //end for loop 

//convert password from an array to a string
finalPass2 = (finalPass1.toString())
finalPass3 = (finalPass2.replace(/,/g, ""))

// basic - Button press displays password 
// fucking around - keeps element hidden until password is generated
function myFunction () {
    document.getElementById("passOut").innerHTML = finalPass3;
    document.getElementById("passOut").style.display = "inline-block";
    // validate user input
    if (pLength < 8 || pLength > 128) {
        alert("Please select a number in between 8 and 128")
    } 
    if (lcInclude === false && ucInclude === false && nmInclude === false && spInclude === false) {
        alert("Please select 1+ Character Sets" + "checkpoint 2 fail")
    } 
}
// bonus - copy button for password <------------------------------------------------------------------------------------INCOMPLETE--------------------------------------------------------------

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
console.log(finalPass3)
console.log(finalPass3.length)

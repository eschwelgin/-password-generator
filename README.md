Unit 03 JavaScript Homework: Password Generator

Description
Create an application that generates a random password based on user-selected criteria. This app will run in the browser and feature dynamically updated HTML and CSS powered by your JavaScript code.
The user will be prompted to choose from the following password criteria:

The application asks the user for a password length between 8 and 128, and offers 4 different character sets that the use can combine in creating their password. 
This is done by pulling values from user input, sanitizing those values, then running a for loop that appends the proper characters to a string. The password is then changed from an array to a clean string, and then passed back to html using innerHTML, at the same time changing the div from display: none to inline-block. Generating a new password follows the same basic flow, after clearing the array that holds the password with var.lenth=0
As a bonus, the user should also have the option to click a button to copy the password to their clipboard.
The application has a clean user interface and is responsive
The application is deployed to GitHub Pages.


https://eschwelgin.github.io/password-generator/
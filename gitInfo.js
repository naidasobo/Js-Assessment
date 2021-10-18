/*
    For this section of the assessment you will be putting together a cheat sheet for common git commands.  
    You'll provide the command as well as what it does. 
*/

//////////////////PROBLEM 1////////////////////
/*
    Create a variable called 'gitDefinition'.
    It should be a string containing your best definition of what Git is.
*/

let gitDefinition = [
  "An open source DevOps program used to store code, track changes and progress, collaborate on projects.",
];
console.log(gitDefinition);

//////////////////PROBLEM 2////////////////////
/*
    Create a variable called 'gitHubDefinition'.  
    It should be a string containing your best definition of what GitHub is.
*/

let gitHubDefinition = [
  "Largest online open source code hosting service which enables developers to create repositories, track share and manage projects. ",
];
console.log(gitHubDefinition);

//////////////////PROBLEMS 3 - 8////////////////////
/*
    For the next several problems you will be creating objects containing information about different git 
    commands.  Each object should contain 'description' and 'code' properties.  The 'description' property 
    will be a string with a description of what that git command does.  The 'code' property should be a 
    string of the actual command (what you type into your terminal).
*/

//////////////////PROBLEM 3////////////////////
/*
    Create an object called 'init' with 'description' and 'code' properties 
    following the guidelines above to describe the init command.
*/

let init = ["Creates a new object", "init new Object()"];
console.log(init)


//////////////////PROBLEM 4////////////////////
/*
    Create an object called 'clone' with 'description' and 'code' properties 
    following the guidelines above to describe the clone command.
*/

let clone = [ "Creates a new object with the same properties as the original object" , " const clonePets = { ...pets }; " ];
console.log(clone)

//////////////////PROBLEM 5////////////////////
/*
    Create an object called 'status' with 'description' and 'code' properties 
    following the guidelines above to describe the status command.
*/

let status = ['Sets the text in the status bar at the bottom of the browser, or returns the previously set text' , 'window.status = "text"']
console.log(status)

//////////////////PROBLEM 6////////////////////
/*
    Create an object called 'add' with 'description' and 'code' properties 
    following the guidelines above to describe the add command.
*/

add = ['Appends a new element with a specified value to the end of a Set object' , 'add(apples)' ]
console.log(add)


//////////////////PROBLEM 7////////////////////
/*
    Create an object called 'commit' with 'description' and 'code' properties
    following the guidelines above to describe the commit command.
*/

commit = [ 'Change point or save point to the repo' , 'git.commit'] 
console.log(commit)

//////////////////PROBLEM 8////////////////////
/*
    Create an object called 'push' with 'description' and 'code' properties 
    following the guidelines above to describe the push command.
*/
 
push = ['adds one or more elements to the end of an array and returns the new length of the array' , 'const fruits = "Banana", "Orange"' , 'fruits.push("Kiwi");   // Adds "Kiwi"']
console.log(push)
var hello;
/* 
 * this variable's name is hello
 * in naming variables, we should try to be as descriptive as possible
 *
 */

var welcomeNote;
/* 
 * this variable's name is welcomeNote and it's current value is undefined
 * because i haven't assigned anything to it yet, so i'll assign it with a string
 *
 */

welcomeNote = 'Welcome to Waypoint 4';
/*
 * this variable's value is now a string that says: Welcome to Waypoint 4
 * we may also define a variable and assign something to it at the same time like this:
 *
 *   var welcomeNote = 'Welcome to Waypoint 4';
 *
 */

var $h1 = $('<h1>Hello</h1>');
/*
 * this variable's name is $h1
 * we can name it h1, or heading1, or anything else but we specifically named it like this
 * because we want to be reminded that this variable's value is a jquery object
 * 
 * $h1's value is NOT a string
 * it's value is a jquery object containing a <h1> tag containing the text "Hello" 
 *
 */

 var $h1 = '<h1>Hello</h1>';
/*
 * this variable's name is $h1
 * it's value is a STRING and not a jquery object, do you see how different it is from the one above?
 * this will work just like an ordinary string, however it's name is not really appropriate
 * i would name this one h1String or h1Text instead
 * 
 */
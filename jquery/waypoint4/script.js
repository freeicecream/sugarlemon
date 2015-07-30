var hello;
/* 
 * this is a variable
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

var $h2 = '<h2>Hello Again</h2>';
/*
 * this variable's name is $h2
 * it's value is a STRING and not a jquery object, do you see how different it is from the one above?
 * this will work just like an ordinary string, however it's name is not really appropriate
 * i would name this one h2String or h2Text instead
 * 
 */

$('<h3>Hello</h3>'); // just to emphasize, this is a jquery object
'<h3>Hello</h3>'; // and this one is a string, mind the difference


var $body = $('body'); // jquery object which selects the body tag from the html
var $newBody = $('<body></body>'); // creates a new jquery object which has the body tag, mind the difference!
var $paragraph = $('<p>I am a paragraph</p>'); // create a jquery object which has the p tag

$body.append($paragraph);
/*
 * okay, this time i've declared three variables, they are all jquery objects
 * a jquery object has many functions, one of which is the append function
 * see how i used the append function of $body on line 53?
 * inside the append function, i've passed $paragraph
 * i can also do it like this:
 *
 *   $('body').append($('<p>I am a paragraph</p>'));
 *
 * or
 *
 *   $body.append($('<p>I am a paragraph</p>'));
 *
 */

$body.append($('<p>I am a paragraph</p>'));
$body.append('<p>I am a paragraph</p>');
/*
 * these two produce the same output as the one in line 53
 * you see, jquery is not very strict, you can pass a string to append function and it will treat
 * it as a regular jquery object. just make sure that the string you pass is a valid html tag!
 *
 */

/*
 * now let's do some more stuff by using $(document).ready()
 *
 */
$(document).ready(function() {
  
  $body.append($h1);
  /*
   * here i've appended <h1>Hello</h1> to the body, see line 25 for reference
   *
   */

  $($h1).after($h2);
  /*
   * this time i've used the after function
   * basically, i'm saying: i want to add <h2>Hello Again</h2> after the h1 tag
   * if you notice, $h2 is not a jquery object, it's a string right? see line 36
   * but just like append(), after() is not strict -- you can pass a string 
   * as long as it's a properly constructed html tag 
   *
   * what if i want to switch their positions?
   */

  $($h1).before($('h2'));
  /*
   * this code lets me switch h1 and h2's position
   * again, h1's value is the jquery object <h1>Hello</h1>, which we appended to the body earlier
   * we can't use the $h2 variable because it's value is a string for a h2 tag
   * so what we did was to select the h2 tag from the html by using $('h2')
   * and put it before the h1 tag
   *
   */
});
'use strict';

var words = new Array(

    'Javascript',
    'property',
    'element',
    'object';
    'event',
    'listener';
    'array';
    'statements';
    'operator';
    'variable'
  );

var theWord = "";
var attempts = 0;
var hints = 0;

function selectWord(){
    //random number
	var ranNum = Math.floor(Math.random()*words.length);
	theWord = words[ranNum];
	theWord = theWord.toUpperCase();

 


//listening for button click
var event1 = document.getElementById("button1");
event1.addEventListener("click" , magicNumber , false);
   
//counter 
var counter = 0;


function magicNumber(){
    //
    var userinput =document.getElementById("box").value;
    var number = parseInt(userinput);
    //var guess = parseInt(randomnumber);

     var text = "";
    
    
    if (number < randomNumber){
        counter++;
        text = " Wrong ! your guess is to low. Try again. This is guess no. " + counter;
        tries();
        }
       
        else if (number > randomNumber){
            counter = counter + 1;
            text = " Wrong ! your guess is to high. Try again! This is guess no. " + counter;
        tries();
        }
        else {
            counter++;
           text = " Congratulations! You find the Magic number. You took " + counter + "guesses.";
        }
    
 
 //document.getElementById("demo").innerHTML = guess;
    document.getElementById("output").innerHTML = text;
     //document.getElementById("debug").innerHTML = number;
} //end of function


function tries(){
  // alert(counter);
   if (counter>5) {
       window.alert("GAME OVER!");
   }
    
}




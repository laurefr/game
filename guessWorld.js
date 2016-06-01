'use strict';

play function(){
    

   categories = [
      ["chrome", "firefox", "codepen", "javascript", "jquery", "twitter", "github", "wordpress", "opera", "sass", "layout", "standards", "semantic", "designer", "developer", "module", "component", "website", "creative", "banner", "browser", "screen", "mobile", "footer", "header", "typography", "responsive", "programmer", "css", "border", "github", "grunt", "pixel", "document", "object", "ruby", "modernizr", "bootstrap", "python", "php", "pattern", "ajax", "node", "element", "android", "application", "adobe", "apple", "google", "microsoft", "bookmark", "internet", "icon", "svg", "background", "property", "syntax", "flash", "html", "font", "blog", "network", "server", "content", "database", "socket", "function", "variable", "link", "apache", "query", "proxy", "backbone", "angular", "email", "underscore", "cloud"]
       ["archery","badminton","basketball","karate","boxing,kayak","cycling","diving","equestrian","fencing","fieldhockey","golf","gymnastics","handball","judo","rowing","rugby","sailing","shooting","football","swimming","taekwondo","tennis","triathlon","volleyball","weightlifting","wrestling","athleticism","basketball","baseball"]
      
  ["The Godfather","The-Dark-Knight","gladiator","alien", "saw", "jaws","psycho", "le-voyage-dans-la- lune","independence-day ","titanic","batman","spiderman","hulk","captain-america","superman","carol","rocky","jurassic-park","ghostbusters","top-gun","forrest-gump" ,"scarface","goodfellas","braveheart","big","beetlejuice"]
      ];
    
    var categories;
    var chosenCategory;
    var word;
    var wrongGuesses=[];
    var rightGuesses=[];
    var space, // number of space in word'-'
        
        
        // select Category
        
        var  selectCat = function (){
            if (chosenCategory===categories[0]){
                categoryName.innerHTML = "The chosen Category is web related";
            }
            else if(chosenCategory=== categories[1]){
                categoryName.innerHTML = " The chosen Category is sport related"
            }
            
            else if (chosenCategory===categories[2]){
                categoryName.innerHTML= "The chosen Category is film related"
            }
            
        }
    chosenCategory = categories[Math.floor(Math.random()*categories.length)];
    word = chosenCategory[Math.floor(Math.random()*chosenCategory.length)];
    word = word.replace(/\s/g,"-");
    console.log(word);
    buttons();
    
   //guesses=[];
    lives =7;
    counter =0;
    space =0;
    result();
    comments();
    selectCat();
    convas();   
}

// Reset

document.getElementById9('reset').onclick = function(){
    
    correct.parentNode.removeChild(correct);
    letters.parentNode.removeChild(letters);
    //context.clearRect (0,0,400,400)// only if want the hangman... to clear a rectangle with a giving rectangle
    play()
}

fucntion alterAt(n,c,originalString){
    return originalString.substr(0,n) + c+ originalString.substr(n+1, originalString.length);
}

function guessLetter(letter, answer,shown)
{
    var checkIndex=0;
    checkIndex = answer.indexOf(letter);
    while (checkIndex>=0){
        shown= alterAt(checkIndex,letter, shown);
        checkIndex = answer.indexOf(letter, checkIndex + 1);
    }
    return shown;
}























var eventWebWords = document.getElementById("webButton");
eventWebWords.addEventListener('click', ChooseWebWords, false);
var eventSportWords = document.getElementById("sportButton");
eventSportWords.addEventListener('click', ChooseSportWords, false);
var eventMovieWords = document.getElementById("movieButton");
eventMovieWords.addEventListener('click', ChooseMovieWords, false);

var wordList = ["one","two","three"];

function ChooseWebWords()
{
    wordList = wordListWeb;
    alert(worldList[0]);
}
function ChooseSportWords()
{
    wordList = wordListSport;
}
function ChooseMovieWords()
{
    wordList = wordListMovie;
}

    (function ($, window, undefined){
       
        GuessTheWord = {
        init: function(words){
        this.words = words,
        this.gtw = $(".GuessTheWord"),
        this.msg = $(".message");
        this.msgTitle = $(".title"),
        this.msgText = $(".text"),
        this.restart = $(".restart"),
        this.wrd= this.randomWord(),
        this.correct = 0,
        this.guess= $(".guess"),
        this.wrong= $(".wrong"),
        this.wrongGuesses=[],
        this.rightGuesses=[],
        this.guessForm= $(".guessForm"),
        this.guessLetterInput = $(".guessLetter"),
        this.setup();
    
            },
           
      setup: function(){
      this.binding();
      this.showGuess(this.wrongGuesses);
      this.showWrong();
                
            },
       
      /*  var categories,
        var chosenCategory,*/

            binding: function()
        {
            this.guessForm.on("submit", $.proxy(this.theGuess,this));
            this.restart.on("click", $.proxy(this.theRestart, this));
        },

      
        theRestart : function(e){
            e.preventDefault();
            this.reset();
        },

  theGuess: function(e)
    {
        e.preventDefault();
        var guess = this.guessLetterInput.val();
        if (guess.match (/[a-zA-Z]/) && guess.length == 1){
            if($.inArray(guess, this.wrongGuesses) > -1 || $.inArray(guess, this.rightGuesses) > -1){
                
                this.guessLetterInput.val("").focus();
        }

        else if (guess)
            {
                var foundLetters = this.checkGuess(guess);
                if (foundLetters.length > 0){
                    this.setLetters(foundLetters);
                    this.guessLetterInput.val("").focus();

                }
                //setting the max number of guesses
                else{
                    this.wrongGuesses.push(guess);
                    if(this.wrongGuesses.length == 7){
                        this.lose();
                    }
                    else{
                        this.showWrong(this.wrongGuesses);
                    }
                    this.guessLetterInput.val("").focus();
                }
            }
            }
            else{
                this.guessLetterInput.val("").focus();
            }
        },

       


            // select Category

            /*randomWorld = function (){
                if (chosenCategory===categories[0]){
                    categoryName.innerHTML = "The chosen Category is web related";
                }
                else if(chosenCategory=== categories[1]){
                    categoryName.innerHTML = " The chosen Category is sport related"
                }

                else if (chosenCategory===categories[2]){
                    categoryName.innerHTML= "The chosen Category is film related"
                }

            }*/

            //random word
       randomWord: function(){
            return this._wordData(this.words[Math.floor(Math.random()*this.words.length)]);
       // chosenCategory = categories[Math.floor(Math.random()*categories.length)];
        // word = chosenCategory[Math.floor(Math.random()*chosenCategory.length)];

        },

     showGuess: function(){
      var frag = "<ul class='word'>";
      $.each(this.wrd.letters, function(key, val){
        frag += "<li data-pos='" +  key  + "' class='letter'>*</li>";
      });
      frag += "</ul>";
      this.guess.html(frag);
    },
        
      showWrong: function(wrongGuesses){
      if(wrongGuesses){
        var frag = "<ul class='wrongLetters'>";
        frag += "<p>Wrong Letters: </p>";
        $.each(wrongGuesses, function(key, val){
          frag += "<li>" + val + "</li>";
        });
        frag += "</ul>";
      }
      else {
        frag = "";
      }

      this.wrong.html(frag);
    },

        //checking the user guessses

        checkGuess: function(guessedLetter){
      var _ = this;
      var found = [];
      $.each(this.wrd.letters, function(key, val){
        if(guessedLetter == val.letter.toLowerCase()){
          found.push(val);
          _.rightGuesses.push(val.letter);
        }
      });
      return found;

        },

        setLetters: function(letters){
      var _ = this;
      _.correct = _.correct += letters.length;
      $.each(letters, function(key, val){
        var letter = $("li[data-pos=" +val.pos+ "]");
        letter.html(val.letter);
        letter.addClass("correct");

        if(_.correct  == _.wrd.letters.length){
          _.win();
        }
      });
    },

        _wordData: function(word){
            return{
                letters: this._letters(word),
                word: word.toLowerCase(),
                totalLetters: word.length
            };
        },
      
            hideMsg: function(){
       this.msg.hide();
        this.msgTitle.hide();
        this.restart.hide();
        this.msgText.hide();
},
    // Do not understand this one!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!     
    showMsg: function(){
          var _ = this;
          _.msg.show("blind", function(){
            _.msgTitle.show("bounce", "slow", function(){
              _.msgText.show("slide", function(){
                _.restart.show("fade");
              });

            });

          });
        },
      
            
            reset:function(){
        this.hideMsg();
        this.init(this.words);
        this.gtw.find(".guessLetter").focus();
},
       
    // find the position of the correct letter of the random world
        _letters:function(word){
            var letters =[];
            for (var i=0; i<word.length; i++){
                letters.push({
                    letter: word[i],
                    pos: i
                });
            }
            return letters;
        },
        
            
            // counting the number of guesses right or wrong
       rating: function(){
            var right = this.rightGuesses.length,
           wrong = this.wrongGuesses.length ||0,
           rating = {
rating: Math.floor((right/(wrong + right))*100),
                guesses: (right + wrong)
            };
            return rating;

        },


    win: function (){
        var rating = this.rating();
        this.msgTitle.html ("Great, You Won!");
        //copy
        this.msgText.html("You solved the world in <span class ='highlight'>"+ rating.guesses + "</span Guesses!<br> Score:<span class 'highlight'>"+ rating.rating + "%</span>");

        this.showMsg();
    },
    

    // creating a function if user lose, showing the right word 
     lose:function(){

        this.msgTitle.html("You Lost... the word was <span class ='highlight'>"+ this.wrd.word + "</span>");
         this.msgText.html ("Don't worry, you can try again!")
         this.showMsg();

    }



}
    var wordListWeb = [
          "chrome", "firefox", "codepen", "javascript", "jquery", "twitter", "github", "wordpress", "opera", "sass", "layout", "standards", "semantic", "designer", "developer", "module", "component", "website", "creative", "banner", "browser", "screen", "mobile", "footer", "header", "typography", "responsive", "programmer", "css", "border", "github", "grunt", "pixel", "document", "object", "ruby", "modernizr", "bootstrap", "python", "php", "pattern", "ajax", "node", "element", "android", "application", "adobe", "apple", "google", "microsoft", "bookmark", "internet", "icon", "svg", "background", "property", "syntax", "flash", "html", "font", "blog", "network", "server", "content", "database", "socket", "function", "variable", "link", "apache", "query", "proxy", "backbone", "angular", "email", "underscore", "cloud"]
   var wordListSport = [                "archery","badminton","basketball","karate","boxing,kayak","cycling","diving","equestrian","fencing","fieldhockey","golf","gymnastics","handball","judo","rowing","rugby","sailing","shooting","football","swimming","taekwondo","tennis","triathlon","volleyball","weightlifting","wrestling","athleticism","basketball","baseball"]

   var wordListMovie = [
   "The Godfather","The-Dark-Knight","gladiator","alien", "saw", "jaws","psycho", "le-voyage-dans-la- lune","independence-day ","titanic","batman","spiderman","hulk","captain-america","superman","carol","rocky","jurassic-park","ghostbusters","top-gun","forrest-gump" ,"scarface","goodfellas","braveheart","big","beetlejuice" ];
        
    //var wordList = ["one", "two", "three"];
     
GuessTheWord.init(wordList);
})(jQuery, window);
















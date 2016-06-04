

    (function ($,window,undefined){
       
        GuessTheWorld ={
            init: function(words){
        this.words=words,
        this.gtw=$(".GuessTheWorld"),
        this.msg=$(".message");
        this.msgTtile= $(".title"),
        this.msgText= $(".text"),
        this.correct=0,
        this.restart= $(".restart");
        this.guess= $(".guess"),
        this.wrong= $(".wrong"),
        this.guessLetterInpput = $("guessLetter");
        this.guessForm= $("guessForm");
        this.wrongGuesses=[],
        this.rightGuesses=[],
        this.wrd= this.randomWorld();
            },
           
            setup:function(){
      this.binding();
      this.showGuess(this.wrongGuesses);
      this.showWrong();
                
            },
       
      /*  var categories,
        var chosenCategory,*/

            binding:function()
        {
            this.guessForm.on("submt"; $.proxy(this.theGuess,this));
            this.restart.on("click", &.proxy(this.theRestart,this));
        },

      
        theRestart : function(r){
            r.preventDefault();
            this.reset(),
        }
       // var space, // number of space in word'-'





        var categories = [
          ["chrome", "firefox", "codepen", "javascript", "jquery", "twitter", "github", "wordpress", "opera", "sass", "layout", "standards", "semantic", "designer", "developer", "module", "component", "website", "creative", "banner", "browser", "screen", "mobile", "footer", "header", "typography", "responsive", "programmer", "css", "border", "github", "grunt", "pixel", "document", "object", "ruby", "modernizr", "bootstrap", "python", "php", "pattern", "ajax", "node", "element", "android", "application", "adobe", "apple", "google", "microsoft", "bookmark", "internet", "icon", "svg", "background", "property", "syntax", "flash", "html", "font", "blog", "network", "server", "content", "database", "socket", "function", "variable", "link", "apache", "query", "proxy", "backbone", "angular", "email", "underscore", "cloud"],
           /*["archery","badminton","basketball","karate","boxing,kayak","cycling","diving","equestrian","fencing","fieldhockey","golf","gymnastics","handball","judo","rowing","rugby","sailing","shooting","football","swimming","taekwondo","tennis","triathlon","volleyball","weightlifting","wrestling","athleticism","basketball","baseball"]

      ["The Godfather","The-Dark-Knight","gladiator","alien", "saw", "jaws","psycho", "le-voyage-dans-la- lune","independence-day ","titanic","batman","spiderman","hulk","captain-america","superman","carol","rocky","jurassic-park","ghostbusters","top-gun","forrest-gump" ,"scarface","goodfellas","braveheart","big","beetlejuice"]
          ];*/

GuessTheWorld.init(categories)

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
        function(randomWorld){
            return this._wordData(this.words[Math.floor(Math.random()*this.words.length)]);
       // chosenCategory = categories[Math.floor(Math.random()*categories.length)];
        // word = chosenCategory[Math.floor(Math.random()*chosenCategory.length)];

        },

     
    // show the blanks

    theGuess: function(r)
    {
        r.preventDefault();
        var guess= this.guessLetterInput.val();
        if (guess.match (/[a-zA-Z]/) && guess.length ==1){
            if($.inArray(guess, this.wrongGuess)>-1 || $.inArray(guess, this.rightGuess)>-1)
                
                this.guessLetterInput.val("").focus();
        }

        else if (guess)
            {
                var foundLetter = this.checkGuess(guess);
                if (foundLetter.length >0){
                    this.setLetters(foundLetters);
                    this.guessLetterInput.val("").focus();

                }
                //setting the max number of guesses
                else{
                    this.wrongGuesses.push(guess),
                    if(this.wrongGuesses.length==7){
                        this lose();
                    }
                    else{
                        this.showWrong(this.wrongGuesses);
                    }
                    this.guessLetterInput.val("").focus();
                }
            }
            else{
                this.guessLetterInput.val("").focus
            }
        },


        //showin the blanks
        showGuess: function(){
        var fragement = "<ul class='word'>";
        $.each (this.wrd.letters, function (key,val){
            fragement += "< li data-position='" + key + "' class = "' class= 'letter'>*</li>";
        });
        fragement += "</ul>"
        this.guess.html(fragement);
    };
        
        showWrong: function (wrongGuesses){
            if (wrongGuesses){
                var fragmement="<ul class = ' Wrong Letters'>";
                fragmement+= "<p> Wrong Letters:</p>";
                $.each(wrongGuesses,function(key, val){
                    fragmement +="<li>" + val + "</li>"
                });
                fragmement += "</ul>"
            }
            else{
                fragmement= "";

            }

            this.wrong.html(fragement)
        },

        //checking the user guessses

        checkGuess: function (guessedLetter){
            var _= this;
            var found = [];
            $.each(this.wrd.letter, function (key,val){
                if (guessedLetter == val.letter.toLowerCase()){
                    found.push(val);
                _.rigthGuessses.push(val.letter);
            }
                    });
            return found;

        },

       setLetter: function (letters)
        {
            var_ = this;
            _.correct = _.correct+= letters.length;
            $.each (letters, function (key,val){
                var letter= $("li[data-pos=" + val.pos +"]" );
                letter.html(val.letter);
                letter.addClass("correct");

                if (_.correct == _.wrd.letters.length){
                    _.win();
                }

            });
        },
        
        _wordData: function(word){
            return{
                letter: this._letters(word),
                word: word.toLowerCase(),
                totalLetters:word.length
            };
        },
      
            hideMsg:function(){
       this.msg.hide();
        this.msgTtile.hide();
        this.restart.hide();
        this.msgText.hide();
},
         
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
            for (var i = 0; i<word.length; i++){
                letters.push({
                    letter:word[i];
                    pos:i
                });
            }
            return letters;
        },
        
            
            // counting the number of guesses right or wrong
        count:function(){
            var right = this.rightGuesses.length,
           wrong = this.wrongGuesses.length ||0;
            count ={

                count:Math.floor((right/(wrong + right))*100),
                guesses: (right + wrong)
            };
            return count;

        },


    win:function (){
        var rating= this.rating();
        this.msgTitle.html ("Great, You Won!");
        //copy
        this.msgText.html("You solved the world in <span class ='highlight'>"+ count.guesses + "</span Guesses!<br> Score:<span class 'highlight'>"+ count.count + "%</span>");

        this.showMsg()
    },
    

    // creating a function if user lose, showing the right word 
     lose:function(){

        this.msgTitle.html("You Lost... the word was <span class>'highlight'>"+ this.wrd.word+ "</span>");
         this.msgText.html ("Don't worry, you can try again!")

    }



}
})(jQuery, window);
















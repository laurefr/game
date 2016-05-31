                 ***

var words = new Array("ache","also","army","aunt","away","baby","back","bake","bank","bath","bean","bear","beat","bell","belt","bill","bird","bite","blow","blue","boat","body","boil","bomb","book","boot","born","both","bowl","burn","bush","busy","cage","cake","camp","card","cart","chin","city","club","coat","cold","comb","come","cook","cool","copy","corn","cost","damp","dark","date","dead","deep","desk","dish","dive","door","down","draw","drop","duck","dust","each","east","easy","else","ever","face","fall","farm","fast","feel","fill","film","find","fine","fire","fish","flag","flat","food","foot","fork","free","from","full","game","gate","girl","give","glad","glue","goal","goat","good","grow","hair","half","hall","hand","hang","hard","hate","have","head","hear","hide","high","hill","hold","hole","home","hook","host","hour","hurt","into","iron","joke","jump","keep","kick","kill","kind","kite","know","lady","lake","lamp","land","last","late","lazy","leaf","left","lend","less","like","line","lion","live","loaf","lock","long","look","lose","loud","love","lump","main","make","many","meal","mean","meat","meet","melt","mend","mile","milk","mind","miss","moon","more","most","move","much","nail","name","near","neck","need","nest","news","next","nice","none","nose","once","only","open","oven","over","page","pain","park","pass","past","path","pick","pile","pink","play","poem","pond","pool","poor","port","post","pour","pray","pull","push","race","rain","read","real","rest","rice","rich","ride","ring","road","roar","rock","roll","roof","room","rope","rose","safe","sail","salt","same","sand","save","seat","sell","send","shed","ship","shoe","shop","show","shut","sick","side","sing","size","slip","slow","snow","soap","sock","soft","some","song","soon","soup","sour","star","stay","step","stop","such","swim","tail","take","talk","tall","tame","tank","team","tear","tell","tent","than","that","then","they","thin","this","tidy","time","town","tree","trip","true","turn","type","ugly","very","wait","wake","walk","wall","want","warm","wash","wave","weak","wear","week","well","west","what","when","wide","wife","wild","will","wind","wing","wipe","wire","with","wood","wool","word","work","yard","year");

var theWord = "";
var attempts = 0;
var hints = 0;

function selectWord(){
	var ranNum = Math.floor(Math.random()*words.length);
	theWord = words[ranNum];
	theWord = theWord.toUpperCase();

}//end selectWord() function

function check(f){
	var entered = f.entry.value.toUpperCase();
	if(entered.length != 4){
		alert("You must enter a four letter word.");
		f.entry.value = "";
		f.entry.focus();
		return;

}//end if construction

	attempts++;
	f.guesses.value += f.entry.value + " ";

	for(i=0;i<4;i++){
		if(entered.charAt(i) == theWord.charAt(i)){
			f.elements[i].value = theWord.charAt(i);
}//end if construction
}//end loop

	var counter = 0;
	for(var j=0;j<4;j++){
		if(f.elements[j].value == theWord.charAt(j)){
			counter++;
}//end if construction
}//end loop

	if(counter == 4){
		var plurAttempt = " guesses";
		var plurHints = " hints";
		if(attempts == 1){plurAttempt = " guess";}
		if(hints == 1){plurHints = " hint";}
		alert("You got it after " + attempts + plurAttempt + " and " + hints + plurHints +".\n\nNow try another one!");
		attempts = 0;
		hints = 0;
		selectWord();
		f.reset();

}//end if construction

	if(attempts < 50){
		f.entry.value = "";
		f.entry.focus();
}else{
		alert("OK, that's enough!\nThe word was " + theWord + ".\n\nBetter luck this time!");
		attempts = 0;
		hints = 0;
		selectWord();
		f.reset();
		f.entry.focus();

}//end else clause

}//end check() function

function showAnswer(f){
	alert("The word was " + theWord + ".\n\nDon't give up so easily this time!");
	attempts = 0;
	hints = 0;
	selectWord();
	f.reset();
	f.entry.focus();

}//end showAnswer() function

function hint(f){
	var spaces = 0;
	for(var k=0;k<4;k++){
		if(f.elements[k].value == ""){
			spaces++;
}//end if construction
}//end loop

	if(spaces == 1 || spaces == 0){
		alert("You must be joking!");
		f.entry.focus();
		return;

}//end if construction

	for(var m=0;m<4;m++){
		if(f.elements[m].value == ""){
			f.elements[m].value = theWord.charAt(m);
			hints++;
			break;

}//end if construction
}//end loop

	f.entry.focus();

}//end hint() function

//-->
</script>
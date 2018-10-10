document.onkeyup = function (event){
/*generate random word*/
var wordA = ["OBAMA","BUSH","CLINTON","REAGAN","CARTER","FORD","NIXON","JOHNSON","KENNEDY","EISENHOWER","TRUMAN","ROOSEVELT","HOOVER","COOLIDGE","HARDING","WILSON"]
var chosenWord = wordA[Math.floor(Math.random() * (wordA.length))];
alert(chosenWord);
//var wordPlace = document.getElementById("word"); 
//wordPlace.innerHTML = "_ ".repeat(chosenWord.length);
/*generate random word*/

/*get and save all chars of the chosen word in an array*/
var eachChar = [];
var hiddenChar = [];
for(var i=0; i<chosenWord.length; i++){
    eachChar.push(chosenWord.charAt(i));
    hiddenChar.push(" _ ");
};
/*get and save all chars of the chosen word in an array*/

/*show the random word generated as hidden*/
var wordPlace = document.getElementById("word"); 
wordPlace.innerHTML = hiddenChar;
/*show the random word generated as hidden*/

var keyPressCount = 10; //make a counter for guesses Lefts
var winTimes = 0; //counter for wins times
/*gussed words*/
document.onkeyup = function (event) {
    var letter = event.key;
    letter = letter.toUpperCase();   
    document.getElementById("Guessed").append(letter + " ");
/*gussed words*/

/*make a counter for guesses Lefts*/
keyPressCount--;
document.getElementById("guessesLefts").innerHTML = "Number of Guesses Remaining: " + keyPressCount;
/*make a counter for guesses Lefts*/

    /*don't show duplicate chars*/

    /*loosing function*/
    if(keyPressCount == 0){
        document.getElementById("Guessed").innerHTML = "Letters Already Guessed: ";//clear
        keyPressCount = 10;//counter clear
        hiddenChar=[];//clear
        eachChar=[];//clear
        /*set a new random word for next round*/
        chosenWord = wordA[Math.floor(Math.random() * (wordA.length))];
        alert(chosenWord);/*generate random word*/
        for(var i=0; i<chosenWord.length; i++){
            eachChar.push(chosenWord.charAt(i));
            hiddenChar.push(" _ ");
        };
        wordPlace.innerHTML = hiddenChar;
        /*set a new random word for next round*/
    }
    /*loosing function*/

    /*wining functions*/
    /*replace the correct guess in hidden*/
    var letterIndex = eachChar.indexOf(letter);
    hiddenChar[letterIndex] = eachChar[letterIndex];
    wordPlace.innerHTML = hiddenChar;
    /*replace the correct guess in hidden*/
    if(!(hiddenChar.includes(" _ "))){
        document.getElementById("Guessed").innerHTML = "Letters Already Guessed: ";//clear
        keyPressCount = 10;//counter clear
        hiddenChar=[];//clear
        eachChar=[];//clear
        /*set win Times*/
        winTimes++;
        document.getElementById("wins").innerHTML = "Wins: " + winTimes;
        /*set win Times*/
        /*set a new random word for next round*/
        chosenWord = wordA[Math.floor(Math.random() * (wordA.length))];
        alert(chosenWord);/*generate random word*/
        for(var i=0; i<chosenWord.length; i++){
            eachChar.push(chosenWord.charAt(i));
            hiddenChar.push(" _ ");
        };
        wordPlace.innerHTML = hiddenChar;
        /*set a new random word for next round*/
    }
    /*wining functions*/

};

};
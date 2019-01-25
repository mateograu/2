var fruits = ["Apple", "Apricot", "Avocado","Banana", "Blueberry", "Cantelope","Cherries","Cranberry","Fig", "Grapefruit",
    "Grape", "Guava", "Kiwi","Lemon", "Lime", "Mango", "Orange", "Pear", "Pineapple", "Plantain", "Watermelon"];
var countries = ["Argentina", "Australia", "Austria", "Barbados", "Belgium", "Bolivia", "Brazil", "Cambodia", "Cameroon"
    ,"Canada", "Chile", "China", "Colombia", "Croatia", "Cuba", "Denmark", "Ecuador", "Egypt", "Ethiopia",
    "Fiji", "Finland", "France", "Germany", "Ghana", "Greece", "Guatemala", "Haiti", "Honduras", "India",
    "Iran", "Italy", "Japan", "Korea", "Mexico", "Nicaragua", "Nigeria", "Peru", "Portugal", "Russia", "Spain",
    "Sweden", "Turkey"];
var animals= ["Ant", "Alligator", "Baboon", "Barnacle", "Bat", "Bear", "Beaver", "Bird", "Bobcat", "Camel", "Cat", "Catfish", "Cheetah",
    "Chicken", "Cow", "Crab", "Crocodile", "Eagle", "Falcon", "Fish", "Fox", "Frog", "Giraffe", "Goose","Goat", "Gorilla", "Horse",
    "Hyena", "Iguana", "Lion", "Monkey", "Pig", "Zebra"];


var alpha = ["a","b", "c", "d", "e" ,"f", "g", "h", "i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var word = "";
var hearts = 6;
var graveyard = [];
var chosen = [];

var originalWord= "";



function alphaButton(){
    var output ="";
    console.log(chosen);
    for(var i =0; i<alpha.length; i++){
        if(chosen.indexOf(alpha[i] ) > -1){
            output+= "<button value='" + alpha[i] + "' id='" + alpha[i]
                + "' onclick='guessLetter(this.id)' disabled='true'>" + alpha[i] + "</button>";
            //console.log(output);
        } else {
            output+= "<button value='" + alpha[i] + "' id='" + alpha[i]
                + "' onclick='guessLetter(this.id)'>" + alpha[i] + "</button>";
        }
    }
    document.getElementById("myDiv").innerHTML = output;
}


function giveWord(d) {
    var d = document.getElementById("categories").value;
    console.log(d);
    d = parseInt(d);
    if(d==1){
        word = fruits[Math.floor(Math.random() * fruits.length)];
    }
    if(d==2){
        word = countries[Math.floor(Math.random() * countries.length)];
    }
    if(d==3){
        word = animals[Math.floor(Math.random() * animals.length)];
    }
    console.log(word);
    clearGame();
    document.getElementById("lives").innerHTML = hearts;
    document.getElementById("graveyard").innerHTML = graveyard;
    document.getElementById("blah").innerHTML = displayWord(word);
}


function guessLetter(letter) {
    var livesNow = hearts;
    chosen.push(letter);
    alphaButton();
    document.getElementById("blah").innerHTML = displayWord(word);
    //did I win, did I lose?
    document.getElementById("lives").innerHTML = hearts;
    if(livesNow != hearts){
        graveyard.push(letter);
    }
    livesNow = hearts;
    document.getElementById("person").innerHTML = images();
    document.getElementById("graveyard").innerHTML = graveyard;
}


function displayWord(){
    var answer = "";
    if(hearts>0) {
        for (var i = 0; i < word.length; i++) {
            if (chosen.indexOf(word[i]) > -1) {
                answer += word[i];
            } else {
                answer += "_ ";
            }
        }
        if (answer == originalWord && chosen != []) {
            hearts -= 1;
        }
        console.log(hearts);
        originalWord = answer;
        if(answer == word){
            return "Congrats. You beat my hangman :("
        }
        if(hearts == 0) {
            return "You ran out of lives. Please try again!";
        }
        return answer;

    }

}


function images() {
    if(hearts == 6){
        return "<img src= 'empty.png' />";
    }
    if (hearts == 5) {
        return "<img src= 'head.png' />";
    }
    if (hearts == 4) {
        return "<img src= 'body.png' />";
    }
    if (hearts == 3) {
        return "<img src= 'arm1.png' />";
    }
    if (hearts == 2) {
        return "<img src= 'arm2.png' />";
    }
    if (hearts == 1) {
        return "<img src= 'leg1.png' />";
    }
    if (hearts == 0) {
        return "<img src= 'leg2.png' />";
    }

}

function clearGame(){
    chosen = [];
    hearts = 6;
    console.log(chosen);
    graveyard = [];
    alphaButton();
    document.getElementById("person").innerHTML = images();
}





alert("Words from words");
var prime_word = prompt("Enter your primary word");
var used = [], usedf = [], useds = [];
var move = 1;
able_to_continue = true;

while(able_to_continue){
    move = prompt("Which one is going to make a move(1 or 2)");
    var word = prompt("Player is making his move (the moment you want to stop the game, call the 'end'- command)");
    if(word != "end" ){
        if(confirm("Do another player find that word appropriate?") && ((usedf.includes(word)==false) && (useds.includes(word)==false))){
            if (move == "1"){
                usedf.push(word);
                continue;}
            else {
                useds.push(word);
                continue;}
            }
        else
            {alert("Please redo your move");
            continue;}
        }        
    else able_to_continue = 0;
     
}

alert(usedf);
alert(useds);
if (usedf.length > useds.length){
    alert("First player was victorious!!!");}
else {
    alert("Second player was victorious!!!");}
window.close();
var player1_name=localStorage.getItem("player1_name");
var player2_name=localStorage.getItem("player2_name");
player1_score=0;
player2_score=0;
document.getElementById("player1_name").innerHTML=player1_name+": ";
document.getElementById("player2_name").innerHTML=player2_name+": ";
document.getElementById("player1_score").innerHTML=player1_score;
document.getElementById("player2_score").innerHTML=player2_score;

function send(){
    get_word=document.getElementById("word").value;
    word=get_word.toLowerCase();
    console.log(word);
    cAt1=word.charAt(1);
    console.log(cAt1);
    half_length=Math.floor(word.length/2);
    cAt2=word.charAt(half_length);
    console.log(cAt2);
    last=word.length-1;
    cAt3=word.charAt(last);
    console.log(cAt3);
    replace_c1=word.replace(cAt1,"_");
    console.log(replace_c1);
    replace_c2=replace_c1.replace(cAt2,"_");
    console.log(replace_c2);
    replace_c3=replace_c2.replace(cAt3,"_");
    console.log(replace_c3);

    ques="<h4 id='display'> Q."+replace_c3+"</h4>";
    ans="<br><input type='text' id='input_checkbox'>";
    check_button="<br><br><button class='btn btn-primary' onclick='check()'>Check</button>";
    row=ques+ans+check_button;
    document.getElementById("output").innerHTML=row;
    document.getElementById("word").value="";
}

var question_turn="player1";
answer_turn="player2";

function check(){
    get_answer=document.getElementById("input_checkbox").value;
    var answer=get_answer.toLowerCase();
    if (answer==word){
        if (answer_turn=="player1"){
            player1_score=player1_score+1;
            document.getElementById("player1_score").innerHTML=player1_score;
        }
        else{
            player2_score=player2_score+1;
            document.getElementById("player2_score").innerHTML=player2_score;
        }
    }
    if (question_turn=="player1"){
        question_turn="player2";
        document.getElementById("player_questions").innerHTML="question turn-"+player2_name;
    }
    else{
        question_turn="player1";
        document.getElementById("player_questions").innerHTML="question turn-"+player1_name;
    }
    if(answer_turn=="player1"){
        answer_turn="player2";
document.getElementById("player_answers").innerHTML="answer turn-"+player2_name;
    }
    else {
        answer_turn="player1";
        document.getElementById("player_answers").innerHTML="answer turn-"+player1_name;
    }
    document.getElementById("output").innerHTML="";
}
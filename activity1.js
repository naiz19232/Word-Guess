score=0;
function score(){
    score=score+1;
    document.getElementById("score").innerHTML="score"+ score;
}
function save(){
    localStorage.setItem("score", score);
}
function info(){
    window.location="activity_2.html";
}
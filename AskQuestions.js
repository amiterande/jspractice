var questions;
questions =[];
var questionobj = function(question, ansarray, correct){
    this.question = question;
    this.ansarray = ansarray;
    this.correct = correct;
}
function fillqs(question, answerarray, correct){
    questions.push(new questionobj(question,answerarray,correct));
}
function printrandq(i){    
    console.log(questions[i].question);
    for( j=0; j < questions[i].ansarray.length;j++){
    console.log(questions[i].ansarray[j]);
    }
}
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
function checkanswer(resp,i){
    if ( parseInt(resp) === parseInt(questions[i].correct) ) {
        return true;
    } else {
        return false;
    }
}
fillqs('What is Amit\'s favorite color?', ['Green','Blue','Red'], 0);
fillqs('What is Amit\'s favorite Car?', ['Nissan','Maruti','Mazda'], 2);

function askquestion() {
  var random = getRandomInt(2);
  console.log(random);    
  printrandq(random);
  var resp = prompt("Please provide your answer: ");
  console.log(resp);
  console.log(questions[random].correct); 
  if (resp !== 'exit') {
      console.log(checkanswer(resp,random));
      askquestion();
      //yee haw !
  }    
}

askquestion(); 

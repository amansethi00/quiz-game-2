var chalk=require("chalk");
function checkScore(highScores,score,username){
  for(var i=0;i<highScores.length;i++){
    if(highScores[i].score < score){
      highScores[i].score=score;
      highScores[i].name = username;
      return highScores;
    }
  }
  return highScores;
}
function ask(options,question,answer){
  var index = readLine.keyInSelect(options,chalk.bgYellow(question));
   console.log(chalk.blue("You chose "+ options[index] ));
  if(options[index].toUpperCase() === answer.toUpperCase()){
    console.log(chalk.green("You are right!"));
    score++;

  } 
  else{
    console.log(chalk.red("You are wrong!!"));
  }
  console.log(chalk.bgMagenta("Your score is "+score));
  totalScore++;
}


var readLine = require("readline-sync");

console.log(chalk.yellow("Rules of the game :"));
console.log(chalk.yellow("There will be three levels in the game"));
console.log(chalk.yellow("You will promoted to next level only if you clear the current level"));
console.log(chalk.yellow("There will be 4 questions in level one"));
console.log(chalk.yellow("There will be 3 questions in level 2 and 3"));
console.log(chalk.yellow("You have to get atleast 2 answers right to qualify for level two"));
console.log(chalk.yellow("All questions will be MCQs"));

var username = readLine.question("Hello,What is your name? ");

console.log("Hey "+ username +" Let's start Level 1")

var score = 0;
var totalScore = 0;


var questions = [{
  question:"Where was Dhirubhai Ambani born?  ",
  answer:"Chorwad",
  options:["Jamnagar","Valsad","Chorwad","Kutchh"],
},
{
  question:"What was the first business started by Dhirubhai Ambani ?",
  answer:"Spices",
  options:["Petrochemicals","Spices","Textile","Dairy"],
},
{
  question:"When was Reliance Industries formed? ",
  answer:"1973",
  options:["1973", 
            "1975", 
            "1972", 
            "1970" 
            ]
},
{
  question:"Who is the CEO of JIO Digital Life ",
  answer:"Mukesh Ambani",
  options: [
            "Mukesh Ambani",
            "Nita Ambani",
            "Anant Ambani",
             "Isha Ambani"
  ]
},
{
  question:"In which state was Narendra Modi born?",
  answer:"Gujarat",
  options:[
          "Asssam",
          "Maharashtra",
          "Chennai",
          "Gujarat"
  ]
},
{
  question:"Which one is longest beach in Goa ?",
  answer:"Colava Beach",
  options: [ "Anjuna Beach",'Vagator Beach',"Colava Beach","Palolem Beach"],
},
{
  question:"Which of the above institutes has promised to make coronavirus vaccine affordable and available to all the Indians ? ",
  answer: "Serum Institute",
  options:["Pfizer","Serum Institute","Biocon Technologies"],

},
{
  question:"Which is the biggest stock broker of India ?",
  answer:"Zerodha",
  options:["HDFC Life Securities","Zerodha","Upstox"]
},{
  question:"Which is the biggest Ed-Tech startup of India ?",
  answer:"Byjus",
  options:["Unacademy","Byjus","Vedantu"],
},
{
  question:"Which of the above companies 96% stake in Urban Ladder?",
  answer:"Reliance Industries",
  options:["Reliance Industries","Urbanclap","Zomato","Swiggy"]
}



]

for(var i=0;i<3;i++){
  ask(questions[i].options,questions[i].question,questions[i].answer);

}

var highScores = [
  {
    name:"Aman",
    score:10,
  },
  {
    name:"Dummy",
    score:8,
  },
  {
    name:"Jay",
    score:6,
  }
];

if(score >= 2){
  console.log(chalk.yellow("Your score is "+ score));
  console.log(chalk.yellow("Congratulations You qualified Level One!!"));
  console.log(chalk.yellow("Let's begin Level 2"));
  for(var i=4;i<7;i++){
  ask(questions[i].options,questions[i].question,questions[i].answer);

}
  if(score>=4){
    console.log(chalk.yellow("Your score is "+ score));
    console.log(chalk.yellow("Congratulations You passed Level 2!!"));
    console.log(chalk.yellow("Let's begin Level 3"));
    for(var i=7;i<10;i++){
  ask(questions[i].options,questions[i].question,questions[i].answer);

}
  }
  else{
    console.log("Sorry You did pass  Level 3");
  }
}
else{
  console.log("Sorry You did not qualify for Level 2");
}

console.log("You scored "+score);
highScores = checkScore(highScores,score,username);
console.log("High Scores are -");
for(var i=0;i<highScores.length;i++){
  console.log(i+1 +" "+ chalk.blue(highScores[i].name));
  console.log(chalk.green("Score ") + highScores[i].score);
}
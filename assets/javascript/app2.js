//pseudocode
//pseudocode instructions
//shows 1 question until user answers or time runs out
//check 
//if correct answer then alert(congratulations) wait a few seconds, show next question
//if incorrect answer then  alert(wrong answer) , alert(correct answer), wait a few seconds, show next question
//final screen shows # of correct answers, # of incorrect answers, option to restart game 
//create a variable of current question in order to show the next question after the other

//coding starts here//
var questionIndex = 0;
var correctAnswers = 0;
var incorrectAnswers = 0;

//constructor of what we need to create in the questions
class Question {
    constructor(question, answers, correctAnswer, timeLimit) {
        this.question = question;
        this.answers = answers;
        this.correctAnswer = correctAnswer;
        this.timeLimit = timeLimit;
    }
    //displays the questions and answers on the html 
    display() {
        $("#questionsText").text(this.question);
        $(".list-group-item").each((index, listItem) => {
            $(listItem).text(this.answers[index]);
            //gives an attribute to the list in html with a value of index to compare with the correct answer 
            $(listItem).attr("data-index", index);
            //remove previously assigned events, takes off the click event
            $(listItem).off("click");
            //add a new event to the button, adds a click event on the answers list to create a comparison
            $(listItem).on("click", () => {
                this.compareAnswer(listItem);
            });
        });
    }
    //compares the answer to the user's guess
    compareAnswer(listItem) {
        //if the list selected = the number of index, then it is correct 
        var dataIndex = $(listItem).attr("data-index");
        if (dataIndex == this.correctAnswer) {
            alert("You guessed right!");
            correctAnswers++;
            //wait a few seconds function index 3 * 1000
            //display next question 
            //display(questionIndex++);
        } else {
            alert("Wrong answer");
            incorrectAnswers++;
            //show correct answer from the new Question index3
            //wait a few seconds
            //display next question 
        }
            questionIndex++;
            //if user wins all questions, final screen shows # of correct answers, # of incorrect answers, option to restart game
            if (questionIndex > questions.length -1) {
                alert("Correct answers: " + correctAnswers);
                alert("Incorrect answers: " + incorrectAnswers);
                restartGame();
            }
            //displays next question from the index using index++
            questions[questionIndex].display();
    }
}

//when page loads,
$( document ).ready(function() {
    questions[0].display();
    
});

//this variable shows the things that go into the constructor: it has the questions related to the array of answers, the number shows the correct answer, and the last number shows the seconds 
var questions = [];
questions.push(new Question("Who sings Poker Face?", ["Lady Gaga", "Katy Perry", "Taylor Swift", "Bruno Mars"], 0, 20));
questions.push(new Question("Who sings Magnets?", ["Christina Aguilera", "Michael Jackson", "King", "Lorde"], 3, 05));
questions.push(new Question("Justin Timberlake released a song in 2006 called sexy ... what?", ["Arm", "Back", "Leg", "Butt"], 1, 05));
questions.push(new Question("Complete the song lyrics: who says you_____________", ["you are always too small", "you're not just right", "it's always hot", "can't go home"], 3, 10));
questions.push(new Question("Complete the song lyrics, ______ are you ok?", ["jennie", "annie", "beetlejuice", "lenny"], 1, 05));


//restart game 
function restartGame() {
    questionIndex = 0;
    correctAnswers = 0;
    incorrectAnswers = 0;
};


//timer function


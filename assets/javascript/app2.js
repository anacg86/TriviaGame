
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
        //runs timer
        run();
        //takes off the highlighter of the correct answer
        $(".correct-highlight").removeClass("correct-highlight");
        //display scores of correct and incorrect answers
        $("#correctGuessesText").text(correctAnswers);
        $("#incorrectGuessesText").text(incorrectAnswers);
    }
    //compares the answer to the user's guess
    compareAnswer(listItem) {
        //if the list selected = the number of index, then it is correct 
        var dataIndex = $(listItem).attr("data-index");
        if (dataIndex == this.correctAnswer) {
            alert("You guessed right!");
            correctAnswers++;
        } else {
            alert("Wrong answer");
            incorrectAnswers++;
        }
        //highlights the correct answer from the list
        $(".list-group-item:nth-of-type(" + (this.correctAnswer + 1) + ")").addClass("correct-highlight");
        clearInterval(intervalId);
        setTimeout(this.nextQuestion, 2000);
    }

    nextQuestion() {
        seconds = 10;
        questionIndex++;
        //if user wins all questions, final screen shows # of correct answers, # of incorrect answers, option to restart game
        if (questionIndex > questions.length - 1) {
            restartGame();
        }
        //displays next question from the index using index++
        questions[questionIndex].display();
    }
}
    //timer function
    var seconds = 10;
    var intervalId;

    function run() {
        clearInterval(intervalId);
        $("#secondsLeft").html("<p>" + seconds + "</p>");
        intervalId = setInterval(decrement, 1000);
    };

    function decrement() {
        seconds--;
        $("#secondsLeft").html("<p>" + seconds + "</p>");
        if (seconds === 0) {
           $(".list-group-item:nth-of-type(" + (questions[questionIndex].correctAnswer + 1) + ")").addClass("correct-highlight"); 
           clearInterval(intervalId);
            //me avisa que perdi
            alert("Time's up!");
            //me suma un incorrect answer
            incorrectAnswers++;
            setTimeout(questions[questionIndex].nextQuestion, 2000);
        }
    };
    run();
//when page loads,
$(document).ready(function () {
    questions[0].display();
});

//this variable shows the things that go into the constructor: it has the questions related to the array of answers, the number shows the correct answer, and the last number shows the seconds 
var questions = [];
questions.push(new Question("Who sings Poker Face?", ["Lady Gaga", "Katy Perry", "Taylor Swift", "Bruno Mars"], 0));
questions.push(new Question("Who sings Magnets?", ["Christina Aguilera", "Michael Jackson", "King", "Lorde"], 3));
questions.push(new Question("Justin Timberlake released a song in 2006 called sexy ... what?", ["Arm", "Back", "Leg", "Butt"], 1));
questions.push(new Question("Complete the song lyrics: who says you_____________", ["you are always too small", "you're not just right", "it's always hot", "can't go home"], 3));
questions.push(new Question("Complete the song lyrics, ______ are you ok?", ["jennie", "annie", "beetlejuice", "lenny"], 1));
questions.push(new Question("What song is this from: When you smile, the whole world stops and stands for while", ["chasing cars", "human", "just the way you are", "titanium"], 2));
questions.push(new Question("Who are the two artists that sang Drop it Like it’s Hot?", ["snoop dogg and pharrell williams", "kanye and katy perry", "metalica and rage against the machine", "bruno mars and daddy yankee"], 0));
questions.push(new Question("What song is: It started out with a kiss, how did it end up like this?", ["mercy", "jar of hearts", "mr. brightside", "pure shores"], 2));

//restart game 
function restartGame() {
    questionIndex = 0;
    correctAnswers = 0;
    incorrectAnswers = 0;
    run();
};





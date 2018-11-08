//pseudocode
//pseudocode instructions
//shows 1 question until user answers or time runs out
//check 
//if correct answer then alert(congratulations) wait a few seconds, show next question
//if incorrect answer then  alert(wrong answer) , alert(correct answer), wait a few seconds, show next question
//final screen shows # of correct answers, # of incorrect answers, option to restart game 

/*
var getRandomQuestion = "";
var questionsText = document.getElementById("questionsText");


//create an object with questions and answers with correct answers 

  


//when page loads, user clicks on start button
//start button shows random question
$("#startButton").on("click", function () {
    display();
    }

});

//create a variable of current question in order to show the next question after the other. 
var currentQuestion = 0;
//constructor of what we need to create in the questions
class Question {
    constructor(question, answers, correctAnswer, timeLimit) {
        this.question = question;
        this.answers = answers;
        this.correctAnswer = correctAnswer;
        this.timeLimit = timeLimit;
    }
//displays the questions and answers on html 
    display() {
        $("#questionsText").text(this.question);
        $(".list-group-item").each((index, listItem) => {
            $(listItem).text(this.answers[index]);
            //gives an attribute to the list in html with a value of index to compare with the correct answer 
            $(listItem).attr("data-index", index);

            //remove previously assigned events. takes of the click event
            $(listItem).off("click");
            //add a new event to the button, adds a click event on the answers list to create a comparison 
            $(listItem).on("click", () => {
                this.compareAnswer(listItem);
            });
        });
    }
    //compares the answer the user guessed 
    compareAnswer(listItem) {
        var dataIndex = $(listItem).attr("data-index");
        if(dataIndex == this.correctAnswer) {
            alert("You guessed right!");
            display (currentQuestion++);
        } else {
            alert("Wrong answer");
        }
    }
};
//this variable shows the things that go into the constructor: it has the questions related to the array of answers, the number shows the correct answer, and the last number shows the seconds 
var questions = [];
questions.push(new Question("Who sings Poker Face?", ["Lady Gaga", "Katy Perry", "Taylor Swift", "Bruno Mars"], 0, 05));
questions.push(new Question("Who sings Magnets?", ["Christina Aguilera", "Michael Jackson", "King", "Lorde"], 3, 05));
questions.push(new Question("Justin Timberlake released a song in 2006 called sexy ... what?", ["Arm", "Back", "Leg", "Butt"], 1, 05));
questions.push(new Question("Complete the song lyrics: who says you_____________", ["you are always too small", "you're not just right", "it's always hot", "can't go home"], 3, 10));
questions.push(new Question("Complete the song lyrics, ______ are you ok?", ["jennie", "annie", "beetlejuice", "lenny"], 1, 05));


        //connect right answer for each question

        //if correct answer then alert(congratulations) 
        //show function that waits a few seconds
        //show function with next question

        //if incorrect answer then  alert(wrong answer) 
        //alert(correct answer)
        //show function that waits a few seconds
//show function with next question

//if user wins all questions, final screen shows # of correct answers, # of incorrect answers, option to restart game 

//timer function
//wins function
//lost function
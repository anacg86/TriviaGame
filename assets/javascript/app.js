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
var gameQuestions = {
    index0: {
        answers0: ["Lady Gaga", "Katy Perry", "Taylor Swift", "Bruno Mars"],
        correctAnswer0 ="Lady Gaga",
    },
    index1: {
        answers1: ["Christina Aguilera", "Michael Jackson", "King", "Lorde"],
        correctAnswer1="Lorde",
    },
    index2: {
        answers2: ["Arm", "Back", "Leg", "Butt"],
        correctAnswer2 ="Back",
    },
    index3: {
        answers3: ["you are always too small", "you're not just right", "it's always hot", "can't go home"],
        correctAnswer3 ="can't go home",
    },
    index4: {
        answers4: ["jennie", "annie", "beetlejuice", "lenny"],
        correctAnswer4 ="annie",
    },
    questions: [, "Who sings Magnets?", "Justin Timberlake released a song in 2006 called sexy ... what?", "Complete the song lyrics: who says you_____________", "Complete the song lyrics, ______ are you ok?"],
};


//when page loads, user clicks on start button
//start button shows random question
$("#startButton").on("click", function () {
    getRandomQuestion = gameQuestions.questions[Math.floor(Math.random() * gameQuestions.questions.length)];
    for (let i = 0; i < gameQuestions.questions.length; i++); {
        getRandomNumber[i];
        questionsText.textContent = "Question: " + getRandomNumber[i];
    }

});*/

class Question {
    constructor(question, answers, correctAnswer, timeLimit) {
        this.question = question;
        this.answers = answers;
        this.correctAnswer = correctAnswer;
        this.timeLimit = timeLimit;
    }

    display() {
        $("#questionsText").text(this.question);
        $(".list-group-item").each((index, listItem) => {
            $(listItem).text(this.answers[index]);
            $(listItem).attr("data-index", index);

            //remove previously assigned events
            $(listItem).off("click");
            //add a new event to the button
            $(listItem).on("click", () => {
                this.compareAnswer(listItem);
            });
        });
    }

    compareAnswer(listItem) {
        var dataIndex = $(listItem).attr("data-index");
        if(dataIndex == this.correctAnswer) {
            alert("You guessed right!");
        } else {
            alert("Wrong answer");
        }
    }
};

var first = new Question("Who sings Poker Face?", ["Lady Gaga", "Katy Perry", "Taylor Swift", "Bruno Mars"], 0, 25);
var second = new Question("Who sings Poker Facasfae?", ["Lady Gaafasfga", "Katy asfas", "Taylor Swift", "Bruno Mars"], 1, 25);

//new Question ("Who sings Poker Face2?")
//function to do math random for each question to show every time they click on start or next question
/*function getRandomNumber() {
    return Math.floor(Math.random() * Array.length);
}
//connect question with answer options
function Question0() {
    if questions[0];
    //show answers0 on .listgroup
    //userGuess variable that functions when user clicks on list
    if (userGuess === answers0[0])
    alert("You guessed correctly")
    setTimeout(function () {
    }, 3000);
    //shows next question 
    else {
        alert("Wrong answer");
    };}

function Question1() {
        if questions[1];
        //show answers0 on .listgroup
        //userGuess variable that functions when user clicks on list
        if (userGuess ===  answers1[3])
        alert("You guessed correctly")
        setTimeout(function () {
        }, 3000);
        //shows next question 
        else {
            alert("Wrong answer");
        };}

function Question2() {
            if questions[2];
            //show answers0 on .listgroup
            //userGuess variable that functions when user clicks on list
            if userGuess =  answers2[1]
            alert("You guessed correctly")
            setTimeout(function () {
            }, 3000);
            //shows next question 
            else {
                alert("Wrong answer");
            };} 

function Question3() {
                if questions[3];
                //show answers0 on .listgroup
                //userGuess variable that functions when user clicks on list
                if userGuess = answers3[3]
                alert("You guessed correctly")
                setTimeout(function () {
                }, 3000);
                //shows next question 
                else {
                    alert("Wrong answer");
                };}     
                
function Question4() {
                    if questions[4];
                    //show answers0 on .listgroup
                    //userGuess variable that functions when user clicks on list
                    if userGuess = answers4[2]
                    alert("You guessed correctly")
                    setTimeout(function () {
                    }, 3000);
                    //shows next question 
                    else {
                        alert("Wrong answer");
                    };}
        //connect right answer for each question

        //i could use a for loop after the first random question is showed, when wins/looses, we show the next question

        //if correct answer then alert(congratulations) 
        //show function that waits a few seconds
        //show function with next question

        //if incorrect answer then  alert(wrong answer) 
        //alert(correct answer)
        //show function that waits a few seconds
        setTimeout(function () {
        }, 3000);
//show function with next question

//if user wins all questions, final screen shows # of correct answers, # of incorrect answers, option to restart game 

//timer function
//wins function
//lost function
*/
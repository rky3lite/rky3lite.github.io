/**
* Try this example at https://alpsquid.github.io/quizlib
*/

var quiz;


    

function showResults() {
    // Check answers and continue if all questions have been answered
    if (quiz.checkAnswers()) {
        var quizScorePercent = quiz.result.scorePercentFormatted; // The unformatted percentage is a decimal in range 0 - 1
        var quizResultElement = document.getElementById('quiz-result');
        var skillRubric = document.getElementById('student-rubric');
        quiz.highlightResults(handleAnswers); // try this 


        var skill;
        var lessonLevel;
        

        if (quizScorePercent >= 75) skill = ('4');
        else if (quizScorePercent >= 50) skill = ('3');
        else if (quizScorePercent >= 25) skill = ('2');
        else if (quizScorePercent >= 0)  skill = ('1');

        if (quizScorePercent >= 75) lessonLevel = ('<a href = "Level 4.html" target = "blank" > the Level 4 curriculum </a>');
        else if (quizScorePercent >= 50) lessonLevel = ('<a href = "Level 3.html" target = "blank" > the Level 3 curriculum </a>');
        else if (quizScorePercent >= 25) lessonLevel = ('<a href = "Level 2.html" target = "blank" > the Level 2 curriculum </a>');
        else if (quizScorePercent >= 0)  lessonLevel = ('<a href = "Level 1.html" target = "blank" > the Level 1 curriculum </a>');


        quizResultElement.style.display = 'block';
        skillRubric.style.display = 'block';
        document.getElementById('quiz-score').innerHTML = quiz.result.score.toString();
        document.getElementById('quiz-max-score').innerHTML = quiz.result.totalQuestions.toString();
        document.getElementById('quiz-percent').innerHTML = quizScorePercent.toString();
        document.getElementById('skill-level').innerHTML = "Your skill level is " + skill.toString();
        document.getElementById('lessons').innerHTML = 'Given your understanding, you should go to' + lessonLevel; 
        

        // Change background colour of results div according to score percent
        if (quizScorePercent >= 75) quizResultElement.style.backgroundColor = '#4caf50';
        else if (quizScorePercent >= 50) quizResultElement.style.backgroundColor = '#ffc107';
        else if (quizScorePercent >= 25) quizResultElement.style.backgroundColor = '#ff9800';
        else if (quizScorePercent >= 0) quizResultElement.style.backgroundColor = '#f44336';

        


        
        
        
        // Highlight questions according to whether they were correctly answered. The callback allows us to highlight/show the correct answer
    }
}

/** Callback for Quiz.highlightResults. Highlights the correct answers of incorrectly answered questions 
 * Parameters are: the quiz object, the question element, question number, correctly answered flag
 */
function handleAnswers(quiz, question, no, correct) {
    if (!correct) {
        var answers = question.getElementsByTagName('input');
        for (var i = 0; i < answers.length; i++) {
            if (answers[i].type === "checkbox" || answers[i].type === "radio"){ 
                // If the current input element is part of the correct answer, highlight it
                if (quiz.answers[no].indexOf(answers[i].value) > -1) {
                    answers[i].parentNode.classList.add(Quiz.Classes.CORRECT);
                }
            } else {
                // If the input is anything other than a checkbox or radio button, show the correct answer next to the element
                var correctAnswer = document.createElement('span');
                correctAnswer.classList.add(Quiz.Classes.CORRECT);
                correctAnswer.classList.add(Quiz.Classes.TEMP); // quiz.checkAnswers will automatically remove elements with the temp class
                correctAnswer.innerHTML = quiz.answers[no];
                correctAnswer.style.marginLeft = '10px';
                answers[i].parentNode.insertBefore(correctAnswer, answers[i].nextSibling);
            }
        }
    }
}

window.onload = function() {
    quiz = new Quiz('quiz', [
        'a', // q1
        'a', // q2
        'a', // q3
        'a', // q4
        'a', // q5
        'a', // q6
        'a', // q7
        'b', // q8
        'c', // q9
        'a', // q10
        'a', // q11
        'a', // q12
        'b', // q13
        'a', // q14
        'b', //q15
        'b', // q16
        'b',
        'a',
        'a',
        'b',
        'b',
        'a',
        'c',
        'b'
    ]);
};

document.getElementsByClassName('card')[0].style.display = "block";

function next(id) {
    document.getElementsByClassName('card')[id-1].style.display = "none";
    document.getElementsByClassName('card')[id].style.display = "block";
}

function prev(id) {
    document.getElementsByClassName('card')[id-1].style.display = "block";
    document.getElementsByClassName('card')[id].style.display = "none";
}

function reveal() {
    document.getElementsByClassName('card')[0].style.display = "block";
    document.getElementsByClassName('card')[1].style.display = "block";
    document.getElementsByClassName('card')[2].style.display = "block";
    document.getElementsByClassName('card')[3].style.display = "block";
    document.getElementsByClassName('card')[4].style.display = "block";
    document.getElementsByClassName('card')[5].style.display = "block";
    document.getElementsByClassName('card')[6].style.display = "block";
    document.getElementsByClassName('card')[7].style.display = "block";
    document.getElementsByClassName('card')[8].style.display = "block";
    document.getElementsByClassName('card')[9].style.display = "block";
    document.getElementsByClassName('card')[10].style.display = "block";
    document.getElementsByClassName('card')[11].style.display = "block";
    document.getElementsByClassName('card')[12].style.display = "block";
    document.getElementsByClassName('card')[13].style.display = "block";
    document.getElementsByClassName('card')[14].style.display = "block";
    document.getElementsByClassName('card')[15].style.display = "block";
    document.getElementsByClassName('card')[16].style.display = "block";
    document.getElementsByClassName('card')[17].style.display = "block";
    document.getElementsByClassName('card')[18].style.display = "block";
    document.getElementsByClassName('card')[19].style.display = "block";
    document.getElementsByClassName('card')[20].style.display = "block";
    document.getElementsByClassName('card')[21].style.display = "block";
    document.getElementsByClassName('card')[22].style.display = "block";
    document.getElementsByClassName('card')[23].style.display = "block";
    document.getElementsByClassName('card')[24].style.display = "block";








    


}



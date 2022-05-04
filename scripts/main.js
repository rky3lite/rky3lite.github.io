/**
* Try this example at https://alpsquid.github.io/quizlib
*/

var quiz;
// this is a test 
//this is a test part 2 

    

function showResults() {
    // Check answers and continue if all questions have been answered
    if (quiz.checkAnswers()) {
        var quizScorePercent = quiz.result.scorePercentFormatted; // The unformatted percentage is a decimal in range 0 - 1
        var quizResultElement = document.getElementById('quiz-result');

        var skill;
        var lessonLevel;
        

        if (quizScorePercent >= 75) skill = ('4');
        else if (quizScorePercent >= 50) skill = ('3');
        else if (quizScorePercent >= 25) skill = ('2');
        else if (quizScorePercent >= 0)  skill = ('1');

        if (quizScorePercent >= 75) lessonLevel = ('<a href = "https://www.youtube.com" target = "blank" > this video </a>');
        else if (quizScorePercent >= 50) lessonLevel = ('<a href = "https://twitter.com/" target = "blank" > this video </a>');
        else if (quizScorePercent >= 25) lessonLevel = ('<a href = "https://www.google.com/" target = "blank" > this video </a>');
        else if (quizScorePercent >= 0)  lessonLevel = ('<a href = "https://tinyurl.com/yc75d2ph" target = "blank" > this video </a>');


        quizResultElement.style.display = 'block';
        document.getElementById('quiz-score').innerHTML = quiz.result.score.toString();
        document.getElementById('quiz-max-score').innerHTML = quiz.result.totalQuestions.toString();
        document.getElementById('quiz-percent').innerHTML = quizScorePercent.toString();
        document.getElementById('skill-level').innerHTML = "Your skill level is " + skill.toString();
        document.getElementById('lessons').innerHTML = 'Given your progress, you should go to' + lessonLevel; 
        

        // Change background colour of results div according to score percent
        if (quizScorePercent >= 75) quizResultElement.style.backgroundColor = '#4caf50';
        else if (quizScorePercent >= 50) quizResultElement.style.backgroundColor = '#ffc107';
        else if (quizScorePercent >= 25) quizResultElement.style.backgroundColor = '#ff9800';
        else if (quizScorePercent >= 0) quizResultElement.style.backgroundColor = '#f44336';

        


        
        
        
        // Highlight questions according to whether they were correctly answered. The callback allows us to highlight/show the correct answer
        quiz.highlightResults(handleAnswers);
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
        'a',
        'a',
        'a',
        'a',
        'a',
        'a',
        'a',
        'b',
        'c',
        'a',
        'a',
        'a',
        'b',
        'a',
        'b'



    ]);
};


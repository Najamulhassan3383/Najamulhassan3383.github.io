'use strict';

let random = Math.trunc(Math.random() * 21);

let score = 20;
let high = 0;




document.querySelector('.check').addEventListener('click',
    function () {
        const guess = Number(document.querySelector('.guess').value);
        console.log(guess);
        if (!guess) {
            document.querySelector('.message').textContent = "👼No Number:";
        }
        else if (guess === random) {
            document.querySelector('.message').textContent = "Congrats, You have guessed Correctly ";
            document.querySelector('.number').textContent = random;
            document.querySelector('body').style.backgroundColor = '#60b347';
            document.querySelector('.number').style.width = '30rem';
            if (high > score) {
                document.querySelector('.highscore').textContent = high;
            } else {
                document.querySelector('.highscore').textContent = score;
                
            }


        }
        else if (guess > random) {
            document.querySelector('.message').textContent = "A little smaller ";

            if (score >= 1) {
                score = score - 1;
                document.querySelector('.score').textContent = score;
            }
            else {
                document.querySelector('.message').textContent = "you have lost."
            }
        }
        else if (guess < random) {
            document.querySelector('.message').textContent = "A little Higher ";
            if (score >= 1) {
                score = score - 1;
                document.querySelector('.score').textContent = score;
            }
            else {
                document.querySelector('.message').textContent = "you have lost."
            }
        }
    }
)


document.querySelector('.again').addEventListener('click', function () {
    random = Math.trunc(Math.random() * 21);
    score = 20;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.message').textContent = 'Start Guessing...';
    document.querySelector('.score').textContent = score;

    document.querySelector('body').style.backgroundColor = 'black';
    document.querySelector('.guess').value = '';

})



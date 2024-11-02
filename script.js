// generate secret number
let secretNumber = Math.floor(Math.random()* 20) + 1;
let message = document.querySelector('.message')
//getting checkBtw
let checkBtw = document.querySelector('.check')

//defining the score variable
let score = 20

//defining the score variable

checkBtw.addEventListener('click', function() {
    let userGuess = document.querySelector('.guess').value;
    if (userGuess) {
        if (userGuess === secretNumber) {

            //the secret key is revealed 
           document.querySelector('.number').textContent = secretNumber;


           //change background color to green
           document.querySelector('body').classList.toggle('victory')

           //display correct in the message
           message.textContent = 'correct'

           
        }else{
            if (userGuess > secretNumber) {
                message.textContent = 'To high'
            }else{
                message.textContent = 'To low'
            }
            // userGuess > secretNumber ? message.textContent = 'To high' : message.textContent = 'To low';

            //score should be reduced
            score--
            
            //new score should be displayed
            document.querySelector('.score').textContent = score;
        }
        
        
    }else {
        alert('input a number between 1 and 20 in the box')
    }

})
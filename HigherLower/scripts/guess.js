let userInput = '';
let choice = 0;
let num = 0;
let attempts = [];
function max() {
    while(true){
        userInput = prompt('What should the maximum number be? Integer only!', 20);
        choice = parseInt(userInput);
        
        if (typeof choice === 'number' && choice > 0) {
            //check if is float and round
            return Math.round(choice);
        }
        else if (typeof choice === 'number' && choice <= 0){
            alert('Error: Must be postive integer greater than zero.');
        }
        else {
            alert('Error: Input is not an number.');
        }
    }
}

function start(){
    max();
    attempts.length = 0;
    num = Math.floor(Math.random() * choice) + 1;
}

function result() {
    let guess = Number(document.getElementById('guess').value);
    if (attempts.includes(guess)){
        alert('Error: You have already guessed this number.');
        return;
    }
    attempts.push(guess);
    let message = document.getElementById('result');
    
    if(guess > num){
        message.innerText = 'No, try a lower number.';
        //result()
    }
    else if (guess < num){
        message.innerText = 'No, try a higher number.';
        //result()
    }
    else if (guess == num){
        let tries = attempts.length.toString()
        let guesses = attempts.join(', ')
        message.innerText = 'You got it! It took you ' + tries + ' tries and your guesses were ' + guesses +'.';
    }
    
}


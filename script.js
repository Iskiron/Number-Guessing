let min = Number(prompt(`Enter the minimum number:`));
let max = Number(prompt(`Enter the maximum number:`));
let count = 0;
let run = true;

let guess;

let random = Math.floor(Math.random() * (max - min)) + min;
console.log(guess, typeof guess, random, typeof random);

// document.body.addEventListener('keypress', (e) => {
//     if (e.key == 'q') {
//         console.log(e.key);
//       run = false;
//     }
//   });

while (run) {
    guess = Number(prompt(`Enter the guessed number:`));
    if (guess >= min && guess <= max) {
        if (guess > random) {
           alert(`Too HIGH!!`);
        }
        else if (guess < random) {
            alert(`Too LOW!!`);
        }
        else {
            alert(`Correct GUESS!!`);
            run = false;
        }
    }
    else {
        alert(`Guessed number is not valid!!`);
    }
}
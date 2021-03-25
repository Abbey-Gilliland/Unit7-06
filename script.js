// these blocks of code set up the variables. The number is made so that it is different every refresh.
let number = Math.random() * 20 + 1
number = parseInt(number)
let guess = 0
// This is a loop that only stops when the user correctly guesses the age. if the guess is lesser or more than the age, the user gets a message saying so, and the loop continues.
while (guess !== number) {
  guess = prompt('Guess a number between 1 and 20')
  guess = parseInt(guess)
  if (guess < number) {
    alert('Im older than that! Try again!')
  } else if (guess > number) {
    alert('Im younger than that! Try again!')
  } else {
    alert('You got it right! Refresh the page to try again!')
  }
} 
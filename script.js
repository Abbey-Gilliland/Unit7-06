let number = Math.random() * 20 + 1
number = parseInt(number)
let guess = 0

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
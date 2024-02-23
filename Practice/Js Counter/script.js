let counter = 0;
const counterValue = document.getElementById('counter-value');
const incrementBtn = document.getElementById('inc-btn');
const decrementBtn = document.getElementById('dec-btn');
const resetBtn = document.querySelector('#reset');

// Increment the value of counter
incrementBtn.addEventListener('click', () => {
	counter++;
	counterValue.innerHTML = counter;
});

// Decrement the value of counter
decrementBtn.addEventListener('click', () => {
	counter--;
	counterValue.innerHTML = counter;
});

// Reset the counter to zero
resetBtn.addEventListener('click', () => {
	counter = 0;
	counterValue.innerHTML = counter;
});
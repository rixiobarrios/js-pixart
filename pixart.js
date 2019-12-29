//Commit 1
// //When I click the "Set Color" button, it should change the color of the "brush" box to the color I specify in the input field.
// You can use document.querySelector(or another document method) to select the element, then add an event listener.

let brush = document.querySelector('.brush');
let setColor = document.querySelector('#set-color');
let colorField = document.querySelector('#color-field');

// HINT: You will notice that the page refreshes whenever you click the button.You need to prevent this from happening using a method you have not used before.Google "javascript event prevent default".You can also reference this portion of the Events & Callbacks lesson plan.

setColor.addEventListener('click', function(evt) {
    console.log('click');
    evt.preventDefault();
    brush.style.background = colorField.value;
});

//Commit 2
//The same thing should happen when I press the enter key from inside the input field

setColor.addEventListener('keyup', function(evt) {
    console.log('keyup');
    evt.preventDefault();
    brush.style.background = colorField.value;
});
//Commit 3
// Create 20 divs of the "square" class and append them to the body
// Hint: use.appendChild()

for (let i = 0; i < 8000; i++) {
    let newDiv = document.createElement('div');
    newDiv.classList.add('square');
    document.getElementsByTagName('body')[0].appendChild(newDiv);
}

//Commit 4
// Add functionality so that when I click on each "square", it changes the color of that individual square to "green"
// Hint: either add the event listener while creating the squares, or listen for events on the body element

let square = document.getElementsByClassName('square');
let colors = ['green'];
for (i = 0; i < square.length; i++) {
    let temp = square[i];
    temp.addEventListener('mouseover', function(evt) {
        evt.target.style.background = colorField.value;
    });
}

//Commit 5
//Modify your code so that when I click on each "square", it changes to the color I set using my input instead of "green" every time.

//Commit 6
//Modify the CSS so that the "square" class has a height and width of 10px and a margin of 0.
// Modify your code so that you are creating 8000 divs instead of 20.
// Change the event that changes your box colors from 'click' to 'mouseover'
// Paint a picture! */

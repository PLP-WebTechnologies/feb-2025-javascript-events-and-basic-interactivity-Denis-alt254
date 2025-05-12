  // JavaScript to handle the button click event
  document.getElementById('alertButton').addEventListener('click', function() {
    alert('Button was clicked!');
});
// JavaScript to handle the button click event
document.getElementById('alertButton').addEventListener('click', function() {
    alert('Button was clicked!');
});
// Additional JavaScript can be added here
// Example: Change the background color of the body on button click
document.getElementById('alertButton').addEventListener('click', function() {
    document.body.style.backgroundColor = '#e0f7fa';
});
// Example: Log a message to the console
console.log('Button was clicked!');
// Example: Change the text of the button after clicking
document.getElementById('alertButton').addEventListener('click', function() {
    this.textContent = 'Clicked!';
});
// Example: Change the text color of the paragraph
document.querySelector('p').addEventListener('click', function() {
    this.style.color = '#ff5722';
});
// Example: Change the font size of the heading
document.querySelector('h1').addEventListener('click', function() {
    this.style.fontSize = '2.5em';
}); 
// Example: Change the background color of the footer
document.querySelector('footer').addEventListener('click', function() {
    this.style.backgroundColor = '#444';
});
document.getElementById('alertButton').addEventListener('click', function() {
    alert('Button was clicked!');
});

document.getElementById('changeContentButton').addEventListener('click', function() {
    document.getElementById('dynamicContent').innerHTML = '<p>The content has been changed!</p>';
});
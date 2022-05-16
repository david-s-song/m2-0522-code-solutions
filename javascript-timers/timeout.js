var $greet = document.querySelector('.message');
document.addEventListener('load', greeting);

function greeting(event) {
  $greet.textContent = 'Hello, There';
}

setTimeout(greeting, 2.0 * 1000);

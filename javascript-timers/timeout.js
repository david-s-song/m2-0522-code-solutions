var $greet = document.querySelector('.message');

function greeting() {
  $greet.textContent = 'Hello, There';
}

setTimeout(greeting, 2.0 * 1000);

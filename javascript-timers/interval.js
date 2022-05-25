var $display = document.querySelector('.countdown-display');
var count = 4;

function countDown(event) {
  count--;
  if (count > 0) {
    $display.textContent = count;
  } else {
    $display.textContent = '~Earth Beeeelooowww Us~';
    clearInterval(timer);
  }
}

var timer = setInterval(countDown, 2000);

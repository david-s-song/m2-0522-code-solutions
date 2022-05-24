var $images = document.querySelectorAll('.image');
var $dots = document.querySelectorAll('.dot');

var currentIndex = 1;
switchImage(currentIndex);

function switchImage(event) {
  if (event > $images.length) {
    currentIndex = 1;
  }
  if (event < 1) {
    currentIndex = $images.length;
  }
  for (var i = 0; i < $images.length; i++) {
    $images[i].className = 'image hidden';
  }
  for (var j = 0; j < $dots.length; j++) {
    $dots[j].className = $dots[j].className.replace('current-dot-black', 'dot-white');
  }
  $images[currentIndex - 1].className = 'image current-image';
  $dots[currentIndex - 1].className = 'dot current-dot-black';
}

function nextImage(event) {
  switchImage(currentIndex += 1);
}

function prevImage(event) {
  switchImage(currentIndex += -1);
}

var $nextButton = document.querySelector('#right');
$nextButton.addEventListener('click', nextImage);

var $prevButton = document.querySelector('#left');
$prevButton.addEventListener('click', prevImage);

var $firstDot = document.querySelector('#first');
var $secondDot = document.querySelector('#second');
var $thirdDot = document.querySelector('#third');
var $fourthDot = document.querySelector('#fourth');
var $fifthDot = document.querySelector('#fifth');

$firstDot.addEventListener('click', function () {
  switchImage(currentIndex = 1);
});
$secondDot.addEventListener('click', function () {
  switchImage(currentIndex = 2);
});
$thirdDot.addEventListener('click', function () {
  switchImage(currentIndex = 3);
});
$fourthDot.addEventListener('click', function () {
  switchImage(currentIndex = 4);
});
$fifthDot.addEventListener('click', function () {
  switchImage(currentIndex = 5);
});

var autoIndex = 0;
autoImages();

function autoImages() {
  for (var i = 0; i < $images.length; i++) {
    $images[i].className = 'image hidden';
  }
  autoIndex++;
  if (autoIndex > $images.length) {
    autoIndex = 1;
  }
  $images[autoIndex - 1].className = 'image current-image';
  setTimeout(autoImages, 3000);
}

var dotIndex = 0;
autoDots();

function autoDots() {
  for (var i = 0; i < $dots.length; i++) {
    $dots[i].className = 'dot-white';
  }
  dotIndex++;
  if (dotIndex > $dots.length) {
    dotIndex = 1;
  }
  $dots[dotIndex - 1].className = 'current-dot-black';
  setTimeout(autoDots, 3000);
}

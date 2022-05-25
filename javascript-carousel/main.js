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
  autoImages(autoIndex = 0);
  autoDots(dotIndex = 0);
});
$secondDot.addEventListener('click', function () {
  switchImage(currentIndex = 2);
  autoImages(autoIndex = 1);
  autoDots(dotIndex = 1);
});
$thirdDot.addEventListener('click', function () {
  switchImage(currentIndex = 3);
  autoImages(autoIndex = 2);
  autoDots(dotIndex = 2);
});
$fourthDot.addEventListener('click', function () {
  switchImage(currentIndex = 4);
  autoImages(autoIndex = 3);
  autoDots(dotIndex = 3);
});
$fifthDot.addEventListener('click', function () {
  switchImage(currentIndex = 5);
  autoImages(autoIndex = 4);
  autoDots(dotIndex = 4);
});

var autoIndex = 0;
setInterval(autoImages, 3000);

function autoImages() {
  for (var i = 0; i < $images.length; i++) {
    $images[i].className = 'image hidden';
  }
  autoIndex++;
  if (autoIndex > $images.length) {
    autoIndex = 1;
  }
  $images[autoIndex - 1].className = 'image current-image';
}

var dotIndex = 0;
setInterval(autoDots, 3000);

function autoDots() {
  for (var i = 0; i < $dots.length; i++) {
    $dots[i].className = 'dot-white';
  }
  dotIndex++;
  if (dotIndex > $dots.length) {
    dotIndex = 1;
  }
  $dots[dotIndex - 1].className = 'current-dot-black';
}

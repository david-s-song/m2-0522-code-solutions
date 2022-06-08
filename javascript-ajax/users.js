var $userList = document.querySelector('#user-list');

var xRequest = new XMLHttpRequest();
xRequest.open('GET', 'https://jsonplaceholder.typicode.com/users');
xRequest.responseType = 'json';
xRequest.addEventListener('load', function () {
  console.log(xRequest.status);
  console.log(xRequest.response);
  for (var i = 0; i < xRequest.response.length; i++) {
    var $userObjects = document.createElement('li');
    $userObjects.textContent = xRequest.response[i].name;
    $userList.appendChild($userObjects);
  }
});

xRequest.send();

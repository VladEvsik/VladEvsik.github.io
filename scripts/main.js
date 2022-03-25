var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'image/Static.png') {
        myImage.setAttribute ('src','image/Static2.png');
    } else {
        myImage.setAttribute ('src', 'image/Static.png');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = myName + ', это мой статик в FFXIV';
}

if(!localStorage.getItem('name')) {
    setUserName();
} else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = storedName + ', это мой статик FFXIV';
}

myButton.onclick = function() {
    setUserName();
}

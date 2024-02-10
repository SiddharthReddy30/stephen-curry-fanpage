const myImage = document.querySelector('img');

myImage.onclick = ()=>{
    const mySrc=myImage.getAttribute('src');
    (mySrc === 'images/sc.jpg') ? myImage.setAttribute('src','images/sc2.jpg') : myImage.setAttribute('src','images/sc.jpg');
}
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName(){
    const myName = prompt('Please enter your name');
    localStorage.setItem('name',myName);
    myHeading.textContent=`Welcome to SC fanpage ${storedName}`;
}

myButton.onclick=()=>{
    setUserName();
}

if(!localStorage.getItem('name')){
    setUserName();
}else{
    const storedName = localStorage.getItem('name');
    myHeading.textContent = `Welcome back to SC fanpage ${storedName}`;
}
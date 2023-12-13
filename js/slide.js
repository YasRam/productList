var myEelement = document.querySelector('img');
var myTitle = document.querySelector('h1');

console.log('nnn');
document.body.addEventListener('click', function(){
    myEelement.src='src/img/1.jpeg'
    console.log(myEelement.src);
})

document.body.addEventListener('click', function(){
    myTitle.classList='bg-danger'
})
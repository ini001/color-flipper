const colors =["green","red", "rgba(133,122,200)","#f15025"];
const btn = document.getElementById('btn');
const color =document.querySelector(".color");

btn.addEventListener('click', function(){
    // get random number btw 1 - 3 
    const randomNumber =getRandomNumber();
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
});

// function that will generate a value btw 1-3
function getRandomNumber(){
    return Math.floor(Math.random()*colors.length)
}
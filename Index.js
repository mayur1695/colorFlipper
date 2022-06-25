const colors=['Red','Green','Pink','Yellow','Purple','Orange','Violet'];

const btn=document.getElementById('btn');
const color=document.querySelector('.color');

btn.addEventListener('click',function(params) {
    const randomNumber=getRandomNumber();
    document.body.style.backgroundColor=colors[randomNumber];
    color.textContent=colors[randomNumber]
})

function getRandomNumber() {
    return Math.floor(Math.random()*colors.length);
}
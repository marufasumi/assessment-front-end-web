

document.querySelector('button').addEventListener('click',rFunction)

function rFunction() {
    const resturants = ["pizzahut","Dominos","FarhatSweets","BismillahKabab","Filippa's","Black Rock"];

    const random = Math.floor(Math.random() * resturants.length);
    console.log(random, resturants[random]);
}

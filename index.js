const randomcolor = function () {
    const hex = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
}

let interval;

const changecolor = function () {
    interval = setInterval(function () {
        document.body.style.backgroundColor = randomcolor();
    },2000);
}

const stopcolor = function () {
    clearInterval(interval);
}

document.querySelector("#btn2").addEventListener('click', stopcolor);

document.querySelector("#btn1").addEventListener('click', changecolor);

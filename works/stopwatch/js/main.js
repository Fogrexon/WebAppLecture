let count = 0;
let interval;

const show = (text) => {
    const countElement = document.getElementById("count");
    countElement.innerText = "カウント: " + count;
}
const counting = () => {
    count++;
    show(count);
}
const countUp = () => {
    interval = setInterval(counting,1000);
}
const countStop = () => {
    clearInterval(interval);
}
const countReset = () => {
    clearInterval(interval);
    count = 0;
    show(count);
}
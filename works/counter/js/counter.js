let count = 0;

const show = (text) => {
    const countElement = document.getElementById("count");
    countElement.innerText = "回数: " + count;
}
const countUp = () => {
    count++;
    show(count);
}
const countReset = () => {
    count = 0;
    show(count);
}
let count = 0;
const countUp = () => {
    count++;
    const countElement = document.getElementById("count");
    countElement.innerText = "回数: " + count;
}
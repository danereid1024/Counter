let value = 0;
document.getElementById("value").addEventListener("click", increase);

function increase() {
    value++;
    document.getElementById("value").innerHTML = value;
}

function decrease() {
    value--;
    document.getElementById("value").innerHTML = value;
}

function reset() {
    value = 0;
    document.getElementById("value").innerHTML = value;
}
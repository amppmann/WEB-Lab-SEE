function handleClick(click) {
    let firstNumber = Number(document.getElementById("firstNumber").value);
    let secondNumber = Number(document.getElementById("secondNumber").value);
    let res = 0;
    if (click.id === "add") {
        res = firstNumber + secondNumber;
        document.getElementById("result").value = res;
    } else if (click.id === "sub") {
        res = firstNumber - secondNumber;
        document.getElementById("result").value = res;
    } else if (click.id === "mul") {
        res = firstNumber * secondNumber;
        document.getElementById("result").value = res;
    } else if (click.id === "div") {
        res = firstNumber / secondNumber;
        document.getElementById("result").value = res;
    } else if (click.id === "per") {
        res = (firstNumber / secondNumber) * 100;
        document.getElementById("result").value = res + " %";

    } else {
        res = Math.pow(firstNumber, secondNumber);
        document.getElementById("result").value = res;

    }
}


const fibonacci = function (num) {
    if (num == 0) {
        return 0;
    } else if (num < 0) {
        return "OOPS";
    } else if (typeof num == "string") {
        return fibonacci(parseInt(num))
    } else {
        let firstNum = 1;
        let secondNum = 1;
        for (let x = 1; x <= num - 2; x++) {
            temp = secondNum;
            secondNum = firstNum + secondNum;
            firstNum = temp;
        }

        return secondNum
    }

};

// Do not edit below this line
module.exports = fibonacci;

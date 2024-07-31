const factorial = (number) => {
    if(number <= 1) {
        return 1;
    }
    return factorial(number - 1) * number;
}

const number = 5;
const result = factorial(number);
console.log(result);
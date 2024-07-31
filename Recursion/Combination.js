// Combination nCr = n! / (r! * ( n - r )!)

const factorial = (number) => {
    if(number <= 1) {
        return 1;
    }
    return factorial(number - 1) * number;
}

const combination = (n, r) => {
    return ( factorial(n) / (factorial(r) * factorial(n - r)) );
}

let n = 4;
let r = 2;
let nCr = combination(n, r);
console.log(nCr);
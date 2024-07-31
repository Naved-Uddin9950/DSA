// Function to return the power of the number
const power = (base, powr) => {
    if(power === 1) {
        return base;
    }
    let res = 1;
    for(let i = 1; i<=powr; i++) {
        res *= base;
    }
    return res;
}

// Function to return the square of the number
const square = (number) => {
    return number * number;
}

// Function to return the cube of the number
const cube = (number) => {
    return number * number * number;
}

let number = 2;
let powr = 4;

let power_result = power(number, powr);
let square_result = square(number);
let cube_result = cube(number);

console.log(power_result);
console.log(square_result);
console.log(cube_result);
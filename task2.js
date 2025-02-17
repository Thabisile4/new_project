function hasThree(num1, num2) {
    if (num1 === 3 || num2 === 3) {
        const total = num1 + num2;
        if (total.toString().includes('3')) {
            return true;
        }
    }
    return false;
}

console.log(hasThree(3, 5));  // true
console.log(hasThree(1, 2));  // false
console.log(hasThree(3, 10)); // true
console.log(hasThree(1, 5));  // false

export {hasThree};

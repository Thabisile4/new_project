function hasThree(num1, num2) {
    // Check if either number is 3
    if (num1 === 3 || num2 === 3) {
        // Calculate the sum of the two numbers
        const total = num1 + num2;
        // Check if the sum contains a '3'
        if (total.toString().includes('3')) {
            return true;
        }
    }
    return false;
}

// Example usage
console.log(hasThree(3, 5));  // true
console.log(hasThree(1, 2));  // false
console.log(hasThree(3, 10)); // true
console.log(hasThree(1, 5));  // false
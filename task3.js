function is_sixty_five(num1, num2) {
    // Check if either number is exactly 65 or if their sum equals 65
    return num1 === 65 || num2 === 65 || (num1 + num2 === 65);
}

// Example usage
console.log(is_sixty_five(65, 10));  // true
console.log(is_sixty_five(30, 35));  // true
console.log(is_sixty_five(20, 20));  // false
console.log(is_sixty_five(10, 55));  // true
console.log(is_sixty_five(50, 15));  // false

// Export the function so it can be used in other modules
export {isSixtyFive};

function multiples(n) {
    let sum = 0;

    // Loop through numbers below n
    for (let i = 1; i < n; i++) {
        // Check if i is a multiple of 3 or 5
        if (i % 3 === 0 || i % 5 === 0) {
            sum += i; // Add to the sum
        }
    }

    console.log(sum); // Print the result
}


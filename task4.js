function square(n) {
    // Loop to print n rows
    for (let i = 0; i < n; i++) {
        // Print a single row of n hashes
        console.log('#'.repeat(n));
    }
}

// Example usage
square(2); // prints: 
// ##
// ##

square(4); // prints:
// ####
// ####
// ####
// ####
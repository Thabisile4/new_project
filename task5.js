function triangle(n) {
    if (n > 0) {
        // Print triangle for positive n
        for (let i = 1; i <= n; i++) {
            console.log('#'.repeat(i));
        }
    } else {
        // Print upside-down triangle for negative n
        for (let i = -n; i > 0; i--) {
            console.log('#'.repeat(i));
        }
    }
}

// Example usage
triangle(2);   // prints: 
// #
// ##
triangle(4);   // prints: 
// #
// ##
// ###
// ####
triangle(-2);  // prints: 
// ##
// #
triangle(-4);  // prints: 
// ####
// ###
// ##
// #
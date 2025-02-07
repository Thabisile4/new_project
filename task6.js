function longest(strings) {
    // Find the length of the longest string(s)
    let maxLength = 0;
    const longestStrings = [];

    // Loop through the array to determine the maximum length
    for (const str of strings) {
        if (str.length > maxLength) {
            maxLength = str.length; // Update max length
            longestStrings.length = 0; // Clear previous longest strings
            longestStrings.push(str); // Add new longest string
        } else if (str.length === maxLength) {
            longestStrings.push(str); // Add to longest strings if same length
        }
    }

    // Print each longest string on a new line
    for (const longestStr of longestStrings) {
        console.log(longestStr);
    }
}

// Example usage
longest(["the", "quick", "brown", "fox", "ate", "my", "chickens"]); // prints: chickens
longest(["once", "upon", "a", "time"]); // prints: once\nupon\ntime
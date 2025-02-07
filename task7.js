function combine(arr1, arr2) {
    const combined = [];
    const maxLength = Math.max(arr1.length, arr2.length);

    // Loop through the maximum length of the two arrays
    for (let i = 0; i < maxLength; i++) {
        // Add element from arr1 if it exists
        if (i < arr1.length) {
            combined.push(arr1[i]);
        }
        // Add element from arr2 if it exists
        if (i < arr2.length) {
            combined.push(arr2[i]);
        }
    }

    return combined; // Return the combined array
}

// Example usage
console.log(combine([11, 22, 33, 45], [1, 2, 3])); // prints: [11, 1, 22, 2, 33, 3, 45]
console.log(combine([12, 4, 2], [1, 5, 3])); // prints: [12, 1, 4, 5, 2, 3]
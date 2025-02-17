function combine(arr1, arr2) {
    const combined = [];
    const maxLength = Math.max(arr1.length, arr2.length);

    for (let i = 0; i < maxLength; i++) {
        if (i < arr1.length) {
            combined.push(arr1[i]);
        }
        if (i < arr2.length) {
            combined.push(arr2[i]);
        }
    }

    return combined;
}

console.log(combine([11, 22, 33, 45], [1, 2, 3])); 
console.log(combine([12, 4, 2], [1, 5, 3]));

module.exports = {combine};

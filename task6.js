function longest(strings) {
    let maxLength = 0;
    const longestStrings = [];

    for (const str of strings) {
        if (str.length > maxLength) {
            maxLength = str.length;
            longestStrings.length = 0;
            longestStrings.push(str);
        } else if (str.length === maxLength) {
            longestStrings.push(str);
        }
    }

    longestStrings.forEach(str => console.log(str));
}

longest(["the", "quick", "brown", "fox", "ate", "my", "chickens"]);
longest(["once", "upon", "a", "time"]);

module.exports = {longest};

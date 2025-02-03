// Export the function using CommonJS syntax (for Node.js)
function task2(name = "Friend") {
    console.log(`Hello ${name}!`);
}

module.exports = { task2 };

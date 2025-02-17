function square(n) {
    for (let i = 0; i < n; i++) {
        console.log('#'.repeat(n));
    }
}

square(2); 
square(4);

module.exports = {square};

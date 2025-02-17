function triangle(n) {
    if (n > 0) {
        for (let i = 1; i <= n; i++) {
            console.log('#'.repeat(i));
        }
    } else {
        for (let i = -n; i > 0; i--) {
            console.log('#'.repeat(i));
        }
    }
}

triangle(2);  
triangle(4);  
triangle(-2);  
triangle(-4);

module.exports = {triangle};

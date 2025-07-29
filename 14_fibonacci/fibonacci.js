const fibonacci = function(num) {
    if (num < 0) return "OOPS";
    if (num == 0) return 0;
    let fibnminus1 = 0;
    let fibn = 1;
    for (let i = 1; i < num; i++) {
        let curr = fibnminus1 + fibn;
        fibnminus1 = fibn;
        fibn = curr;
    }
    return fibn;
};

// Do not edit below this line
module.exports = fibonacci;

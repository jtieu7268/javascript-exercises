const sumAll = function(lower, upper) {
    if (typeof(lower) !== "number" || 
        typeof(upper) !== "number" ||
        lower < 0 ||
        upper < 0 ||
        !Number.isInteger(lower) ||
        !Number.isInteger(upper)) 
        return 'ERROR';
    if (upper < lower) [lower, upper] = [upper, lower];
    let sum = 0;
    for (let i = lower; i <= upper; i++) {
        sum += i;
    }
    return sum;
}
// Do not edit below this line
module.exports = sumAll;

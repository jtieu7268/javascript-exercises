const leapYears = function(year) {
    /* brute force logic
    if (year % 4 === 0) {
        if (year % 100 === 0) {
            if (year % 400 === 0) {
                return true;
            }
            return false;
        }
        return true;
    } else {
        return false;
    }
    */

    // readable version
    const isYearDivisibleByFour = year % 4 === 0;
    const isYearDivisibleByOneHundred = year % 100 === 0;
    const isYearDivisibleByFourHundred = year % 400 === 0;

    return isYearDivisibleByFour && !isYearDivisibleByOneHundred || isYearDivisibleByFourHundred;

};

// Do not edit below this line
module.exports = leapYears;

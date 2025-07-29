const palindromes = function (str) {
    cleanstr = str.toLowerCase().replaceAll(/[^a-z0-9]/g, "");
    return cleanstr === cleanstr.split('').reverse().join('');
}
// Do not edit below this line
module.exports = palindromes;

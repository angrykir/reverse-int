module.exports = function reverse(n) {
    const str = String(n);
    const strReverse = str.split('').reverse().join('')
    return parseInt(strReverse, 10);
}
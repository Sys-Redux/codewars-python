// Take a positive parameter 'num' & return its multiplicative persistence,
// which is the number of times you must multiply the digits in 'num'
// until you reach a single digit.
export function persistence(num: number): number {
    let count = 0;
    while (num >= 10) {
        num = num
            .toString()
            .split('')
            .map(Number)
            .reduce((a, b) => a * b, 1);
        count++;
    }
    return count;
}
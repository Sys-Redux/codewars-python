// [1, 1, 1, 3, 5, 9, 17, 31, ...]
// Generate the first n elements of a Tribonacci sequence, where each element
// is the sum of the preceding three.
export function tribonacci([a, b, c]: [number, number, number], n: number): number[] {
    const result: number[] = [];
    for (let i = 0; i < n; i++) {
        result.push(a);
        [a, b, c] = [b, c, a + b + c];
    }
    return result;
}
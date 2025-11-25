// ==================================================================
// Roman Numerals Helper
// ==================================================================
class RomanNumerals {
    static toRoman(num) {
        // Array of values w/ their roman numeral counterparts
        const values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
        const numerals = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];

        let result = '';

        // For each value-numeral pair
        for (let i = 0; i < values.length; i++) {
            // While the number is greater than or equal to current value
            while (num >= values[i]) {
                result += numerals[i]; // Add corresponding numeral
                num -= values[i]; // Subtract the value
            }
        }
        return result;
    }

    static fromRoman(str) {
        const romanMap = {
            'I': 1,
            'V': 5,
            'X': 10,
            'L': 50,
            'C': 100,
            'D': 500,
            'M': 1000
        };

        let result = 0;

        for (let i = 0; i < str.length; i++) {
            const current = romanMap[str[i]];
            const next = romanMap[str[i + 1]];

            // If the next numeral is larger, subtract current from result
            if (next && current < next) {
                result -= current;
            } else {
                result += current;
            }
        }
        return result;
    }
}

// =================================================================
// Adding Big Numbers
// =================================================================
function add(a, b) {
    // Input: two strings representing big numbers
    // Output: string representing their sum
    let result = '';
    let carry = 0;

    // Pad the shorter string with leading zeros
    const maxLength = Math.max(a.length, b.length);
    a = a.padStart(maxLength, '0');
    b = b.padStart(maxLength, '0');

    // Add from the last digit to the first
    for (let i = maxLength - 1; i >= 0; i--) {
        const sum = parseInt(a[i]) + parseInt(b[i]) + carry;
        carry = Math.floor(sum / 10);
        result = (sum % 10).toString() + result;
    }

    // If there's a carry left, add it to the front
    if (carry) {
        result = carry.toString() + result;
    }

    return result;
}

// =================================================================
// How Many Ways Can You Make A Number?
// =================================================================
function sum(num) {
    // Input: integer num
    // Output: number of ways to express num as a sum of positive integers
    const ways = new Array(num + 1).fill(0);
    ways[0] = 1; // Base case: One way to make 0

    for (let i = 1; i <= num; i++) {
        // For each target sum, calculate how many new ways we can make it
        // by adding the current i to smaller partitions
        for (let j = i; j <= num; j++) {
            // How many ways can we make (j - i)?
            // Each of those ways, plus adding i, gives a new way to make j
            ways[j] += ways[j - i];
        }
    }

    return ways[num];
}
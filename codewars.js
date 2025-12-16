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

// ==================================================================
// Conway's Game of Life - Unlimited Edition
// ==================================================================
// Game Rules:
    // 1. Any live cell with fewer than two live neighbours dies (underpopulation).
    // 2. Any live cell with two or three live neighbours lives on to the next generation.
    // 3. Any live cell with more than three live neighbours dies (overpopulation).
    // 4. Any dead cell with exactly three live neighbours becomes a live cell (reproduction).
function getGeneration(cells, generations) {
    // Count live neighbors for a cell
    function countNeighbors(grid, row, col) {
        let count = 0;
        for (let i = -1; i <= 1; i++) {
            for (let j = -1; j <= 1; j++) {
                if (i === 0 && j === 0) continue; // Skip the cell
                const newRow = row + i;
                const newCol = col + j;
                if (newRow >= 0 && newRow < grid.length && newCol >= 0 && newCol < grid[0].length) {
                    count += grid[newRow][newCol];
                }
            }
        }
        return count;
    }
    // Expand grid by 1 cell in all directions
    function expandGrid(grid) {
        const width = grid[0].length + 2;
        const expanded = [new Array(width).fill(0)];
        for (const row of grid) {
            expanded.push([0, ...row, 0]);
        }
        expanded.push(new Array(width).fill(0));
        return expanded;
    }
    // Trim empty rows/colimns from edges
    function trimGrid(grid) {
        // Remove empty top rows
        while (grid.length > 0 && grid[0].every(cell => cell === 0)) {
            grid.shift();
        }
        // Remove empty bottom rows
        while (grid.length > 0 && grid[grid.length - 1].every(cell => cell === 0)) {
            grid.pop();
        }
        if (grid.length === 0) return [[]]; // All cells are dead

        // First & last empty cells (left/right of grid)
        let minCol = grid[0].length, maxCol = -1;
        for (const row of grid) {
            for (let col = 0; col < row.length; col++) {
                if (row[col] === 1) {
                    minCol = Math.min(minCol, col);
                    maxCol = Math.max(maxCol, col);
                }
            }
        }
        if (maxCol === -1) return [[]]; // All cells are dead
        return grid.map(row => row.slice(minCol, maxCol + 1));
    }
    // Main Simulation loop
    let grid = cells;
    for (let gen = 0; gen < generations; gen++) {
        grid = expandGrid(grid);
        const next = grid.map(row => [...row]); // Deep copy
        for (let i = 0; i < grid.length; i++) {
            for (let j = 0; j < grid[0].length; j++) {
                const neighbors = countNeighbors(grid, i, j);
                if (grid[i][j] === 1) {
                    // Live cell rules
                    next[i][j] = (neighbors === 2 || neighbors === 3) ? 1 : 0;
                } else {
                    // Dead cell rules
                    next[i][j] = (neighbors === 3) ? 1 : 0;
                }
            }
        }
        grid = trimGrid(next);
    }
    return grid;
}
// ==================================================================
// Palindrome For Your Dome
// ==================================================================
function palindrome(string) {
    // Normalize the string: remove non-alphanumeric and convert to lowercase
    const normalized = string.toLowerCase().replace(/[^a-z0-9]/g, '');
    const reversed = normalized.split('').reverse().join('');
    return normalized === reversed;
}
// ==================================================================
// Decimals or Groups of Thousands??
// ==================================================================
// Example test
// (["1,234.34", "1.324,2", "14"], "2,572.54")
// (["4.44", "8", "14,56"], "27.00")
function sumUpNumbers(arr) {
    let total = 0;
    for (const str of arr) {
        // Count occurrences of each separator
        const commaCount = (str.match(/,/g) || []).length;
        const dotCount = (str.match(/\./g) || []).length;
        const commaIndex = str.lastIndexOf(',');
        const dotIndex = str.lastIndexOf('.');
        let normalized;

        if (commaCount > 0 && dotCount > 0) {
            // Both present: the LAST one is the decimal separator
            if (commaIndex > dotIndex) {
                normalized = str.replace(/\./g, '').replace(',', '.');
            } else {
                normalized = str.replace(/,/g, '');
            }
        } else if (commaCount > 1) {
            // Multiple commas = thousands separators (no decimal)
            normalized = str.replace(/,/g, '');
        } else if (dotCount > 1) {
            // Multiple dots = thousands separators (no decimal)
            normalized = str.replace(/\./g, '');
        } else if (commaCount === 1) {
            const digitsAfter = str.length - commaIndex - 1;
            if (digitsAfter === 3) {
                normalized = str.replace(',', '');
            } else {
                normalized = str.replace(',', '.');
            }
        } else if (dotCount === 1) {
            const digitsAfter = str.length - dotIndex - 1;
            if (digitsAfter === 3) {
                normalized = str.replace('.', '');
            } else {
                normalized = str;
            }
        } else {
            normalized = str;
        }
        total += parseFloat(normalized);
    }
    return total.toLocaleString('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });
}
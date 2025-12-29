# ------------ Even or odd ------------
def even_or_odd(number):
    if number % 2 == 0:
        return "Even"
    else:
        return "Odd"
        

# ------------ Convert a Number to a String ------------
def number_to_string(num):
    return str(num)
    

# ------------ Vowel Count ------------
def get_count(sentence):
    vowels = "aeiou"
    count = 0
    for char in sentence:
        if char in vowels:
            count += 1
    return count
    

# ------------ Simple Pig Latin ------------
def pig_it(text):
    def convert_word(word):
        # Separate letters from punctuation
        letters = ''
        punctuation = ''
        
        # Extract letters from the beginning
        for char in word:
            if char.isalpha():
                letters += char
            else:
                # Once we hit non-letter, rest is punctuation
                punctuation = word[len(letters):]
                break
        
        # If no letters found, return as is
        if not letters:
            return word
        
        # Move first letter to end and add "ay"
        converted = letters[1:] + letters[0] + "ay"
        return converted + punctuation
    
    # Split text by spaces, convert each word, and rejoin
    words = text.split()
    converted_words = [convert_word(word) for word in words]
    return ' '.join(converted_words)


# ------------ int32 to ipv4 ------------
# An IPv4 address has 4 octets (e.g., 192.168.1.1)
# Each octet is 8 bits (0-255)
# A 32-bit number can represent all 4 octets combined

def int32_to_ip(int32):
    # Extract each octet by bit shifting and masking
    octet1 = (int32 >> 24) & 255
    octet2 = (int32 >> 16) & 255
    octet3 = (int32 >> 8) & 255
    octet4 = int32 & 255
    
    # Return formatted IP address
    return f"{octet1}.{octet2}.{octet3}.{octet4}"


# ------------ Strip Comments ------------
def strip_comments(strng, markers):
    if not strng:
        return strng
    
    lines = strng.split('\n')
    result = []
    
    for line in lines:
        # Find the earliest occurrence of any marker
        earliest_pos = len(line)
        
        for marker in markers:
            pos = line.find(marker)
            if pos != -1 and pos < earliest_pos:
                earliest_pos = pos
        
        # Strip everything from the marker onwards and remove trailing whitespace
        cleaned_line = line[:earliest_pos].rstrip()
        result.append(cleaned_line)
    
    return '\n'.join(result)


# ------------ Validate Sudoku with Size NxN ------------
const Sudoku = function(data) {

    // Private Methods

    // Check if array contains all numbers from 1 to N exactly once
    const isValidGroup = function(group) {
        const n = data.length;
        const seen = new Set();

        for (let i = 0; i < group.length; i++) {
            const num = group[i];

            // Check if number is in valid range (1 to N)
            if (num < 1 || num > n || !Number.isInteger(num)) {
                return false;
            }

            // Check for duplicates
            if (seen.has(num)) {
                return false;
            }
            seen.add(num);
        }

        // Must have exactly N unique numbers
        return seen.size === n;
    };

    // Check if the grid structure is valid NxN
    const isValidStructure = function() {
        const n = data.length;

        // Check if N > 0 and √N is an integer
        if (n <= 0 || !Number.isInteger(Math.sqrt(n))) {
            return false;
        }

        // Check if all rows have N columns
        for (let i = 0; i < n; i++) {
            if (!Array.isArray(data[i]) || data[i].length !== n) {
                return false;
            }
        }

        return true;
    };

    // Public Methods

    return {
        isValid: function() {
            // Check basic structure first
            if (!Array.isArray(data) || !isValidStructure()) {
                return false;
            }

            const n = data.length;
            const subgridSize = Math.sqrt(n);

            // Check all rows
            for (let i = 0; i < n; i++) {
                if (!isValidGroup(data[i])) {
                    return false;
                }
            }

            // Check all columns
            for (let j = 0; j < n; j++) {
                const column = [];
                for (let i = 0; i < n; i++) {
                    column.push(data[i][j]);
                }
                if (!isValidGroup(column)) {
                    return false;
                }
            }

            // Check all subgrids
            for (let startRow = 0; startRow < n; startRow += subgridSize) {
                for (let startCol = 0; startCol < n; startCol += subgridSize) {
                    const subgrid = [];

                    for (let i = startRow; i < startRow + subgridSize; i++) {
                        for (let j = startCol; j < startCol + subgridSize; j++) {
                            subgrid.push(data[i][j]);
                        }
                    }

                    if (!isValidGroup(subgrid)) {
                        return false;
                    }
                }
            }

            return true;
        }
    }
}

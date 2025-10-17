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

// Convert a given string to Jaden Case, where the first letter of each word is capitalized.
String.prototype.toJadenCase = function() {
    return this.split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}

interface String {
    toJadenCase(): string;
}
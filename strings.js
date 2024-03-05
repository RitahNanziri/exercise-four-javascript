// Define the string methods as functions directly
function substr(str, start, length) {
    return str.substr(start, length);
}

function replace(str, oldStr, newStr) {
    return str.replace(oldStr, newStr);
}

function replaceAll(str, oldStr, newStr) {
    return str.replaceAll(oldStr, newStr);
}

function toUpperCase(str) {
    return str.toUpperCase();
}

function toLowerCase(str) {
    return str.toLowerCase();
}

function concat(str1, str2) {
    return str1.concat(str2);
}

function trim(str) {
    return str.trim();
}

function trimStart(str) {
    return str.trimStart();
}

function trimEnd(str) {
    return str.trimEnd();
}

function padStart(str, length, padString) {
    return str.padStart(length, padString);
}

function padEnd(str, length, padString) {
    return str.padEnd(length, padString);
}

function charAt(str, index) {
    return str.charAt(index);
}

function charCodeAt(str, index) {
    return str.charCodeAt(index);
}

function split(str, separator) {
    return str.split(separator);
}

// Example usage of string methods
const exampleString = "   ritah, nanziri!   ";

console.log(substr(exampleString, 0, 5)); 
console.log(replace(exampleString, "nanziri", "codegal"));
console.log(replaceAll(exampleString, "a", "x")); 
console.log(toUpperCase(exampleString));   
console.log(toLowerCase(exampleString));  
console.log(concat("ritah", ", ", "nanziri!"));
console.log(trim(exampleString)); 
console.log(trimStart(exampleString));  
console.log(trimEnd(exampleString));

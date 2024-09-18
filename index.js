// 1) Function to calculate the difference between two numbers
function calculateDifference(num1, num2) {
    return num1 - num2;
}

// 2) Function to check if a number is odd
function isOdd(number) {
    return number % 2 !== 0;
}

// 3) Function to find the minimum number in an array
function findMin(numbers) {
    return Math.min(...numbers);
}

// 4) Function to filter out even numbers from an array
function filterEvenNumbers(numbers) {
    return numbers.filter(num => num % 2 === 0);
}

// 5) Function to sort an array in descending order
function sortArrayDescending(numbers) {
    return numbers.slice().sort((a, b) => b - a);
}

// 6) Function to lowercase the first letter of a string
function lowercaseFirstLetter(str) {
    if (str.length === 0) return str; // Handle empty string case
    return str.charAt(0).toLowerCase() + str.slice(1);
}

// 7) Function to count the number of vowels in a string
function countVowels(str) {
    const vowels = 'aeiouAEIOU';
    let count = 0;
    for (let char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
}

// 8) Function to find the average of numbers in an array
function findAverage(numbers) {
    const total = numbers.reduce((sum, num) => sum + num, 0);
    return total / numbers.length;
}

function findLargest(num1, num2, num3) {
    return (num1 > num2) 
        ? (num1 > num3 ? num1 : num3) 
        : (num2 > num3 ? num2 : num3);
}

// Test cases
console.log(findLargest(45, 78, 33));  // Output: 78
console.log(findLargest(10, 5, 20));   // Output: 20
console.log(findLargest(100, 200, 150)); // Output: 200
console.log(findLargest(7, 7, 7));    // Output: 7
console.log(findLargest(-5, -2, -8)); // Output: -2

function checkSeniorDiscount(age) {
    return age <= 0 ? "Invalid Age" : (age >= 60 ? "Eligible for Senior Discount" : "Not Eligible for Senior Discount");
}

// Test cases
console.log(checkSeniorDiscount(65));
console.log(checkSeniorDiscount(-1));
console.log(checkSeniorDiscount(45));
console.log(checkSeniorDiscount(60));
console.log(checkSeniorDiscount(0));

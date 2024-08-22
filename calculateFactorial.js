function calculateFactorial(number) {
    if (number < 0) return"Please, use a positive number!";
    if (number === 0 || number === 1) return 1;
    return number * calculateFactorial(number - 1);
}
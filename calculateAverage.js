function calculateAverage(numbersArray) {
    const sum = numbersArray.reduce((sum, currentElement) => sum + currentElement);
    const average = sum / numbersArray.length;
    return average;
}
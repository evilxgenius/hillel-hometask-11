function positiveElementsOf(array) {
    return array.filter(num => num > 0);
}

function negativeElementsOf(array) {
    return array.filter(mun => mun < 0);
}

function minElementOf(array) {
    return array.reduce((memo, num) => num < memo ? num : memo);
}

function maxElementOf(array) {
    return array.reduce((memo, num) => num > memo ? num : memo);
}

function evenElementsOf(array) {
    return array.filter(num => num % 2 === 0);
}

function oddElementsOf(array) {
    return array.filter(num => num % 2 !== 0);
}

function sumOfElementsOf(array) {
    return array.reduce((memo, num) => memo + num, 0)
}

function productOfElementsOf(array) {
    return array.reduce((memo, num) => memo * num, 1)
}

function nullifyArray(array, ...except) {
    return array.map(num => except.includes(num) ? num : 0);
}

(() => {
    const initArray = [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];
    const positiveElements = positiveElementsOf(initArray);
    const negativeElements = negativeElementsOf(initArray);
    const evenPositiveElements = evenElementsOf(positiveElements);
    const oddPositiveElements = oddElementsOf(positiveElements);
    const minElement = minElementOf(initArray);
    const maxElement = maxElementOf(initArray);
    const separator = '\n------------';

    console.log('initial array:', '[', initArray.toString(), ']', separator);

    // - Знайти суму та кількість позитивних елементів.
    console.log('Sum of positive elements ->', sumOfElementsOf(positiveElements));
    console.log('Number of positive elements ->', positiveElements.length, separator);

    // - Знайти мінімальний елемент масиву та його порядковий номер.
    console.log(
        'Min element ->', minElement,
        `(index of element in initial array -> ${initArray.indexOf(minElement)})`,
        separator
    );

    // - Знайти максимальний елемент масиву та його порядковий номер.
    console.log(
        'Max element ->', maxElement,
        `(index of element in initial array -> ${initArray.indexOf(maxElement)})`,
        separator
    );

    // - Визначити кількість негативних елементів.
    console.log('Number of negative elements ->', negativeElements.length, separator);

    // - Знайти кількість непарних позитивних елементів.
    console.log('Number of odd positive elements ->', oddPositiveElements.length, separator);

    // - Знайти кількість парних позитивних елементів.
    console.log('Number of even positive elements ->', evenPositiveElements.length, separator);

    // - Знайти суму парних позитивних елементів.
    console.log('Sum of even positive elements ->', sumOfElementsOf(evenPositiveElements), separator);

    // - Знайти суму непарних позитивних елементів.
    console.log('Sum of odd positive elements ->', sumOfElementsOf(oddPositiveElements), separator);

    // - Знайти добуток позитивних елементів.
    console.log('Product of positive elements ->', BigInt(productOfElementsOf(positiveElements)), separator);

    // - Знайти найбільший серед елементів масиву, остальні обнулити.
    console.log('We keep only max element of array ->', '[',  nullifyArray(initArray, maxElement).toString(), ']');
})();

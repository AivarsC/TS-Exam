"use strict";
console.group('Užduotys');
{
    console.group('1. Aprašykite funkcijoms ir kintamiesiems tipus');
    {
        const numbers = [1, -8, -6, 7, 5, 1];
        function addPositiveNumbers(arr) {
            const positiveNumberReducer = (sum, num) => (num > 0 ? sum + num : sum);
            return arr.reduce(positiveNumberReducer, 0);
        }
        console.log({
            numbers,
            sumOfPositiveNumbers: addPositiveNumbers(numbers),
        });
    }
    console.groupEnd();
    console.group('2. Sukurkite ir tipais aprašykite funkciją, kuri sudarytų string\'ą iš string\'ų masyvo elementų pirmųjų raidžių');
    {
        const acronymReducer = (acronym, word) => acronym + word[0];
        const createAcronym = (words) => {
            const acronym = words.reduce(acronymReducer, '');
            return acronym;
        };
        const dataSamples = [
            ['Lietuviškas', 'Nepriklausomas', 'Kanalas'],
            ['Lietuvos', 'Respublikos', 'Televizija'],
            ['Loughing', 'Out', 'Loud'],
        ];
        dataSamples.forEach((words) => console.log(`[${words.join(', ')}] -> ${createAcronym(words)}`));
    }
    console.groupEnd();
    console.group('3. Sukurkite ir tipais aprašykite funkciją, kuri saudaugintų visus number masyvo skaičius');
    {
        const numbersProductReducer = (product, factor) => product * factor;
        const multiplyNumbers = (numbers) => numbers.reduce(numbersProductReducer, 1);
        const samples = [
            [1, 7, 8],
            [98, 74, 5, 0],
            [17, 10, 5],
        ];
        const answerObjectReducer = (answerObject, numbers) => {
            const functionName = multiplyNumbers.name;
            const functionArgsString = `[${numbers.join(', ')}]`;
            const key = `${functionName}(${functionArgsString})`;
            const value = multiplyNumbers(numbers);
            answerObject[key] = value;
            return answerObject;
        };
        const formatAnswerObject = (samples) => {
            const initialValue = {};
            const result = samples.reduce(answerObjectReducer, initialValue);
            return result;
        };
        const answerObject = formatAnswerObject(samples);
        console.log(answerObject);
    }
    console.groupEnd();
}
console.groupEnd();
//# sourceMappingURL=main.js.map
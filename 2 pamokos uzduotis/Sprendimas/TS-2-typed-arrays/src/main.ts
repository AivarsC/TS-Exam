console.group('Užduotys');
{
  console.group('1. Aprašykite funkcijoms ir kintamiesiems tipus');
  {
    const numbers: number[] = [1, -8, -6, 7, 5, 1];

    function addPositiveNumbers(arr: number[]) {
      const positiveNumberReducer = (sum: number, num: number) => (num > 0 ? sum + num : sum);

      return arr.reduce<number>(positiveNumberReducer, 0);
    }

    console.log({
      numbers,
      sumOfPositiveNumbers: addPositiveNumbers(numbers),
    });
  }
  console.groupEnd();

  console.group('2. Sukurkite ir tipais aprašykite funkciją, kuri sudarytų string\'ą iš string\'ų masyvo elementų pirmųjų raidžių');
  {
    /*
      Pvz.:
       * ['Lietuviškas', 'Nepriklausomas', 'Kanalas'] -> LNK
       * ['Lietuvos', 'Respublikos', 'Televizija'] -> LRT
       * ['Loughing', 'Out', 'Loud'] -> LOL
    */
    const acronymReducer = (acronym: string, word: string) => acronym + word[0];

    const createAcronym = (words: string[]): string => {
      const acronym = words.reduce<string>(acronymReducer, '');
      return acronym;
    };

    const dataSamples: string[][] = [
      ['Lietuviškas', 'Nepriklausomas', 'Kanalas'],
      ['Lietuvos', 'Respublikos', 'Televizija'],
      ['Loughing', 'Out', 'Loud'],
    ];

    dataSamples.forEach((words: string[]) => console.log(`[${words.join(', ')}] -> ${createAcronym(words)}`));
  }
  console.groupEnd();

  console.group('3. Sukurkite ir tipais aprašykite funkciją, kuri saudaugintų visus number masyvo skaičius');
  {
    /*
      Pvz.:
       * [1, 7, 8] -> 56
       * [98, 74, 5, 0] -> 0
       * [17, 10, 5] -> 850
    */
    // Sprendimas
    type NumbersMultiplyReducer = (product: number, factor: number) => number;
    type MultiplyNumbers = (numbers: Array<number>) => number;

    const numbersProductReducer: NumbersMultiplyReducer = (product, factor) => product * factor;

    const multiplyNumbers: MultiplyNumbers = (numbers) => numbers.reduce<number>(numbersProductReducer, 1);

    // Spausdinimas - ŠI SPAUSDINIMO DALIS TIK DĖL ĮDOMUMO, TIEMS KAM BUVO PER LENGVA(kolkas...)
    type AnswerObject = {
      [key: string]: number,
    };

    type FormatAnswerObject = (samples: Array<Array<number>>) => AnswerObject;

    type AnswerObjectReducer = (answerObject: AnswerObject, numbers: Array<number>) => AnswerObject;

    const samples: Array<Array<number>> = [
      [1, 7, 8],
      [98, 74, 5, 0],
      [17, 10, 5],
    ];

    const answerObjectReducer: AnswerObjectReducer = (answerObject, numbers) => {
      const functionName: string = multiplyNumbers.name;
      const functionArgsString: string = `[${numbers.join(', ')}]`;
      const key: string = `${functionName}(${functionArgsString})`;
      const value: number = multiplyNumbers(numbers);
      answerObject[key] = value;
      return answerObject;
    };

    const formatAnswerObject: FormatAnswerObject = (samples) => {
      const initialValue: AnswerObject = {};
      const result: AnswerObject = samples.reduce<AnswerObject>(answerObjectReducer, initialValue);
      return result;
    };

    const answerObject: AnswerObject = formatAnswerObject(samples);

    console.log(answerObject);
  }
  console.groupEnd();
}
console.groupEnd();



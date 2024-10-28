// - Con este objeto imprime por consola una pequeña historia del usuario, "Me llamo John Doe, tengo 35 años..."

const user = {
  name: 'John',
  surname: 'Doe',
  age: 25,
  hobbies: ['leer', 'tocar la guitarra', 'pasear con las cabras'],
  pets: [
    { name: 'Max', type: 'perro' },
    { name: 'Whiskers', type: 'gato' },
  ],
  address: {
    street: '123 Main Street',
    city: 'Gotham',
    state: 'California',
    postalCode: '12345',
    country: 'USA',
  },
  phone: '+1234567890',
  email: 'johndoe@example.com',
  occupation: 'Ingeniero de software',
  education: 'Master en ciencia de datos',
};
console.log(
  `Me llamo ${user.name} ${user.surname}, tengo ${user.age} años de edad, me gusta ${user.hobbies}. Tengo dos mascotas, un ${user.pets[0].type} llamado ${user.pets[0].name} y un ${user.pets[1].type} llamado ${user.pets[1].name}. Vivo en la calle ${user.address.street}, en la ciudad ${user.address.city} de ${user.address.state}, con el código postal ${user.address.postalCode} en ${user.address.country}. Mi número de teléfono es ${user.phone} y mi email es ${user.email}. Trabajo de ${user.occupation} porque estudié un ${user.education}`
);

// - Dado este objeto, rellena los 5 arrays con el array de numbers.
// número + 2, número x 2, número / 2, números pares y números impares.

const dataNumbers = {
  numbers: [10, 32, 31, 67, 9, 2, 51, 4],
  firstFloor: {
    secondFloor: {
      numbersPlus2: [], // número + 2
    },
    thirdFloor: {
      numbersDouble: [], // número * 2
    },
  },
  fourthFloor: {
    numbersDividedBy2: [], // número / 2
  },
  fifthFloor: {
    onlyEven: [], // Números pares
    onlyOdd: [], //   Números impares
  },
};

for (let i = 0; i < dataNumbers.numbers.length; i++) {
  dataNumbers.firstFloor.secondFloor.numbersPlus2.push(
    dataNumbers.numbers[i] + 2
  );
  dataNumbers.firstFloor.thirdFloor.numbersDouble.push(
    dataNumbers.numbers[i] * 2
  );
  dataNumbers.fourthFloor.numbersDividedBy2.push(dataNumbers.numbers[i] / 2);
  if (dataNumbers.numbers[i] % 2 === 0) {
    dataNumbers.fifthFloor.onlyEven.push(dataNumbers.numbers[i]);
  } else {
    dataNumbers.fifthFloor.onlyOdd.push(dataNumbers.numbers[i]);
  }
}
console.log(
  dataNumbers.firstFloor.secondFloor.numbersPlus2,
  dataNumbers.firstFloor.thirdFloor.numbersDouble,
  dataNumbers.fourthFloor.numbersDividedBy2,
  dataNumbers.fifthFloor.onlyEven,
  dataNumbers.fifthFloor.onlyOdd
);

// // - Crea una función que reciba una frase, por ejemplo "Si no estudias acabarás como Enrique", y rellena el objeto con valores que te pide. Revisa la documentación de los strings si hay algo que no sabes obtener.
// // https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String

const dataStrings = {
  firstFloor: {
    vowels: [], // Vocales
  },
  secondFloor: {
    consonants: [], // Consonantes
  },

  fourthFloor: {
    asciiCode: [], // Ascii code de cada letra
  },
  fifthFloor: {
    //Cada palabra de la frase será una posición del array
    wordsInUppercase: [], // Palabras de la frase en mayúsculas
    wordsInLowercase: [], // Palabras de la frase en minúsculas
  },
  sixthFloor: {
    // En este nivel codificarás la frase para que sea un secreto, será útil que investigues sobre el método replaceAll de los strings y sobre el uso de expresiones regulares dentro de este método.

    // REGLAS DE CODIFICACIÓN
    // Si el caracter es una vocal, la sustituirás por un número siendo a-1 e-2 i-3 o-4 u-5
    // Si el caracter es una consonante deberás sustituirlo por su consonante anterior, si fuera una c, sería una b y si fuera una p sería una ñ y si fuera una v sería una t
    // Si el caracter es un espacio lo sustituirás por una letra random del alfabeto
    secretCode: '',
  },
};

const fillsTheObjectWithValues = (phraseO) => {
  const vowels = 'aeiouáéíóú';
  const consonants = 'bcdfghjklmnñpqrstvwxyz';
  const abc = 'abcdefghijklmnñopqrstuvwxyz';
  const phrase = phraseO.toLowerCase();
  let phrase1 = '';

  for (let i = 0; i < phrase.length; i++) {
    if (vowels.includes(phrase[i])) {
      dataStrings.firstFloor.vowels.push(phrase[i]);
    } else {
      if (phrase[i] !== ' ') {
        dataStrings.secondFloor.consonants.push(phrase[i]);
      }
    }
    dataStrings.fourthFloor.asciiCode.push(phraseO.charCodeAt(i));
  }
  const words = phraseO.split(' ');
  for (let i = 0; i < words.length; i++) {
    dataStrings.fifthFloor.wordsInUppercase.push(words[i].toUpperCase());
    dataStrings.fifthFloor.wordsInLowercase.push(words[i].toLowerCase());
  }
  for (let i = 0; i < phraseO.length; i++) {
    dataStrings.sixthFloor.secretCode = phraseO
      .replaceAll('a', 1)
      .replaceAll('e', 2)
      .replaceAll('i', 3)
      .replaceAll('o', 4)
      .replaceAll('u', 5)
      .replaceAll('á', 1)
      .replaceAll('é', 2)
      .replaceAll('í', 3)
      .replaceAll('ó', 4)
      .replaceAll('ú', 5)
      .replaceAll('A', 1)
      .replaceAll('E', 2)
      .replaceAll('I', 3)
      .replaceAll('O', 4)
      .replaceAll('U', 5);

    if (consonants.includes(dataStrings.sixthFloor.secretCode.charAt(i))) {
      if (dataStrings.sixthFloor.secretCode[i] === 'b') {
        phrase1 += consonants.charAt(consonants.length - 1);
      } else {
        phrase1 += consonants.charAt(
          consonants.indexOf(dataStrings.sixthFloor.secretCode[i]) - 1
        );
      }
    } else {
      if (dataStrings.sixthFloor.secretCode[i] === ' ') {
        phrase1 += abc.charAt(Math.floor(Math.random() * abc.length));
      } else {
        phrase1 += dataStrings.sixthFloor.secretCode[i];
      }
    }
  }
  dataStrings.sixthFloor.secretCode = phrase1;
};

fillsTheObjectWithValues('Si no estudias acabarás como Enrique');
console.log(
  dataStrings.firstFloor.vowels,
  dataStrings.secondFloor.consonants,
  dataStrings.fourthFloor.asciiCode,
  dataStrings.fifthFloor.wordsInUppercase,
  dataStrings.fifthFloor.wordsInLowercase,
  dataStrings.sixthFloor.secretCode
);

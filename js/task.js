// function changeEven(numbers, value) {
//   const newArray = numbers.map((element) =>  element % 2 !== 0 ? element : element += value );

//   return newArray;
// }

// console.log(changeEven([2, 8, 3, 7, 4, 6], 10)); //[12, 18, 3, 7, 14, 16]

// const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];

// const evenNumbers = numbers.filter((number) => number % 2 === 0);
// const oddNumbers = numbers.filter((number) => number % 2 !== 0);

// console.log(evenNumbers)
// console.log(oddNumbers);

// const getUsersWithAge = (users, minAge, maxAge) => {

//     return users.filter((userAge) => userAge.age >= minAge && userAge.age <= maxAge)

//   };

//   console.table(getUsersWithAge([
//     {
//       name: "Moore Hensley",
//       email: "moorehensley@indexia.com",
//       eyeColor: "blue",
//       friends: ["Sharron Pace"],
//       isActive: false,
//       balance: 2811,
//       gender: "male",
//       age: 37
//     },
//     {
//       name: "Sharlene Bush",
//       email: "sharlenebush@tubesys.com",
//       eyeColor: "blue",
//       friends: ["Briana Decker", "Sharron Pace"],
//       isActive: true,
//       balance: 3821,
//       gender: "female",
//       age: 34
//     },
//     {
//       name: "Ross Vazquez",
//       email: "rossvazquez@xinware.com",
//       eyeColor: "green",
//       friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//       isActive: false,
//       balance: 3793,
//       gender: "male",
//       age: 24
//     },
//     {
//       name: "Elma Head",
//       email: "elmahead@omatom.com",
//       eyeColor: "green",
//       friends: ["Goldie Gentry", "Aisha Tran"],
//       isActive: true,
//       balance: 2278,
//       gender: "female",
//       age: 21
//     },
//     {
//       name: "Carey Barr",
//       email: "careybarr@nurali.com",
//       eyeColor: "blue",
//       friends: ["Jordan Sampson", "Eddie Strong"],
//       isActive: true,
//       balance: 3951,
//       gender: "male",
//       age: 27
//     },
//     {
//       name: "Blackburn Dotson",
//       email: "blackburndotson@furnigeer.com",
//       eyeColor: "brown",
//       friends: ["Jacklyn Lucas", "Linda Chapman"],
//       isActive: false,
//       balance: 1498,
//       gender: "male",
//       age: 38
//     },
//     {
//       name: "Sheree Anthony",
//       email: "shereeanthony@kog.com",
//       eyeColor: "brown",
//       friends: ["Goldie Gentry", "Briana Decker"],
//       isActive: true,
//       balance: 2764,
//       gender: "female",
//       age: 39
//     }
//   ], 20, 30))

//TODO:============task-04=========================
//Напишіть функцію each(array, callback), яка
//першим параметром приймає масив, а другим - функцію,
//Яка застосовується до кожного елементу масиву.
//Функція each повинна повернути новий масив, елементами
//якого будуть результати виклику callback
//callback функції повинна множити елементи на 2
//! Використай анонімну колбєк функцію

// const numbers = [3, 5, 6, 34, 8, 83, 12, 34];

// function each(array, callback) {
//   const newArray = [];

//   array.forEach((element) => {
//     newArray.push(callback(element));
//   });

//   return newArray;
// }
// const result = each(numbers, (num) => num * 2);
// console.log(result);

// const numbers = [1, 2, 3, 4, 5];

// function transFormArray(arr, callback) {
//   const newArray = [];

//   arr.forEach((number) => {
//     newArray.push(callback(number));
//   });
//   return newArray
// }

// const transformNumber = (number) => {
//   return Math.floor(Math.random() * number) + 1;
// }
// const result = transFormArray(numbers, transformNumber)
// console.log(result)


//TODO:============task-06=========================
// Напишіть функцію, яка приймає масив і колбек-функцію. Функція повинна повернути перший елемент масиву,
//який задовольняє умову, визначену в колбек - функції. Якщо такого елементу немає, функція
// повинна повернути null. Також необхідно написати 2 різні колбеки. При використанні першого колбеку має
// повертатись перше парне число. При використанні другого - має повертатись перше слово у масиві, що починається з літери
// "O" у будь - якому реєстрі.

// const numbers = [1, 3, 6, 7, 9, 20];
// const words = ['apple', 'banana', 'orange', 'pear'];

// const fimdElement = (arr, callback) => {
//   let result = null
//   arr.forEach(element => {
//     if(callback(element) && result === null){
//        result = element
//     }
//   })
//  return  result
// }

// const isIven = number =>  number % 2 === 0 
// const startWithO = string => string.toLowerCase().startsWith('o')

// console.log(fimdElement(words, startWithO))
// console.log(fimdElement(numbers, isIven))
//! Зауважте, що використання методу forEach не дозволяє прямо вийти з циклу
//  після знаходження першого підходящого елемента. 
// Тому ми використовуємо додаткову змінну result, щоб зберегти перший 
// підходящий елемент та перевіряти, чи він вже був 
// знайдений. forEach нічого не повертає, а просто перебирає масив!

// const players = {
//     mango: 1270,
//     poly: 468,
//     ajax: 710,
//     kiwi: 244,
//   };
//   const playtimes = Object.values(players); // [1270, 468, 710, 244]
  
//   const totalPlayTime = playtimes.reduce((previouseValue, number) =>{
//    return previouseValue += number
//   }, 0) ;
  
//   console.log(totalPlayTime)
//   const averagePlayTime = totalPlayTime / playtimes.length;
  

//   const players = [
//     { name: "Mango", playtime: 1270, gamesPlayed: 4 },
//     { name: "Poly", playtime: 469, gamesPlayed: 2 },
//     { name: "Ajax", playtime: 690, gamesPlayed: 3 },
//     { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
//   ];
  

//   const totalAveragePlaytimePerGame = players.readuce((totalGame, plaer) => {
//     console.log(plaer)
//    return plaer.playtime / totalGame
//   }, 0 );
  
//   console.log(totalAveragePlaytimePerGame)

const books = [
    {
      title: "The Last Kingdom",
      author: "Bernard Cornwell",
      rating: 8.38,
    },
    {
      title: "Beside Still Waters",
      author: "Robert Sheckley",
      rating: 8.51,
    },
    {
      title: "The Dream of a Ridiculous Man",
      author: "Fyodor Dostoevsky",
      rating: 7.75,
    },
    { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
    {
      title: "The Dreams in the Witch House",
      author: "Howard Lovecraft",
      rating: 8.67,
    },
  ];
  const MIN_BOOK_RATING = 8;
  
  const names = books.filter(book => book.rating >= MIN_BOOK_RATING)
  .map(({author}) => author)
  .toSorted((a, b) => a.localeCompare(b))
  console.table(names)
  
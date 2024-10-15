// todo Напишіть функцію updateObject, яка приймає об'єкт і повертає новий об'єкт без вказаних параметрів
// Результат, що очікується ({a: 1, b: 2, c: 3}, 'b', 'a') => {c: 3}

// function updateObject(obj, ...keys) {
//   const result = {};

//   //   console.log(keys);

//   for (const key in obj) {
//     // console.log(key);
//     if (keys.includes(key)) {
//       continue;
//     } else {
//       result[key] = obj[key];
//     }
//   }
//   return result;
// }

// const result = updateObject({ a: 1, b: 2, c: 3 }, "b", "a");
// console.log(result); // { c: 3 }

// Напишіть функцію, що прибирає значення, які повторюються
// Очікується["a",1, 2, "b",3, 1, 2,"a"] => ["a", 1, 2 ,"b" , 3]
function updateObject(array) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    // console.log(array);
    if (!result.includes(array[i])) {
      //   console.log(array[i]);
      result.push(array[i]);
    }
  }
  return result;
}
console.log(updateObject(["a", 1, 2, "b", 3, 1, 2, "a"]));

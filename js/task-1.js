// todo Напиши скрипт, який для об'єкта user послідовно:
//   - додасть поле mood зі значенням 'happy'
//   - замінить hobby на 'skydiving'
//   - замінить значення premium на false
//   - виводить вміст об'єкта user у форматі ключ:значення,
// використовуючи Object.keys() і for...of

const user = {
  name: 'John',
  age: 20,
  hobby: 'tennis',
  premium: true,
}
user.mood = 'happy';
user.hobby = 'skydiving';
user.premium = false;

const arrayKeys = Object.keys(user);
// console.log(arrayKeys);

 for (const element of arrayKeys) {
  console.log(`${element}: ${user[element]}`);
   
 }

// Напишіть функцію, яка повертає новий масив без вказаних значень.Використовуйте примітиви
// Очікується [1, 2, 3, 1, 2] без [1, 2] => [3]

function foo(arr1, arr2) {
    const newArr = [];

    for(const element of arr1) {
        if(!arr2.includes(element)) {
            newArr.push(element);
        }
    }
    return newArr;
}

console.log(foo([1, 2, 3, 1, 2], [1, 2]));

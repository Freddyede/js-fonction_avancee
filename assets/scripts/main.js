// Given an array of names of people but mixing lower case and upper case letters, you will have to:
// - Create a function that contains the logic to refactor those names, so it converts a name like `anTHoNY` to `Anthony`.
// - A function that accepts two parameters: an array and a callback function that is in charge of refactoring all items inside that array
// - Return the original array but with all names properly typed


const capitalize = (value) => {
    let arrayString = [];
    let response = "";
    for (let i = 0; i < value.length; i++) {
        if(i === 0) {
            arrayString.push(value[i].toUpperCase());
        } else {
            arrayString.push(value[i].toLowerCase());
        }
    }
    response = arrayString.join("");
    return response;
}

const renameArrayValues = (array) => {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
         newArray.push(capitalize(array[i]));
    }
    return newArray;
}

const exerciseRenameArrayValues = (array, callBackFunction) => callBackFunction(array);

const people = ['JoHn', 'ChrISTiana', 'anThoNY', 'MARia', 'jaMeS', 'MIChaEl', 'jeNNIFeR'];
console.log(exerciseRenameArrayValues(people, renameArrayValues));
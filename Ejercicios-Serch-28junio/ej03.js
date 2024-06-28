console.log("holix3");

const array = [1, 2, 3, 4];

console.log(array);


const suma = array.reduce((total, num) => {
     return total + num
});

console.log("Suma:",suma);

const producto = array.reduce((total, num) => {
     return total * num
});

console.log("Producto:",producto);


// Bir array, objeyi parçalamak için kullanırız.

const arr = [1, 2, 3]
const arr2 = [4, 5, 6]

const [x, y, z] = arr // x, y, z değişkenlerine karşılığındaki değerleri atanır.

const obje = {
    name: "utku", surname: "kaya", age: 31
}

Object.freeze(obje) // Bu satırdan sonra herhangi bir key değiştirilemez.
// const { name } = obje

const { name: sq } = obje // name propertisini sq değişkeni olarak aldık. 

// spread operatorü
const { name , ...rest} = obje // spread operatörü ile kalan verileri alabiliriz. 

arr.push(...arr2)
const arr3 = [ ...arr, ...arr2]

// ** spread operatorü yeni bir referans ataması sağlar.**
// Tip değişince referans da değişir.
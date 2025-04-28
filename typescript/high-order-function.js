// callback metotlar

const getName = (callback, params = []) => {
    if (params.length > 0) {
        return callback(params)
    }
}

getName((params) => console.log(params), ["utku", "kaya", 1])

// callback ile aldığın parametreleri manipule ettikten, bir logicten geçirdikten sonra return
// etmemizi sağlar.

// Higher order function
// Parametre olarak fonksiyon alır.

const hoc = (fn) => {
    return (...args) => (fn(...args))} // ...args aldığı fonksiyonun yani burada fn' nin 
    // parametreleridir.

const calc = (a, b) => a + b

const z = hoc(calc())

console.log(z(1,1)) // -- 2 yazar.

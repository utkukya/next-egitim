// Belli bir sıraya göre işlemleri yaptırmamızı sağlar. İşlemleri sıraya alırız.
// Promiselerin başına await koyarsak değişkenden erişmemizi sağlar.

const x = await fetch()
fetch("").then().catch()

const getName = async () => {
    return fetch("")
}

getName().then().catch()

const getSurname = async () => {
    return new Promise((resolve, reject) => {
        const success = true
        if (true){
            resolve("kaya")
        } else {
            reject("error")
        }
    })
}

getSurname()
    .then(result => console.log(result))
    .catch(err => console.log(err))


(async () => {
    await Promise.all([getName(), getSurname()]) // bu şekilde sırayla da çalıştırabiliriz.
    await Promise.race([getName(), getSurname()]) // en hızlı hangisi ise ilk onu çalıştırır.
    await getName()
    await getSurname()
})


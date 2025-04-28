const arr = ["a", "b", "c", 1, 2, 3]

const objArr = [
    { name: "utku", surname: "kaya" },
    { name: "emre", surname: "dundar" }
]

const x = [
    {
        id: 1,
        persons: [
            { name: "utku", surname: "kaya" },
            { name: "emre", surname: "dundar" }
        ]
    }
]

x.flatMap(item => item.persons.flatMap(item => item)) // dizi içerisindeki diziyi tek bir dizi olarak almak istersek kullanabiliriz.

for (i = 0; i < arr.length; i++) {
    const item = arr[i]
    console.log(typeof item)
}

// map foreach den daha performanslı
// foreach ya da map
arr.map((item) => {
    if (typeof item === "string") {
        console.log(typeof item)
    }
})

objArr.map((item) => {
    console.log(Object.keys(item))
    Object.entries(item).map((key, value) => console.log(key, typeof value))
})

objArr.filter((x) => x.name.includes("u")) // bulunan nesneleri döner.

objArr.find(x => x.name.includes("a")) // ilk bulduğu değeri döndürür. Yeni bir referans döndürmez.

objArr.findIndex(x => x.name.includes("a")) // index bulmak için. yoksa -1 döner. 

// Reduce

const arr3 = [1, 1, 2, 3, 4, 5, 6]
arr3.reduce((acc, value, index) => acc + value, 0)
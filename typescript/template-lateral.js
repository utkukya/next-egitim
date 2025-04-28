const getStr = (values, ...params) => {
    console.log(values, "values")
    console.log(params, "params")
}

const _name = "Utku"
const surname = "Kaya"

getStr`Benim Adım ${_name} ${surname}`

// Bu şekilde metot çağırabiliyoruz. string kısımlar values içerisinde diğer kısımlar parametre olarak alınır.
// **() şeklinde metot çağrıldığında direk olarak parametre geçmiş oluruz. `` ile methoda template vermiş oluruz.
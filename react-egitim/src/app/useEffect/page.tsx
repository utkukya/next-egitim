import { useEffect, useState } from "react"

const Page = () => {
    const [name, setName] = useState<string>("...")
    const [person, setPerson] = useState<Partial<{ name: string, surname: string }>>({})
    const [title, setTitle] = useState<string>("")

    // Sayfa yüklemeyi tamamladıktan sonra çalışır. Dependency [] iken.
    // Dependency verilmezse sayfadaki Virtual DOM da herhangi bir değişiklik olduğunda tetiklenir.
    useEffect(() => {

    }, [])


    // Sadece name değeri değiştiği zaman tetiklenir. State initial bir değer aldığı için ilk yüklenmede de mutlaka bir
    // kere tetiklenir.
    // State initial değer verilmese bile undefined değer alacağından dolayı yine de tetiklenme olur.
    useEffect(() => {

    }, [name])

    // obje boş kontrolunu bu şekilde yapabiliriz. undefined kontrolü yapıyoruz.
    useEffect(() => {
        if (Object.keys(person).length === 0) return;
        console.log("person")
    }, [person])


    // bileşenden çıktığımızda hafızasına alır. Sonra tekrar bileşene girdiğimizde tetiklenir.
    // Sayfaya girdiğimizde temizleme işlemlemlerini yapmak için kullanılır.
    // Örneğin event işlemlerini temizleme gibi. Bu işleme Clean Up denir.
    useEffect(() => {
        return () => {
            console.log("bileşenden çıktık")
        }
    }, [])

    // useEffect içerisinde asynchron işlem yapamıyoruz.
    useEffect(() => {
        (async (x: string, y: string) => {
            await handleChange()
        })("x", "y") // ilk parantez metot ikinci parantez execute edilmesi.
    }, [])

    const handleChange = async () => {
        return new Promise((resolve, reject) => {
            if (1 == 1) {
                resolve("Başarılı")
            } else {
                reject("Başarısız")
            }
        })
    }


    return
    <>
        <input onChange={(e) => {
            const { name, value } = e.target

            setPerson((prev) => ({ ...prev, name: value }))
        }} />
    </>
}

export default Page;
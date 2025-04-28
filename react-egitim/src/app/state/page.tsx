'use client' // burada useState çalıştıracaksak componenti client olarak işaretlememiz gerekiyor.

import { useEffect, useState } from "react";
import Login from "./login";

type Person = {
    name: string;
    surname: string;
}

const _persons: Person[] = [
    { name: "x", surname: "y" },
    { name: "c", surname: "z" },
    { name: "d", surname: "a" },
    { name: "f", surname: "b" },
]

// js içerisinde useState kullanmak bir adım geriden getirir. o yüzden kullanmamak gerekir.
// render edilen jsx içerisinde kullan.
// ** state sadece returnde kullan **//

const Page = () => {
    const [name, setName] = useState<string>("...")
    // react virtual dom üzerindeki değişiklikleri takip ederek re-render edilir.
    // direk mutate edilmez stateler.
    //Değişiklikleri anlayabilmesi için useState hooku üzerinden çalışılır.

    // getter, setter
    const [person, setPerson] = useState<Partial<{ name: string, surname: string }> | undefined>({});
    const [persons, setPersons] = useState<Partial<{ name: string, surname: string }>[]>([]);

    useEffect(() => {
        // setPerson({ name: "Utku", surname: "Kaya" })
        setPerson((prev) => ({ ...prev, surname: "xx" }))
        // _persons.map((person) => {
        //     setPersons((prev) => [...prev, person])
        // })
        _persons.map((person) => (
            setPersons((prev) => {
                if (prev.some((x) => x.name === "z")) return prev

                return [...prev, person]
            })
        ))
    }, [])

    // person? gelmesinin sebebi undefined olarak tanımladığımızdan dolayı.
    return (
        <>
            {person?.name ?? "-"}
            {persons.map(person => (<div>{person.name}</div>))}
            <Login name={setName} />
            <h1>{name}</h1>
        </>
    )
}

export default Page;
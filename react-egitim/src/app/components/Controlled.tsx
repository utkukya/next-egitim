// sürekli dom üzerinde işlem yapıyorsak sürekli state işlemleri yaptığımız componentlerdir.

import { ChangeEvent, useState } from "react";
import { useFormik } from 'formik'
import { object, string, number, date, InferType } from 'yup'

type Person = {
    name: string;
    surname: string;
}

const Controlled = () => {
    const [person, setPerson] = useState<Partial<Person>>({})

    const validationSchema = object({
        name: string().required().min(3),
        surname: string().required().max(10)
    })

    //hooks
    const { handleSubmit, handleChange, values, errors } = useFormik({
        initialValues: {
            name: "",
            surname: ""
        },
        onSubmit: (values) => {
            console.log(values)
        },
        validationSchema
    })

    console.log(errors)

    const handleChangeManuel = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        // setPerson({ [name]: value }) // [name] bu kullanım dinamik bir kullanıma işaret eder. Doğru çalışmaz.
        // Doğru çalışması için callback ile çalışmak gerekir. Çünkü burada yani js içerisinde state bir adım geriden gelir.
        setPerson((prev) => ({ ...prev, [name]: value }))
    }

    return (
        <form onSubmit={handleSubmit}>
            <input name="name" onChange={handleChange} />
            {errors.name && <span style={{ color: "red", fontSize: "12px" }}>{errors.name}</span>}

            <input name="surname" onChange={handleChange} />
            {errors.surname && <span style={{ color: "red", fontSize: "12px" }}>{errors.surname}</span>}
            {/* <input name="surname" onChange={(e) => handleChange(e)} /> */}
            <button type="submit">Gönder</button>
        </form>
    )
}

export default Controlled
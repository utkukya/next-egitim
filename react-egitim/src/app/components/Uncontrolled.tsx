// sürekli yeniden render edilmeyen komponentlerdir, state yönetimi olmayan yapılardır.
// Direk document üzerinden erişilebilen dokümandır.

import { useEffect, useRef } from "react";

const UnControlled = () => {
    const inputRef = useRef<HTMLInputElement>(null) // bir referansa atacanacağı için undefined yapmıyoruz. null olarak işaretliyoruz.
    // Document üzerinden getElementById gibi bir işlem yapılıyor. Document üzerindeki bir node refi yakalanmış oluyor.
    // useRef generic olarak html elementinin tipini alır. Generic olarak input aldıysa input elemetini ref etmesi lazım.

    // Aynı componente birden fazla refe sahip component çağırılabilir. Her bir element için yeni bir 
    // referans oluşturur. Karışıklık yaşanmaz.
    // Sanal domdan takip edemez. O yüzden uncontrolled component denir. Referanslar üzerinden takip eder.

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.addEventListener("keydown", (event) => {
                const targetRef = event.target as HTMLInputElement
                console.log(targetRef.value)
            })
        }
    }, [])


    return (
        <>
            <input name="age" ref={inputRef} />
        </>
    )
}

export default UnControlled;
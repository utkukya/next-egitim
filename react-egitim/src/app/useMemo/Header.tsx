'use client'
import { memo, useContext, useEffect } from 'react'
import { PersonContext } from '../context/Person'

// Her state güncellemesinde yeniden render edilmesini istediğimiz bir durumda memoization kullanılır.
// Performans iyileştirmesi sağlar.

type Props = {
    handleChange: () => void
}

const Header = ({ handleChange }: Props) => {
    const { age, setAge } = useContext(PersonContext)

    console.log("Header bileşeni yüklendi")

    useEffect(() => {
        handleChange()

        setAge && setAge(10) // && sadece doğruluk kontrolu yapar. Doğru ise işlemi yapar. Doğru değilse bir işlem yapmaz.

    }, []) // Objeler ve diziler referans tipte olduğu için sürekli olarak memorization
    // yeniler. O yüzden useCallback ile işaretlenmesi gerekir.

    return <div>HEADER</div>

}

export default memo(Header); // ikinci bir parametre olarak propsAreEqual kullanıldığında buna istinaden değişen propslar
// olduğunda bu sayfa tekrar render edilir.
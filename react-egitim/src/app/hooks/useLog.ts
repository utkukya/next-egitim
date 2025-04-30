import { useEffect, useState } from "react"

const useLog = () => {
    const [name, setName] = useState<string>("...")

    const setLog = (text: string) => {
        console.log(text, "useLog' dan geldi")
    }

    useEffect(() => {
        console.log(name)
    }, [name])

    return { setLog, setName }
}

export default useLog
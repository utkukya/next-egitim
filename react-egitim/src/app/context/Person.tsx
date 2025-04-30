// useState ile stateleri local olarak tanımlarız.
// useContext ile global olarak tanımlarız.

import { createContext, Dispatch, SetStateAction, useState } from "react";

type PersonContextType = {
    name: string | undefined;
    setName: Dispatch<SetStateAction<string | undefined>>;
    surname: string | undefined;
    setSurname: Dispatch<SetStateAction<string | undefined>>;
    age: number | undefined;
    setAge: Dispatch<SetStateAction<number | undefined>>;
}

type PersonProviderType = { children: React.ReactNode } // birden fazla eleman sarmalaması için. 
// ya da children: React.JSX.Element[]

const PersonContext = createContext<Partial<PersonContextType>>({})

// bir sarmalayıcı nereyi sarmalarsa context orası içerisinde geçerlidir. Bir componenttir.
const PersonProvider = ({ children }: PersonProviderType) => {
    const [name, setName] = useState<string | undefined>(undefined)
    const [surname, setSurname] = useState<string | undefined>(undefined)
    const [age, setAge] = useState<number | undefined>(undefined)

    return <PersonContext.Provider
        value={{
            name, setName, surname, setSurname, age, setAge // aslında burada provoder context içerisine Provider içerisinde tanımladığımız local statelerimizi atadık.
        }}>
        {children}
    </PersonContext.Provider>
}


export { PersonContext, PersonProvider }
'use client'

import React, { useCallback, useContext, useMemo } from "react";
import Login from "./login";
import Header from "./useMemo/Header";
import useLog from "./hooks/useLog";
import { PersonContext } from "./context/Person";

function Page() {
  const isHas: boolean = true;
  const classNames: string[] = ["class-name"]

  const { name, surname, age } = useContext(PersonContext)

  if (isHas) {
    classNames.push("class-name-1")
  }

  const handleChange = useCallback(() => { // Referans tipinden dolayı useCallback ile işaretleme yapılması gerekir.
    console.log("Header için gönderilen metot")
  }, []) // useEffect gibi sayfa yüklenmesi bittikten sonra tetiklenir.

  const setLog1 = useMemo(() => {
    console.log("useMemo")
  }, []) // metot belleğe alınır. Her renderde tekrar oluşturulmaz.

  const { setLog } = useLog()
  setLog("text")

  return (
    // React.Fragment yerine <> de kullanılabilir. Aradaki fark fragment kullanılırsa key verilebilir.
    // Props drilling --> proplar yukardan aşağı gönderilir. Logine geçtiğimiz state bir aşağısındaki Register componentini geçtik.
    <>
      <div className={classNames.map(c => c).join(" ")}>...</div>
      <Header handleChange={handleChange} />
      <h1>{age}</h1>
      <Login state={"x"} action={false}>
        <input />
        <input />
      </Login>
    </>
  );
  // birden fazla children varsa type içerisinde React.JSX.Element[] dizi olarak tanımlanır.
}

// tsx içerisinde {} içerinde yazılan her şey js dir.
// Her component sadece 1 tane jsx dönebilir.

// // export default Home; // direk olarak Home function componentini dışarı açacağız.

// type Props = {
//   state: string;
//   action: boolean
// }
// // Function component
// const Home2 = ({ state, action }: Props) => { // proplara tip verirken { state: string } şeklinde veremeyiz.
//   return <div>...</div>
// }

// export default Home2;

// // Bir component içerisine parametre almak isterse propslar devreye girer.

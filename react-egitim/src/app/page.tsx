import React from "react";
import Login from "./login";

function Page() {
  const isHas: boolean = true;
  const classNames: string[] = ["class-name"]

  if (isHas) {
    classNames.push("class-name-1")
  }
  return (
    // React.Fragment yerine <> de kullanılabilir. Aradaki fark fragment kullanılırsa key verilebilir.
    // Props drilling --> proplar yukardan aşağı gönderilir. Logine geçtiğimiz state bir aşağısındaki Register componentini geçtik.
    <>
      <div className={classNames.map(c => c).join(" ")}>...</div>
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

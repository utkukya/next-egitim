import GenericClass from "@/classes/GenericClass";
import GenericClass2 from "@/classes/GenericClass2";
import ICar from "@/interfaces/ICar";
import GetPerson from "@/model/GetPerson";
import TResponse from "@/types/GenericType";

export default function Home() {
  let name: string = "Utku"
  let age: number = 19
  let x: string[] = ["1", "2"]
  let objArr: { name: string, age: number, isActive: boolean };

  let obj = Array<{}>

  let yy: [string, number, boolean] = ["a", 2, false] // bu bir tupledır. Bir dizi içerisinde birden fazla değişken barındırabilmek.

  // build ortamında hata verir. Runtimeda hata vermez typescript.

  return (
    <div>
      aaaaaaaaaa
    </div>
  );
}

interface IPerson {
  name: string;
  surname: string;
  age: number;
  isActive: boolean;
  // getName: () => void;
  // getSurname: (surname: string) => string;
}

class Person implements IPerson {
  name: string;
  surname: string;
  age: number;
  isActive: boolean;
  // getName: () => void;
  // getSurname: (surname: string) => string;

  constructor(_name: string, _surname: string, _age: number, _isActive: boolean) {
    this.name = _name
    this.surname = _surname
    this.age = _age
    this.isActive = _isActive
  }
}

class Car implements ICar {
  name: string;
  color: string;

  constructor(_name: string, _color: string) {
    this.name = _name
    this.color = _color
  }
}

class Car2 implements Omit<ICar, "color"> {
  name: string;

  constructor(_name: string) {
    this.name = _name
  }

}

// color interface içerisinde var ama color gelsin istemiyorum nasıl yaparım.
// Omit bir generictir. İstemediğimiz özellikleri Omit içerisinde yazarız.

type Person2 = {
  name: string;
  surname: string
}

// type atama bekler. interface gibi değildir.
type Color = "red" | "blue" | "white"
const obj: {
  name?: string // soru işareti ile null durumu yapılabilir.
} = {}
const obj2: Partial<{ // Partial ile parçalama yaparak ilk değer ataması yapmak zorunda kalmayız.
  name: string;
  color: Color;
  person: Person2
}> = {
  color: "blue",  // type içerisinde tanımladığımız değerleri verebiliriz sadece
  person: { name: "", surname: "" }
}

const obj3: Partial<{ // Partial ile parçalama yaparak ilk değer ataması yapmak zorunda kalmayız.
  name: string;
  color: Color;
  persons: Partial<Omit<Person2 & { phoneNumber: number }, "surname">>[], // intersection & ile yapılır. Type içerisinde olmayan bir özellik ya da metot eklemeyi sağlar.
  // Obje içerisinde birden fazla eleman ekleyebiliriz.
  isActive: IsActive | null // tip içerisinde tanımlamadığımız türleri burada bu şekilde tanımlayabiliriz.
}> = {
  color: "blue",  // type içerisinde tanımladığımız değerleri verebiliriz sadece
  persons: [{ name: "", /*surname: ""*/ }], // surname artık zorunlu değil.,
  isActive: null
}

// type içerisinde method da tanımlayabiliriz.

type IsActive = boolean | undefined // bu işlem br union işlemidir.

type Person4 = {
  readonly id: number; // sadece okunabilir bir yapı haline getirdik.
  name: string;
}

const person: Person4 = { id: 1, name: "Utku" } // id değeri artık değiştirelemez.

const person4: Readonly<Person4> = { id: 2, name: "Utku" } // Bu şekilde de readonly yapabiliriz.

const person5 = { id: 1, name: "Utku" } as const // Bu şekilde tanımlandığında obje içerisindeki memberlar değiştirilemez.
// readonly sadece tip atamalarının başına yazılabilir. Object içerisindeki değerlere yazılamaz.

type Person6 = {
  id: number;
  name: string;
  adress: {
    x: string;
    y: string;
  }
}

const person6: Readonly<Person6> = { id: 1, name: "Utku", adress: { x: "x", y: "y" } }
// bu şekilde yaparsak adress readonly olur. İçerisindeki değerler değiştirilebilir.
// İçerisindeki değerler de değişmesin istersek onların da ayrı olarak readonly ile işaretlenmesi gerekir.

const person8: TResponse<GetPerson[]> = { data: [], success: true }
const person9: TResponse<string> = { data: "", success: true } // string, number tiplerini de alabilir direk olarak.
// ancak değer alamaz.

const getName = new GenericClass<{}>("Utku", "Kaya").getName();

const _class = new GenericClass2<{ name: string, surname: string }>()

_class.set({ name: "Utku", surname: "Kaya" })
console.log(_class.get())
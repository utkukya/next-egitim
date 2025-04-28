// class Person {
//     _name: string;
//     _surname: string;

//     constructor(name: string, surname: string) {
//         this._name = name;
//         this._surname = surname;
//     }
// }

class GenericClass<TResponse> /* extends Person */ { // birden fazla generic tanımlanabilir.
    _name: TResponse;
    _surname: string;
    _isActive: boolean = true; // default değer atarsak constructorda tanımlamak zorunda değiliz.

    constructor(name: TResponse, surname: string) {
        // super(name, surname) // kalıtım aldığımız sınıfından constructorındaki parametreleri buraya vermek zorundayız.
        this._name = name;
        this._surname = surname;
    }

    getName = (): TResponse => this._name
    getSurname = (): string => this._surname

    getFullName = (): string => `${this._name}${this._surname}`
}

export default GenericClass
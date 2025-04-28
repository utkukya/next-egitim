class GenericClass2<TRequest> {
    private _data: TRequest | undefined;

    get = (): TRequest | undefined => this._data // burada dönüş değerimizi spesifik olarak ayarlamak istersek methodu generic yapmak gerekir.
    set = (data: TRequest) => this._data = data
    // metotlarda farklı dönüşler için generic kullanmak istersek metotlar içerisinde kullanmamız gerekiyor.
}

export default GenericClass2; // constructor yoksa new ile burada çağırılabilir.
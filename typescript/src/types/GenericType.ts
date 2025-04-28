type TResponse<T> = { // T extends object --> objeden de kalıtım almak zorunda manasına gelir.
    success: boolean;
    data: T;
}

export default TResponse
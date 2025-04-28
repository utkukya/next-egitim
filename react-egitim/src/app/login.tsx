import Register from "./Register";

type Props = {
    children: React.JSX.Element[]
    state: string;
    action?: boolean;
}

// burada stateleri nullable yapabiliriz. Bu durumda prop tanımlanmak zorunda değildir.
// Başlangıç değeri prop tanımlanan yerde verilebilir.
const Login = ({ children, state, action = true }: Props) => {
    return (
        <>
            <h1>Login</h1>
            <hr />
            <hr />
            <Register state={state} />
            {/* <Register {...props} />  propları bu şekilde spread edebiliriz. yukarıda props olarak tanımlarsak değişken adını*/}
            <form>{children}</form>
        </>
    )
}

export default Login;
import { Dispatch, SetStateAction, useEffect } from "react";

const Login = ({ name }: { name: Dispatch<SetStateAction<string>> }) => {

    useEffect(() => {
        name("Utku")
    }, [])

    return <div>...</div>
}

export default Login;
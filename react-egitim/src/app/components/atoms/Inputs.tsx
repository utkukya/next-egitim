import { InputHTMLAttributes } from "react"

type InputProps = {} & InputHTMLAttributes<HTMLInputElement>

const Input = ({ ...attributes }: InputProps) => {
    return (
        <div>
            <input {...attributes} />
        </div>
    )
}

export default Input
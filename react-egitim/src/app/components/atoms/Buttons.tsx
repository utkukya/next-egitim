import { ButtonHTMLAttributes } from "react"

type ButtonProps = { children: React.ReactNode } & ButtonHTMLAttributes<HTMLButtonElement>

const Button = ({ children, ...attributes }: ButtonProps) => {
    <button
        {...attributes}
        className={`manuel-class ${attributes.className}`}
    >

    </button>
}

export default Button
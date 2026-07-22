import { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({
    children,
    className,
    ...props
}: ButtonProps) {
    return (
        <button
            className={`
                rounded-xl
                bg-blue-600
                px-6
                py-3
                font-medium
                text-white
                transition-colors
                hover:bg-blue-700
                disabled:cursor-not-allowed
                disabled:opacity-50
                ${className ?? ""}
            `}
            {...props}
        >
            {children}
        </button>
    )
}
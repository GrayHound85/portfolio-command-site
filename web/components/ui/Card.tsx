type CardProps = {
    children: React.ReactNode;
    className?: string;
};

export default function Card({
    children,
    className = ""
}: CardProps) {

    return (
        <div
            className={`
                rounded-card
                border
                bg-surface
                p-8
                shadow-card
                ${className}
            `}
        >
            {children}
        </div>
    );
}
type panelProps = {
    children: React.ReactNode;
    className?: string;
};


export default function HeroPanel({
    children,
    className = ""
}: panelProps) {

    return (
        <div className={`
            rounded-card
            bg-gray-950/40
            p-8
            h-full
            ${className}
        `}>
            {children}
        </div>
    );
}   
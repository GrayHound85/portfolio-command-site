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
            bg-black/30
            p-8
            h-full
            ${className}
        `}>
            {children}
        </div>
    );
}   
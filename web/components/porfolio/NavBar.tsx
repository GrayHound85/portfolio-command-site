type navBarProps = {
    children: React.ReactNode;
    className?: string;
};

export default function NavBar({
    children,
    className = ""
}: navBarProps) {

    return (
        <nav className={`
            rounded-b-card
            bg-primary
            h-20
            ${className}
            `}>
            {children}
        </nav>
    );
}   
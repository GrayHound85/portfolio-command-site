import LinkCard from "@/components/ui/LinkCard";

type DashboardCardProps = {
    href: string;
    title: string;
    description: string;
    icon: React.ReactNode;
};


export default function DashboardCard({
    href,
    title,
    description,
    icon,
}: DashboardCardProps) {

    return (
        <LinkCard
            href={href}
            className="
                h-48
                flex
                flex-col
                justify-between
            "
        >

            <div>
                {icon}
            </div>


            <div>

                <h2
                    className="
                        text-xl
                        font-semibold
                    "
                >
                    {title}
                </h2>


                <p
                    className="
                        mt-2
                        text-text-secondary
                    "
                >
                    {description}
                </p>

            </div>

        </LinkCard>
    );
}
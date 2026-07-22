import Card from "../ui/Card";

type DashboardCardProps = {
    title: string;
    description: string;
};


export default function DashboardCard({
    title,
    description
}: DashboardCardProps) {

    return (
        <Card>

            <h2 className='
                text-xl
                font-semibold
            '>
                {title}
            </h2>

            <p className='
                mt-2
                text-gray-600
            '>
                {description}
            </p>

        </Card>
    );
}
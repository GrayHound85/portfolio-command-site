type GradientVariant = "hero" | "subtle" | "minimal";

type Glow = {
    className: string;
};

const variants: Record<GradientVariant, Glow[]> = {
    hero: [
        {
            className: `
                left-1/2
                -translate-x-1/2
                top-[-45%]

                h-150 w-150
                md:h-212.5 md:w-212.5
                lg:h-250 lg:w-250

                bg-cyan-400
                opacity-50

                blur-[120px]
                md:blur-[160px]
                lg:blur-[200px]
            `,
        },

        {
            className: `
                left-[-25%]
                top-[-5%]

                h-112.5 w-112.5
                md:h-187.5 md:w-187.5
                lg:h-212.5 lg:w-212.5

                bg-blue-400
                opacity-40

                blur-[120px]
                md:blur-[170px]
            `,
        },

        {
            className: `
                right-[-25%]
                top-0

                h-112.5 w-112.5
                md:h-187.5 md:w-187.5
                lg:h-212.5 lg:w-212.5

                bg-teal-400
                opacity-40

                blur-[120px]
                md:blur-[170px]
            `,
        },
    ],

    subtle: [
        {
            className: `
                left-1/2
                -translate-x-1/2
                top-[-55%]

                h-175 w-175
                md:h-250 md:w-250

                bg-cyan-400
                opacity-25

                blur-[180px]
            `,
        },
    ],

    minimal: [
        {
            className: `
                right-[-10%]
                top-[-10%]

                h-100
                w-100

                bg-cyan-500

                opacity-15

                blur-[160px]
            `,
        },
    ],
};

type GradientBackgroundProps = {
    variant?: GradientVariant;
};

export default function GradientBackground({
    variant = "hero",
}: GradientBackgroundProps) {

    return (
        <div
            className="
                absolute
                inset-0
                overflow-hidden
                pointer-events-none
                z-0
            "
        >
            {variants[variant].map((glow, index) => (

                <div
                    key={index}
                    className={`
                        absolute
                        rounded-full
                        ${glow.className}
                    `}
                />

            ))}

            <div
                className="
                    absolute
                    inset-x-0
                    bottom-0

                    h-[45%]

                    bg-linear-to-b
                    from-transparent
                    to-slate-950
                "
            />

        </div>
    );
}
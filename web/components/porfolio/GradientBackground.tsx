export default function GradientBackground() {
    return (
        <div
            className="
                absolute
                inset-0
                z-0
                overflow-hidden
                pointer-events-none
            "
        >

            {/* Main top light source */}
            <div
                className="
                    absolute
                    left-1/2
                    -translate-x-1/2
                    top-[-45%]

                    h-150
                    w-150

                    md:h-212.5
                    md:w-212.5

                    lg:h-250
                    lg:w-250

                    rounded-full
                    bg-cyan-400

                    opacity-50

                    blur-[120px]

                    md:blur-[160px]

                    lg:blur-[200px]
                "
            />


            {/* Left blue glow */}
            <div
                className="
                    absolute
                    left-[-25%]
                    top-[-5%]

                    h-112.5
                    w-112.5

                    md:h-187.5
                    md:w-187.5

                    lg:h-212.5
                    lg:w-212.5

                    rounded-full
                    bg-blue-400

                    opacity-40

                    blur-[120px]

                    md:blur-[170px]
                "
            />


            {/* Right turquoise glow */}
            <div
                className="
                    absolute
                    right-[-25%]
                    top-[0%]

                    h-112.5
                    w-112.5

                    md:h-187.5
                    md:w-187.5

                    lg:h-212.5
                    lg:w-212.5

                    rounded-full
                    bg-teal-400

                    opacity-40

                    blur-[120px]

                    md:blur-[170px]
                "
            />


            {/* Bottom darkness fade */}
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
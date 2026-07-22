import Link from "next/link";

import BackgroundLayout from "@/components/layout/BackgroundLayout";

export default function LandingPage() {

    return (
        <BackgroundLayout>
            <section
                className="
                    flex
                    w-full
                    flex-col
                    items-center
                    justify-center
                    px-6
                    text-center
                "
            >

                <h1
                    className="
                        text-6xl
                        font-bold
                        tracking-tight
                        text-white
                    "
                >
                    Jewel Hunter
                </h1>


                <p
                    className="
                        mt-6
                        text-xl
                        text-slate-300
                    "
                >
                    Computer Science student building software,
                    exploring technology, and preparing for the future.
                </p>


                <Link
                    href="/login"
                    className="
                        mt-10
                        inline-block
                        rounded-full
                        bg-blue-600
                        px-8
                        py-3
                        font-semibold
                        text-white
                        transition
                        hover:bg-blue-700
                    "
                >
                    Career Dashboard
                </Link>


            </section>
        </BackgroundLayout>
    );
}
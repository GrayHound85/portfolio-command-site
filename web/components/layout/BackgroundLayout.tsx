import type { ReactNode } from "react";

import GradientBackground from "@/components/porfolio/GradientBackground";

type BackgroundLayoutProps = {
    children: ReactNode;
};

export default function BackgroundLayout({
    children,
}: BackgroundLayoutProps) {
    return (
        <main
            className="
                relative
                isolate
                flex
                min-h-screen
                overflow-hidden
                bg-background
            "
        >
            <GradientBackground />

            <div
                className="
                    relative
                    z-10
                    flex
                    min-h-screen
                    w-full
                "
            >
                {children}
            </div>
        </main>
    );
}
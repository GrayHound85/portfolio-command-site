import type { ReactNode } from "react";

import BackgroundLayout from "./BackgroundLayout";

type PortfolioLayoutProps = {
    profile: ReactNode;
    navigation: ReactNode;
    floating?: ReactNode;
    children: ReactNode;
};

export default function PortfolioLayout({
    profile,
    navigation,
    children,
    floating,
}: PortfolioLayoutProps) {

    return (
        <BackgroundLayout background="hero">
            <div
                className="
                    flex
                    h-screen
                    w-full
                "
            >
                <aside className="
                        hidden
                        lg:block

                        w-100
                        shrink-0

                        p-8
                    ">
                    <div className="
                            h-full
                        ">
                        {profile}
                    </div>
                </aside>


                <section className="
                        flex
                        flex-1
                        flex-col
                    ">

                    <header className="
                            shrink-0
                            pr-8
                        ">
                        {navigation}
                    </header>

                    <main className="
                            flex-1
                            overflow-y-auto

                            p-8
                            pl-0
                        ">
                        {children}
                    </main>

                </section>
            </div>
            {floating}
        </BackgroundLayout>
    );
}
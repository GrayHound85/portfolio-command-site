import Link from "next/link";

import BackgroundLayout from "@/components/layout/BackgroundLayout";
import PortfolioLayout from "@/components/layout/PortfolioLayout";
import HeroPanel from "@/components/porfolio/HeroPanel";
import ProfileCard from "@/components/porfolio/ProfileCard";
import NavBar from "@/components/porfolio/NavBar";

export default function LandingPage() {

    return (
        <PortfolioLayout
            profile={
                <ProfileCard/>
            }

            navigation={
                <NavBar>
                    Navigation
                </NavBar>
            }
        >

            <HeroPanel>
                About
            </HeroPanel>

        </PortfolioLayout>
    );
}
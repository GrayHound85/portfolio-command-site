

import BackgroundLayout from "@/components/layout/BackgroundLayout";
import PortfolioLayout from "@/components/layout/PortfolioLayout";

import HeroPanel from "@/components/sections/porfolio/HeroPanel";
import ProfileCard from "@/components/sections/porfolio/ProfileCard";
import NavBar from "@/components/sections/porfolio/NavBar";
import AdminButton from "@/components/sections/porfolio/AdminButton";


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

            floating={
                <AdminButton/>
            }
        >

            <HeroPanel>
                About
            </HeroPanel>

        </PortfolioLayout>
    );
}
import HeroPanel from "./HeroPanel";

export default function ProfileCard(){
    return (
        <HeroPanel>
            <div className="
                    flex
                    flex-col
                    items-center
                    pt-4
                ">

                <div className="
                        relative

                        h-60
                        w-60

                        rounded-full

                        bg-primary

                        overflow-hidden
                    ">

                    <img
                        src="/profile.png"
                        alt="Profile picture"
                        className="
                            absolute

                            bottom-0

                            h-full
                            w-full

                            object-cover
                        "
                    />

                </div>
            </div>
        </HeroPanel>
    );
}
"use client";

import Link from "next/link";

export default function AdminButton() {
    return (
        <Link
            href="/login"
            aria-label="Admin login"
            className="
                fixed
                bottom-6
                right-6
                z-50

                flex
                h-12
                w-12
                items-center
                justify-center

                rounded-full

                bg-black/30
                backdrop-blur-xl

                border
                border-white/10

                transition-all
                duration-200

                hover:scale-110
                hover:bg-primary
            "
        >
            ⚙
        </Link>
    );
}
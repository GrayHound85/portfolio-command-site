import { NextResponse } from "next/server";

export async function GET() {

    return NextResponse.json([
        {
            id: 1,
            title: "NeetCode",
            url: "https://neetcode.io",
        },
        {
            id: 2,
            title: "Roadmap.sh",
            url: "https://roadmap.sh",
        },
        {
            id: 3,
            title: "The Odin Project",
            url: "https://www.theodinproject.com",
        },
    ]);

}
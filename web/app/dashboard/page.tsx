import DashboardCard from "@/components/dashboard/DashboardCard";
import { Main } from "next/document";


export default function Home() {
  return (
    <main className="
      min-h-screen
      bg-gray-100
      p-8
    ">

      <h1 className="
        text-4xl
        font-bold
      ">
        Career Hub
      </h1>

      <p className="
        mt-2
        text-gray-600
      ">
        Your personal software engineering dashboard.
      </p>

      <div className="
          mt-8
          grid
          grid-cols-1
          md:grid-cols-2
          gap-6
      ">

          <DashboardCard
              title="Learning Resources"
              description="Track courses, tutorials and useful links."
          />

          <DashboardCard
              title="Internships"
              description="Track opportunities and applications."
          />

          <DashboardCard
              title="Projects"
              description="Manage your software projects."
          />

          <DashboardCard
              title="Networking"
              description="Track contacts and conversations."
          />

      </div>

    </main>
  );
}
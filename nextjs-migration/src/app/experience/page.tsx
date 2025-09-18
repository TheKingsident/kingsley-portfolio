import type { Metadata } from "next";
import Experience from "@/pages/Experience";

export const metadata: Metadata = {
  title: "Experience - Kingsley Usa | Full Stack Developer",
  description: "Explore Kingsley Usa's professional experience, skills, and career journey in software development and web technologies.",
  openGraph: {
    title: "Experience - Kingsley Usa | Full Stack Developer",
    description: "Explore Kingsley Usa's professional experience, skills, and career journey in software development and web technologies.",
  },
};

export default function ExperiencePage() {
  return <Experience />;
}
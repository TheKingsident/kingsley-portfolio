import type { Metadata } from "next";
import About from "@/pages/About";

export const metadata: Metadata = {
  title: "About - Kingsley Usa | Full Stack Developer",
  description: "Learn more about Kingsley Usa, a passionate full stack developer with expertise in modern web technologies and innovative solutions.",
  openGraph: {
    title: "About - Kingsley Usa | Full Stack Developer",
    description: "Learn more about Kingsley Usa, a passionate full stack developer with expertise in modern web technologies and innovative solutions.",
  },
};

export default function AboutPage() {
  return <About />;
}
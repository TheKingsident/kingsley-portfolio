import type { Metadata } from "next";
import Portfolio from "@/pages/Portfolio";

export const metadata: Metadata = {
  title: "Portfolio - Kingsley Usa | Full Stack Developer",
  description: "View Kingsley Usa's portfolio showcasing innovative web applications, software projects, and technical solutions.",
  openGraph: {
    title: "Portfolio - Kingsley Usa | Full Stack Developer",
    description: "View Kingsley Usa's portfolio showcasing innovative web applications, software projects, and technical solutions.",
  },
};

export default function PortfolioPage() {
  return <Portfolio />;
}
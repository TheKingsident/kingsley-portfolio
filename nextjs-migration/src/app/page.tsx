import type { Metadata } from "next";
import Home from "@/pages/Home";

export const metadata: Metadata = {
  title: "Home - Kingsley Usa | Full Stack Developer",
  description: "Welcome to Kingsley Usa's portfolio. Passionate full stack developer specializing in modern web technologies and innovative solutions.",
  openGraph: {
    title: "Home - Kingsley Usa | Full Stack Developer",
    description: "Welcome to Kingsley Usa's portfolio. Passionate full stack developer specializing in modern web technologies and innovative solutions.",
  },
};

export default function HomePage() {
  return <Home />;
}
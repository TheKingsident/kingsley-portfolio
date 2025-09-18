import type { Metadata } from "next";
import Contact from "@/pages/Contact";

export const metadata: Metadata = {
  title: "Contact - Kingsley Usa | Full Stack Developer",
  description: "Get in touch with Kingsley Usa for collaboration opportunities, project inquiries, or professional consultations.",
  openGraph: {
    title: "Contact - Kingsley Usa | Full Stack Developer",
    description: "Get in touch with Kingsley Usa for collaboration opportunities, project inquiries, or professional consultations.",
  },
};

export default function ContactPage() {
  return <Contact />;
}
import type { Metadata, Viewport } from "next";
import { Poppins, Nunito } from "next/font/google";
import "./globals.css";
import MainLayout from "@/components/MainLayout";
import BackgroundAnimations from "@/components/BackgroundAnimations";
import LoadingIndicator from "@/components/LoadingIndicator";
import { ModalProvider } from "@/contexts/ModalContext";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-nunito",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://kingsley-portfolio.vercel.app'),
  title: "Kingsley Usa - Full Stack Developer",
  description: "Portfolio of Kingsley Usa, a passionate full stack developer specializing in modern web technologies and innovative solutions.",
  keywords: ["Kingsley Usa", "Full Stack Developer", "React", "Node.js", "JavaScript", "TypeScript", "Portfolio"],
  authors: [{ name: "Kingsley Usa" }],
  openGraph: {
    title: "Kingsley Usa - Full Stack Developer",
    description: "Portfolio of Kingsley Usa, a passionate full stack developer specializing in modern web technologies and innovative solutions.",
    url: "https://kingsley-portfolio.vercel.app",
    siteName: "Kingsley Usa Portfolio",
    images: [
      {
        url: "/kingsley.png",
        width: 1200,
        height: 630,
        alt: "Kingsley Usa - Full Stack Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kingsley Usa - Full Stack Developer",
    description: "Portfolio of Kingsley Usa, a passionate full stack developer specializing in modern web technologies and innovative solutions.",
    images: ["/kingsley.png"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`antialiased overflow-hidden ${poppins.variable} ${nunito.variable}`} suppressHydrationWarning={true}>
        <ModalProvider>
          {/* Loading Indicator */}
          <LoadingIndicator />
          
          <div className="w-full h-screen bg-gradient-to-br from-red-50 via-[#f0f4ff] to-[#fef9ff] text-gray-900 xl:flex relative border border-white rounded-3xl xl:max-w-[1500px] xl:max-h-[80vh] xl:min-h-[80vh] my-[7vh] xl:my-[10vh] mx-auto">
            <div className="custom-cursor hidden lg:block"></div>
            
            {/* Background Animation */}
            <BackgroundAnimations />

            <MainLayout>
              {children}
            </MainLayout>
          </div>
        </ModalProvider>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter, Roboto_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Chamod Anjana | Software Engineer",
  description: "Portfolio of Chamod Anjana, Flutter Developer & Full-Stack Engineer at eVision microsystems.",
  keywords: ["Chamod Anjana", "Flutter Developer", "Software Engineer", "eVision microsystems", "ASP.NET", "Full-Stack"],
  openGraph: {
    title: "Chamod Anjana | Software Engineer",
    description: "Portfolio of Chamod Anjana, Flutter Developer & Full-Stack Engineer at eVision microsystems.",
    url: "https://chamodanjana.me",
    siteName: "Chamod Anjana Portfolio",
    type: "profile",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Chamod Anjana",
  jobTitle: "Software Engineer",
  worksFor: {
    "@type": "Organization",
    name: "eVision microsystems"
  },
  url: "https://chamodanjana.me",
  sameAs: [
    "https://www.linkedin.com/in/chamodanjana"
  ],
  knowsAbout: ["Flutter", "Software Development", "ASP.NET", "Full-Stack Engineering"]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${robotoMono.variable} h-full antialiased dark`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground bg-[#050505]">
        {children}
      </body>
    </html>
  );
}

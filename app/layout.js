import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { NextSeo } from "next-seo";

export const metadata = {
  title: "Aryan Karna - Web Developer from Indore",
  description:
    "Web developer Aryan Karna specializes in building modern web applications. Based in Indore, graduate from Sage University.",
  openGraph: {
    url: "https://aryankarma.vercel.app",
    title: "Aryan Karna - Web Developer",
    description: "Web developer based in Indore.",
    images: [{ url: "/img/pfp.jpg" }],
    site_name: "Aryan Karna Portfolio",
  },
  twitter: {
    handle: "@karmaaryan",
    site: "@karmaaryan",
    cardType: "summary_large_image",
  },
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Schema Markup for better seo */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "http://schema.org",
              "@type": "Person",
              name: "Aryan Karma",
              jobTitle: "Software Developer",
              affiliation: {
                "@type": "Organization",
                name: "Aryan Karma",
              },
              url: "https://aryankarma.vercel.app",
              sameAs: [
                "https://linkedin.com/in/aryankarma",
                "https://twitter.com/karmaaryan",
                "https://github.com/Aryankarma",
                "https://bento.me/Aryankarma",
              ],
              description:
                "Aryan Karma is a skilled Android and Web Developer, passionate about coding and technology. He has experience leading projects and working on production projects.",
              knowsAbout: [
                "Web development",
                "Android development",
                "Programming",
                "Web Designing",
              ],
            }),
          }}
        />
        {/* Additional meta tags */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/img/pfp.jpg" />
        
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}

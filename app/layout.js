import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { NextSeo } from "next-seo";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Aryan Karna",
  description:
    "Web developer Aryan Karna specializes in building modern web applications. Based in Indore, graduate from Sage University.",
};

export default function RootLayout({ children }) {
  return (
    <>
      <NextSeo
        title="Aryan Karna - Web Developer from Indore"
        description="Aryan Karna specializes in building modern web applications. Based in Indore, Sage University graduate."
        canonical="https://aryankarma.vercel.app"
        openGraph={{
          url: "https://aryankarma.vercel.app",
          title: "Aryan Karna - Web Developer",
          description: "Web developer based in Indore.",
          images: [{ url: "/img/pfp.jpg" }],
          site_name: "Aryan Karna Portfolio",
        }}
        twitter={{
          handle: "@karmaaryan",
          site: "@karmaaryan", // This should match your Twitter account
          cardType: "summary_large_image",
        }}
      />

      <Head>
        {/* Script for SEO schema */}
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
                "https://twitter.com/aryankarma",
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
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        />
        <link rel="icon" href="/img/pfp.jpg" />
      </Head>

      <body className={inter.className}>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </>
  );
}

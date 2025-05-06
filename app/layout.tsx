// app/layout.tsx or app/RootLayout.tsx
import type { Metadata } from "next";
import "./globals.css"; // This will import your global styles, including fonts.
import {
  roboto,
  openSans,
  playfair,
  lora,
  montserrat,
  poppins,
  raleway,
  inter,
  merriweather,
  nunito,
  sourceSans,
  ubuntu,
  notoSansDevanagari,
  aladin,
} from "./fonts/fonts"; // Importing the font variables from your fonts.ts

export const metadata: Metadata = {
  title: "Cvibe - Free & Open Source Resume Builder with Themes & Fonts",
  description:
    "Create stunning professional resumes with Cvibe – a 100% free and open-source CV builder. Choose from modern themes, customize fonts, and export your resume instantly. No signup required.",
  keywords: [
    "cv builder",
    "resume builder",
    "free cv builder",
    "open source resume builder",
    "custom resume themes",
    "font customization",
    "professional resume",
    "cv template generator",
    "build resume online",
    "next.js resume builder",
  ],
  openGraph: {
    title: "Cvibe - Free Open Source Resume Builder",
    description:
      "Cvibe lets you design beautiful, customizable resumes for free. Modern themes, font choices, and instant download with no login.",
    url: "https://your-cvibe-site.com",
    siteName: "Cvibe",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cvibe - Free Resume Builder",
    description:
      "Build and download professional CVs with themes and fonts for free using Cvibe.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`
          antialiased 
          ${roboto.variable} 
          ${openSans.variable} 
          ${playfair.variable} 
          ${raleway.variable} 
          ${lora.variable} 
          ${montserrat.variable} 
          ${poppins.variable} 
          ${nunito.variable} 
          ${merriweather.variable} 
          ${sourceSans.variable} 
          ${ubuntu.variable} 
          ${notoSansDevanagari.variable} 
          ${inter.variable} 
          ${aladin.variable} /* Include all imported fonts here */
        `}
      >
        {children}
      </body>
    </html>
  );
}

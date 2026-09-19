// import type { Metadata } from "next";
// import { Inter } from "next/font/google";
// import "./globals.css";
// import Navbar from "./components/Navbar";

// const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Ambuloom Pro - Learn Quran Online",
//   description: "Learn Quran online with expert teachers",
// };

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en">
//       <body>
//           <Navbar />
//           {children}
//       </body>
//     </html>
//   );
// }
// app/layout.tsx
import type { Metadata } from "next";
import { Inter, Cormorant_Garamond, Amiri } from "next/font/google";
import Navbar from "../components/Navbar";
import "./globals.css";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Ambaa Ul Uloom - Learn Quran Online",
  description: "Learn Quran online with expert teachers. Start your journey with Noorani Qaida, Nazeera, or Hifz courses.",
  keywords: ["Quran learning", "online Quran", "Islamic education", "Noorani Qaida", "Hifz", "Nazeera"],
  authors: [{ name: "Ambaa Ul Uloom" }],
  openGraph: {
    title: "Ambaa Ul Uloom - Learn Quran Online",
    description: "Learn Quran online with expert teachers. Start your journey with Noorani Qaida, Nazeera, or Hifz courses.",
    type: "website",
  },
};

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const amiri = Amiri({
  subsets: ["arabic"],
  variable: "--font-amiri",
  weight: ["400", "700"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable} ${amiri.variable}`}>
       {/* Changed the global background color to #FAFAF7 (bg-background) as requested */}
      <body className="font-body bg-background min-h-screen text-text-primary selection:bg-gold/20 selection:text-primary-dark">
        <Navbar />
        <div className="pt-20"> {children}</div>
        <Footer />
      </body>
    </html>
  );
}

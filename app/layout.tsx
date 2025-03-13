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
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import Navbar from "../components/Navbar";
import "./globals.css";
import Footer from "../components/Footer";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${plusJakarta.variable} ${inter.variable}`}>
      <body className="font-inter bg-gradient-to-b from-primary-50 to-white min-h-screen">
        <Navbar />
        <div className="mt-10"> {children}</div>
        <Footer />
      </body>
    </html>
  );
}

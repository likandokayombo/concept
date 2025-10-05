



// import type { Metadata } from 'next';
// import { ClerkProvider } from '@clerk/nextjs';
// import localFont from 'next/font/local';
// import './globals.css';

// import Navbar from '@/components/Navbar';
// import Footer from '@/components/Footer';

// // Load JetBrains Mono locally
// const myFont = localFont({
//   // src: './PPNeueMontreal-Regular.woff2',
//   src: '/fonts/JetBrainsMono-Regular.woff2'
// })

// export const metadata: Metadata = {
//   title: 'Concept',
//   description: 'Generate your ideas in seconds',
// };

// export default function RootLayout({ children }: { children: React.ReactNode }) {
//   return (
//     <ClerkProvider>
//       <html lang="en" className={myFont.className}>
//         <body className="antialiased">
//           <Navbar />
//           <main>{children}</main>
//           <Footer />
//         </body>
//       </html>
//     </ClerkProvider>
//   );
// }






















import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import localFont from "next/font/local";
import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// 🅰️ Load fonts separately
const ppNeueMontreal = localFont({
  src: "./fonts/PPNeueMontreal-Regular.woff2",
  variable: "--font-pp-neue",
  weight: "400",
  style: "normal",
  display: "swap",
});

const ppNeueMontrealBold = localFont({
  src: "./fonts/PPNeueMontreal-Bold.woff2",
  variable: "--font-pp-neue-bold",
  weight: "700",
  style: "normal",
  display: "swap",
});

const jetBrainsMono = localFont({
  src: "./fonts/JetBrainsMono-Regular.woff2",
  variable: "--font-jetbrains",
  display: "swap",
});

// 🧩 Combine all font variables
const combinedFonts = `${ppNeueMontreal.variable} ${ppNeueMontrealBold.variable} ${jetBrainsMono.variable}`;

export const metadata: Metadata = {
  title: "Concept",
  description: "Generate your ideas in seconds",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en" className={combinedFonts}>
        <body className="antialiased">
          <Navbar />
          <main>{children}</main>
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}

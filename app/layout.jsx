import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

// All Components
import Header from "@/components/Header";
import PageTrasition from "@/components/PageTrasition";
import StairTrasition from "@/components/StairTrasition";

const JetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrainsMono",
});

export const metadata = {
  title: "Chiranjeet Portfolio",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={JetBrainsMono.variable}>
        <Header />
        <StairTrasition />
        <PageTrasition>{children}</PageTrasition>
      </body>
    </html>
  );
}

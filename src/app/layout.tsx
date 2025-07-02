import "./globals.css";
import { Poppins, Cardo } from "next/font/google";
import Header from "@/components/Header";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "700"],
});

const cardo = Cardo({
  subsets: ["latin"],
  variable: "--font-cardo",
  weight: ["400", "700"],
});

export const metadata = {
  title: "Leo Phan - Frontend Developer",
  description:
    "Web developer and app developer and I'm very passionate and dedicated to my work with 7 years.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${cardo.variable} scroll-smooth`}
    >
      <body className="font-poppins">
        <Header />
        {children}
      </body>
    </html>
  );
}

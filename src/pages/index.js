import Image from "next/image";
import localFont from "next/font/local";

import Header from "@/components/Header/header";
import ContactForm from "@/components/Contact/contact-form";
import Copyright from "@/components/Copyright/copyright";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  return (
    <div className="flex flex-col">
     
        <Header />
      

      <ContactForm />
      <Copyright />
    </div>
  );
}

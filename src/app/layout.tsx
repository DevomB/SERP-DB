import type { Metadata } from "next";
import DevToolDisabler from "@/components/DevToolDisabler/DevToolDisabler";
import './globals.css';

export const metadata: Metadata = {
  title: "SERP DB",
  description: "Your SERP inspiration database", 
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <DevToolDisabler>
        <body>
          {children}
        </body>
      </DevToolDisabler>
    </html>
  );
}

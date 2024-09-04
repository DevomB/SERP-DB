import type { Metadata } from "next";
import DevToolDisabler from "../../components/DevToolDisabler/DevToolDisabler";
import './globals.css';
import NavBarNoLogin from "@components/NavBar/NavBarNoLogin/NavBarNoLogin";

export const metadata: Metadata = {
  title: "SERP DB",
  description: "Your SERP inspiration database", // This is a tenative desc.
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
          <NavBarNoLogin/>
          {children}
        </body>
      </DevToolDisabler>
    </html>
  );
}

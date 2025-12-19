import { Host_Grotesk } from "next/font/google";
import "./globals.css";
import Provider from "@/app/provider"

const host_Grotesk = Host_Grotesk({
 subsets:["latin"]
})

export const metadata = {
  title: "LogoForge-Ai",
  description: "LogoForge AI helps you generate modern, professional logos for your projects",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={host_Grotesk.className}
      >
      <Provider>
        {children}
     </Provider>
      </body>
    </html>
  );
}

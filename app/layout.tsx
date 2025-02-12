import type { Metadata } from "next";
import DisplacementSphere from './components/Background/DisplacementSphere';
import { ThemeProvider } from './components/Theme/ThemeProvider';
import "./globals.css";

export const metadata: Metadata = {
  title: "Techno Art",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/dist/tabler-icons.min.css" />
      </head>
      <body className="relative w-full h-full overflow-x-hidden">
        <ThemeProvider>
          <div className="fixed top-0 left-0 w-full h-screen z-[-1]">
            <DisplacementSphere />
          </div>
          <div className="relative z-10 bg-transparent">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

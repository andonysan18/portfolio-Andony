import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
// 1. Importamos el Toaster
import { Toaster } from "sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Andony Sanchez | Full Stack Developer", // Aproveché para cambiarte el título ;)
  description: "Portfolio profesional de Andony Sanchez",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* 2. Colocamos el Toaster aquí */}
        {/* richColors es para que el éxito sea verde y el error rojo automáticamente */}
        <Toaster position="bottom-right" richColors closeButton />
        
        {children}
      </body>
    </html>
  );
}
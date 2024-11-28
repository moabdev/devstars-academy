import type { Metadata } from "next";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DevStarts Academy",
  description: "Uma plataforma de ensino de tecnologia para pessoas especiais!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${roboto.className} antialiased`}>
        <main>{children}</main>
      </body>
    </html>
  );
}

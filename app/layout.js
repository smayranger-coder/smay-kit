import "./globals.css";

export const metadata = {
  title: "SMAY! — Hydroponic",
  description: "Bangun kebun hidroponik sendiri bersama SMAY!",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#194536",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}

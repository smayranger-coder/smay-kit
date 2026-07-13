import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

const TITLE = "Siap Punya Kebun Sendiri? - SMAY!";
const DESC = "Lihat breakdown biaya bikin sistem hidroponik 72 lubang, dan kenapa Smay bikin semuanya jadi lebih gampang.";

export const metadata = {
  title: TITLE,
  description: DESC,
  openGraph: {
    title: TITLE,
    description: DESC,
    type: "website",
    locale: "id_ID",
    siteName: "SMAY!",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: TITLE }],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESC,
    images: ["/og-image.png"],
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#194536",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}

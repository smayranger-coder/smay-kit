import Pricelist from "../../components/Pricelist";

const TITLE = "Pricelist - SMAY! Hydroponic System";
const DESC = "Rate card sistem hidroponik SMAY! 36 & 72 lubang tanam. Lengkap dengan pelatihan gratis.";

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

export default function Page() {
  return <Pricelist />;
}

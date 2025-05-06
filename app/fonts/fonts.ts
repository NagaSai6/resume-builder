// app/fonts.ts
import {
  Roboto,
  Open_Sans,
  Playfair_Display,
  Lora,
  Montserrat,
  Poppins,
  Raleway,
  Inter,
  Merriweather,
  Nunito,
  Source_Sans_3,
  Ubuntu,
  Noto_Sans_Devanagari,
  Aladin,
} from "next/font/google";

export const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-roboto",
  display: "swap",
});
export const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-opensans",
  display: "swap",
});
export const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-playfair",
  display: "swap",
});
export const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-lora",
  display: "swap",
});
export const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-montserrat",
  display: "swap",
});
export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-poppins",
  display: "swap",
});
export const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-raleway",
  display: "swap",
});
export const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-inter",
  display: "swap",
});
export const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-merriweather",
  display: "swap",
});
export const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-nunito",
  display: "swap",
});
export const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-sourcesans",
  display: "swap",
});
export const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-ubuntu",
  display: "swap",
});
export const notoSansDevanagari = Noto_Sans_Devanagari({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-notosansdevanagari",
  display: "swap",
});
export const aladin = Aladin({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-aladin",
  display: "swap",
});

export const fonts = {
  roboto,
  openSans,
  playfair,
  lora,
  montserrat,
  poppins,
  raleway,
  inter,
  merriweather,
  nunito,
  sourceSans,
  ubuntu,
  notoSansDevanagari,
  aladin,
};

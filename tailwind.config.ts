import type { Config } from "tailwindcss";

// Chiang Mai Families palette (sister brand of BKK Families and Phuket Families).
//
// The token NAMES are inherited from the bkkfamilies codebase, so every
// component still says bg-purple, text-orange and so on. Only the values
// changed, which kept the rebrand to this one file:
//   purple      mountain green   #2F6B4F  (primary: header bands, buttons)
//   purple-dark teak brown       #2E2420  (text, footer)
//   orange      Lanna terracotta #C8553D  (accent, hero, highlights)
//   teal        hill blue        #3F8297  (cards, page headers; dark enough
//                                        for white text. The logo dot keeps
//                                        the lighter misty blue #6FB3C8)
//   green       rice green       #8DC63F  (shared with the other two sites)
//   sand        rice paper       #F5EEE1  (light section backgrounds)
const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        orange: { DEFAULT: "#C8553D", 50: "#FBEDE9" },
        teal: { DEFAULT: "#3F8297", 50: "#EDF6F9" },
        green: { DEFAULT: "#8DC63F", 50: "#F3FAEA" },
        purple: { DEFAULT: "#2F6B4F", dark: "#2E2420", 50: "#EAF2EE" },
        sand: { DEFAULT: "#F5EEE1" },
      },
      fontFamily: {
        heading: ["Georgia", "Cambria", "serif"],
        body: ["Arial", "Helvetica", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;

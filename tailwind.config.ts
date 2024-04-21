import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./ui/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        ssm: "0px",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "banner-asus": "url('/asus_banner.webp')",
      },
      colors: {
        headerColor: "#002855",
        searchRingColor: "#0466c8",
        sidebarColor: "#002855",
        onSelectColor: "#001845",
        outstandingColor: "#002855",
        inActiveColor: "#979dac",
        backgroundColor: "#979dac",
        borderColor: "#ade8f4",
      },
    },
  },
  plugins: [],
};
export default config;

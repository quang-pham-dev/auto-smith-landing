import localFont from "next/font/local";

const satoshi = localFont({
  src: [
    {
      path: "../assets/fonts/Satoshi-Regular.woff",
      style: "normal",
      weight: "400",
    },
    {
      path: "../assets/fonts/Satoshi-Medium.woff",
      style: "medium",
      weight: "500",
    },
    { path: "../assets/fonts/Satoshi-Bold.woff", style: "bold", weight: "700" },
  ],
  display: "swap",
  variable: "--font-satoshi",
});

export { satoshi };

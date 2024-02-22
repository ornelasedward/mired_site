import localFont from "next/font/local";

const ClashDisplay = localFont({
  src: [
    {
      path: "./fonts/ClashDisplay-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/ClashDisplay-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/ClashDisplay-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/ClashDisplay-Semibold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/ClashDisplay-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/ClashDisplay-Extralight.otf",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--clash-display",
});

export default ClashDisplay;

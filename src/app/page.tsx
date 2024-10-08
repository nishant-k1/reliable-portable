import React from "react";
import Home from "@/components/Home";
import type { Metadata } from "next";
import { s3assets, websiteURL } from "@/constants";

export const metadata: Metadata = {
  title: "FlushJohn - Porta Potty Rentals",
  description:
    "FlushJohn offers affordable and reliable porta potty rental services for all types of events. Get your quote today!",
  keywords:
    "porta potty rentals, portable toilets, event hygiene, flushjohn, rental service",
  openGraph: {
    title: "FlushJohn - Porta Potty Rentals",
    description:
      "Providing high-quality porta potty rental solutions for events of all sizes. Clean, affordable, and convenient.",
    url: websiteURL,
    type: "website",
    images: [
      {
        url: `${s3assets}/icon.svg`,
        alt: "FlushJohn Porta Potty Rentals",
      },
    ],
  },
};

const HomePage = () => <Home />;

export default HomePage;

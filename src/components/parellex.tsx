"use client";
import React from "react";
import { HeroParallax } from "./hero";

export function HeroParallaxDemo() {
    return <HeroParallax products={products} />;
  }
  export const products = [
    {
      title: "Moonbeam",
      link: "https://gomoonbeam.com",
      thumbnail:
        "/diggity-marketing-SB0WARG16HI-unsplash.jpg",
    },
    {
      title: "Cursor",
      link: "https://cursor.so",
      thumbnail:
        "/cytonn-photography-n95VMLxqM2I-unsplash.jpg",
    },
    {
      title: "Rogue",
      link: "https://userogue.com",
      thumbnail:
        "5741225.jpg",
    },
  
    {
      title: "Editorially",
      link: "https://editorially.org",
      thumbnail:
        "/1770.jpg",
    },
    {
      title: "Editrix AI",
      link: "https://editrix.ai",
      thumbnail:
        "/emily-bernal-BM3U_D2lygo-unsplash.jpg",
    },
    {
      title: "Pixel Perfect",
      link: "https://app.pixelperfect.quest",
      thumbnail:
        "/kenny-eliason-uq5RMAZdZG4-unsplash.jpg",
    },
  
    {
      title: "Algochurn",
      link: "https://algochurn.com",
      thumbnail:
        "/peter-stumpf-FhZEpxtTI_Y-unsplash.jpg",
    },
    {
      title: "Aceternity UI",
      link: "https://ui.aceternity.com",
      thumbnail:
        "/rear-view-programmer-working-all-night-long.jpg",
    },
    {
      title: "Tailwind Master Kit",
      link: "https://tailwindmasterkit.com",
      thumbnail:
        "/theme-photos-CGpifH3FjOA-unsplash.jpg",
    }
  ];
  
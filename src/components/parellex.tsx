"use client";
import React from "react";
import { HeroParallax } from "../components/hero";

export function HeroParallaxDemo() {
  return <HeroParallax products={products} />;
}
export const products = [
  {
    title: "Sass-Products",
    link: "https://gomoonbeam.com",
    thumbnail:
      "https://img.freepik.com/free-vector/saas-software-as-service-isometric-landing-page_107791-1770.jpg",
  },
  {
    title: "Web-Devlopmenet",
    link: "https://cursor.so",
    thumbnail:
      "	https://img.freepik.com/premium-photo/programming-…son-working-with-codes-computer_23-2150010150.jpg",
  },
  {
    title: "UI-UX",
    link: "https://userogue.com",
    thumbnail:
      "https://img.freepik.com/free-vector/gradient-ui-ux-elements-collection_79603-1923.jpg",
  },

  {
    title: "Sass-Sofware",
    link: "https://editorially.org",
    thumbnail:
      "https://img.freepik.com/free-vector/saas-software-as-service-isometric-landing-page_107791-1770.jpg",
  },
  {
    title: "Editrix AI",
    link: "https://editrix.ai",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/editrix.png",
  },
  {
    title: "Pixel Perfect",
    link: "https://app.pixelperfect.quest",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/pixelperfect.png",
  },

  {
    title: "Graphic-Design",
    link: "https://algochurn.com",
    thumbnail:
      "	https://img.freepik.com/free-vector/cartoon-graphic-design-landing-page_52683-70881.jpg",
  },
  {
    title: "Word-Press",
    link: "https://ui.aceternity.com",
    thumbnail:
      "	https://tutorialcrawler.com/wp-content/uploads/2020/06/Wordpress.jpg",
  },
  {
    title: "Migration",
    link: "https://tailwindmasterkit.com",
    thumbnail:
      "	https://img.freepik.com/free-vector/digital-data-migration-isometric-landing-page_107791-2683.jpg",
  },
  {
    title: "Digital Marketing",
    link: "https://smartbridgetech.com",
    thumbnail:
      "	https://img.freepik.com/free-vector/digital-marketing-landing-page_33099-1726.jpg",
  }
];

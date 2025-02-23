"use client";
import React from "react";
import {
  TextRevealCard,
  TextRevealCardDescription,
  TextRevealCardTitle,
} from "../components/revelcard";
import { FaPhoneAlt } from "react-icons/fa";

export function TextRevealCardPreview() {
  return (
    <div className="flex items-center justify-center bg-white h-[40rem] rounded-2xl w-full">
      <TextRevealCard
        text="You know the business"
        revealText="I know the chemistry"
      >
        <TextRevealCardTitle className="text-3xl font-bold">
          Got Some Awesome Ideas?
        </TextRevealCardTitle>
        <TextRevealCardDescription className="flex items-center justify-center mt-5">
          <a
            href="tel:+9957052223"
            className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition duration-300"
          >
            <FaPhoneAlt className="text-white" /> Just a Call Away
          </a>
        </TextRevealCardDescription>
      </TextRevealCard>
    </div>
  );
}

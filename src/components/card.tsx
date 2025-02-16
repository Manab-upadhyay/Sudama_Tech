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
        <TextRevealCardDescription className="flex items-center justify-center text-white text-lg gap-2">
          <FaPhoneAlt className="text-white cursor-pointer" /> Just a Call Away
        </TextRevealCardDescription>
      </TextRevealCard>
    </div>
  );
}

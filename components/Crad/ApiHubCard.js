import React from "react";
import Typography from "../Typegraphy/Typography";

export default function ApiHubCard({ image, heading, onClick }) {
  return (
    <div
      className="rounded-xl overflow-hidden cursor-pointer bg-blue-100 mx-2 border border-blue-200"
      onClick={() => onClick()}
    >
      <img
        className="w-full rounded-lg"
        src="https://picsum.photos/500/300"
        srcSet={`${image} 500w, ${image} 450w, ${image} 400w`}
        sizes="(max-width: 500px) 500px, (max-width: 450px) 450px, 400px"
        alt="Slider Image"
      />
      <div className="p-2">
        <Typography variant="h4" text={heading} className="p-1 text-left" />
      </div>
    </div>
  );
}

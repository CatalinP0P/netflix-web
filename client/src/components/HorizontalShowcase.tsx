import React from "react";
import Containter from "./Containter";

export default function HorizontalShowcase({
  title,
  shows,
}: {
  title?: string;
  shows: any[];
}) {
  return (
    <div className="flex flex-col gap-1">
      <label>{title}</label>
      <div className="flex flex-row overflow-x-scroll"></div>
    </div>
  );
}

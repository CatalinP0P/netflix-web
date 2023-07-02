import React from "react";

export default function Containter({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={"max-w-[1200px] w-full px-2 mx-auto " + className}>
      {children}
    </div>
  );
}

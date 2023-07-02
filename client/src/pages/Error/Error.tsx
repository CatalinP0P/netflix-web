import React from "react";

export default function Error() {
  return (
    <div className="fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
      <label className="text-customred font-semibold text-6xl">
        ERROR 404: Page not found
      </label>
    </div>
  );
}

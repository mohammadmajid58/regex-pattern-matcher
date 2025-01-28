import React from "react";

const RegexPanelSkeleton = () => {
  return (
    <div className="animate-pulse">
      <div className="grid grid-cols-2 gap-2 mb-4">
        <div className="h-10 bg-gray-200 rounded"></div>
        <div className="h-10 bg-gray-200 rounded"></div>
      </div>

      <div className="space-y-4">
        <div className="h-[500px] bg-gray-200 rounded"></div>
      </div>
    </div>
  );
};

export { RegexPanelSkeleton };

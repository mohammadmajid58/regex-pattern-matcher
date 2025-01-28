"use client";

import clsx from "clsx";
import React from "react";

import { useRegexStore } from "@/app/store/store";

const ModeSelector = () => {
  const mode = useRegexStore((state) => state.viewMode);
  const setMode = useRegexStore((state) => state.setViewMode);

  return (
    <div className="grid grid-cols-2 gap-2 mb-4">
      <button
        className={clsx("py-2 px-4 rounded", {
          "bg-blue-500 text-white": mode === "edit",
          "bg-gray-200": mode !== "edit",
        })}
        onClick={() => setMode("edit")}
      >
        Edit Mode
      </button>
      <button
        className={clsx("py-2 px-4 rounded", {
          "bg-blue-500 text-white": mode === "approve",
          "bg-gray-200": mode !== "approve",
        })}
        onClick={() => setMode("approve")}
      >
        Approve Mode
      </button>
    </div>
  );
};

export { ModeSelector };

"use client";

import React from "react";
import { ModeSelector } from "./components/mode-selector";
import { useRegexStore } from "@/app/store/store";
import { EditPanel } from "./edit-panel";
import { ApprovePanel } from "./approve-panel";

const RegexPanel = () => {
  const mode = useRegexStore((state) => state.viewMode);

  return (
    <div>
      <ModeSelector />

      <div className="mt-4">
        {mode === "edit" && <EditPanel />}
        {mode === "approve" && <ApprovePanel />}
      </div>
    </div>
  );
};

export { RegexPanel };

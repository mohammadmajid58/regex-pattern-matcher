"use client";

import React from "react";
import { useRegexStore } from "@/app/store/store";

interface SelectPatternProps {
  setSelectedPatternId: (id: string) => void;
}

const SelectPattern = ({ setSelectedPatternId }: SelectPatternProps) => {
  const patterns = useRegexStore((state) => state.patterns);
  return (
    <select
      className="w-full p-2 border border-gray-300 rounded-md"
      name="pattern"
      id="pattern"
      onChange={(e) => {
        const pattern = patterns.find((p) => p.expression === e.target.value);
        setSelectedPatternId(pattern?.id || "");
      }}
    >
      <option value="">Select a pattern</option>
      {patterns.map((pattern) => (
        <option key={pattern.id} value={pattern.expression}>
          {pattern.expression}
        </option>
      ))}
    </select>
  );
};

export default SelectPattern;

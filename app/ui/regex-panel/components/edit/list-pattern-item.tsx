"use client";

import { useRegexStore } from "@/app/store/store";
import { RegexPattern } from "@/app/store/types";
import { useState } from "react";
import { Trash2, Edit2, X } from "lucide-react";
import { EditPattern } from "./edit-pattern";

interface PatternItemProps {
  pattern: RegexPattern;
}

const ListPatternItem = ({ pattern }: PatternItemProps) => {
  const deletePattern = useRegexStore((state) => state.deletePattern);

  const [mode, setMode] = useState<"view" | "edit">("view");
  return (
    <div className="py-1 px-6 bg-gray-100 rounded flex justify-between items-center h-16">
      {mode === "edit" ? (
        <EditPattern pattern={pattern} onDone={() => setMode("view")} />
      ) : (
        <div>{pattern.expression}</div>
      )}

      <div className="flex gap-3">
        <button
          className="text-yellow-600 hover:text-yellow-700"
          onClick={() =>
            setMode((m) => {
              return m === "view" ? "edit" : "view";
            })
          }
        >
          {mode === "edit" ? (
            <X className="size-5" />
          ) : (
            <Edit2 className="size-4" />
          )}
        </button>
        <button
          className="text-red-500 hover:text-red-600"
          onClick={() => deletePattern(pattern.id)}
        >
          <Trash2 className="size-4" />
        </button>
      </div>
    </div>
  );
};

export { ListPatternItem };

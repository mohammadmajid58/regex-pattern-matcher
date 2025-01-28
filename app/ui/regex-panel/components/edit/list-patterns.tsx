"use client";

import { useRegexStore } from "@/app/store/store";
import { ListPatternItem } from "./list-pattern-item";

const ListPatterns = () => {
  const patterns = useRegexStore((state) => state.patterns);

  const numPatterns = patterns.length;

  return (
    <div>
      <h2 className="text-lg font-bold mb-2">Patterns ({numPatterns})</h2>
      <div>
        {patterns.map((pattern) => (
          <div key={pattern.id} className="mb-2">
            <ListPatternItem pattern={pattern} />
          </div>
        ))}
      </div>
    </div>
  );
};

export { ListPatterns };

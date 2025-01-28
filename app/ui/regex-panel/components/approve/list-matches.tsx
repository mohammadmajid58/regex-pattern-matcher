"use client";

import { useRegexStore } from "@/app/store/store";
import { ListMatchItem } from "./list-match-item";
import { RegexPattern } from "@/app/store/types";

interface ListMatchesProps {
  patternId: string;
}

const ListMatches = ({ patternId }: ListMatchesProps) => {
  const getPatternById = useRegexStore((state) => state.getPatternById);

  const pattern = getPatternById(patternId);
  const matches = useRegexStore((state) => state.matches);

  if (!pattern) return null;

  const error = pattern.error;
  const patternMatches = matches.filter((m) => m.patternId === pattern.id);
  const numMatches = patternMatches.length;

  return (
    <div>
      <h2 className="text-lg font-bold mb-2">Matches ({numMatches})</h2>
      {error && <p className="text-red-500 mb-2">{error}</p>}
      <div>
        {patternMatches.map((match) => (
          <div key={match.id} className="mb-2">
            <ListMatchItem match={match} />
          </div>
        ))}
      </div>
    </div>
  );
};

export { ListMatches };

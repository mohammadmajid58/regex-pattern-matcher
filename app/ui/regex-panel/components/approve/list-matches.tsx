"use client";

import { useRegexStore } from "@/app/store/store";
import { ListMatchItem } from "./list-match-item";

interface ListMatchesProps {
  patternId: string;
}

const ListMatches = ({ patternId }: ListMatchesProps) => {
  const matches = useRegexStore((state) => state.matches);

  return (
    <div>
      <h2 className="text-lg font-bold mb-2">Matches</h2>
      <div>
        {matches
          .filter((m) => m.patternId === patternId)
          .map((match) => (
            <div key={match.id} className="mb-2">
              <ListMatchItem match={match} />
            </div>
          ))}
      </div>
    </div>
  );
};

export { ListMatches };

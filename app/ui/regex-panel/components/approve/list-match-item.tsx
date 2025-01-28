"use client";

import { useRegexStore } from "@/app/store/store";
import { RegexMatch } from "@/app/store/types";

interface ListMatchItemProps {
  match: RegexMatch;
}

const ListMatchItem = ({ match }: ListMatchItemProps) => {
  const approveMatch = useRegexStore((state) => state.approveMatch);

  const isApproved = match.status === "approved";

  return (
    <div className="py-1 px-6 bg-gray-100 rounded flex justify-between items-center h-16">
      <div>{match.text}</div>

      {isApproved && <div className="text-black-500">Approved</div>}
      {!isApproved && (
        <button
          className="py-1 px-2 rounded bg-green-500 text-white hover:bg-green-600"
          onClick={() => approveMatch(match.id)}
        >
          Approve
        </button>
      )}
    </div>
  );
};

export { ListMatchItem };

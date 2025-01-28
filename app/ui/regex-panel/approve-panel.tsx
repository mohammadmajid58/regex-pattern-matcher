"use client";

import React, { useState } from "react";

import SelectPattern from "./components/approve/select-pattern";
import { ListMatches } from "./components/approve/list-matches";

const ApprovePanel = () => {
  const [selectedPatternId, setSelectedPatternId] = useState("");

  return (
    <div className="space-y-4">
      <SelectPattern setSelectedPatternId={setSelectedPatternId} />
      {selectedPatternId && <ListMatches patternId={selectedPatternId} />}
    </div>
  );
};

export { ApprovePanel };

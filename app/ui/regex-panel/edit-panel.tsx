"use client";

import React from "react";
import AddPattern from "./components/edit/add-pattern";
import { ListPatterns } from "./components/edit/list-patterns";

const EditPanel = () => {
  return (
    <div className="space-y-4">
      <ListPatterns />
      <AddPattern />
    </div>
  );
};

export { EditPanel };

"use client";

import React from "react";
import { useRegexStore } from "@/app/store/store";
import { ExpressionInput } from "./expression-input";

const AddPattern = () => {
  const addPattern = useRegexStore((state) => state.createPattern);

  return (
    <ExpressionInput
      onSubmit={addPattern}
      submitButtonLabel="Add"
      placeholder="Add new pattern"
    />
  );
};

export default AddPattern;

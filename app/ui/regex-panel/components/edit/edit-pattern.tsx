"use client";

import { useRegexStore } from "@/app/store/store";
import { RegexPattern } from "@/app/store/types";
import { ExpressionInput } from "./expression-input";

interface EditPatternProps {
  pattern: RegexPattern;
  onDone?: () => void;
}

const EditPattern = ({ pattern, onDone }: EditPatternProps) => {
  const updatePattern = useRegexStore((state) => state.updatePattern);

  const editPattern = (updatedPattern: string) => {
    updatePattern({ ...pattern, expression: updatedPattern });
    onDone && onDone();
  };

  return (
    <ExpressionInput
      onSubmit={editPattern}
      submitButtonLabel="Update"
      initialExpression={pattern.expression}
      placeholder="Edit pattern"
    />
  );
};

export { EditPattern };

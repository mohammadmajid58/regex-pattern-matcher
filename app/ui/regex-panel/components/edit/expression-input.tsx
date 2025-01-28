import clsx from "clsx";
import { useState } from "react";

import { verifyRegexExpression } from "@/app/store/utils/verify-regex-expression";

interface ExpressionInputProps {
  onSubmit: (expression: string) => void;
  submitButtonLabel: string;
  placeholder?: string;
  initialExpression?: string;
}

const ExpressionInput = ({
  onSubmit,
  submitButtonLabel,
  initialExpression,
  placeholder,
}: ExpressionInputProps) => {
  const [expression, setExpression] = useState(initialExpression || "");
  const [isValid, setIsValid] = useState(true);

  const updateExpression = (newExpression: string) => {
    setExpression(newExpression);

    if (newExpression === "") {
      setIsValid(true);
      return;
    }

    setIsValid(verifyRegexExpression(newExpression));
  };

  return (
    <>
      <form className="flex items-center gap-2">
        <input
          type="text"
          placeholder={placeholder}
          value={expression}
          onChange={(e) => updateExpression(e.target.value)}
          className={clsx("py-2 px-4 rounded border w-full", {
            "border-red-500 ring-red-500 focus:outline-none focus-visible:ring-1 focus-visible:ring-red-500":
              !isValid,
          })}
        />
        <button
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            if (isValid && expression !== "") {
              setExpression("");
              onSubmit(expression);
            }
          }}
          disabled={!isValid || expression === ""}
          className="py-2 px-4 rounded bg-blue-500 text-white disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {submitButtonLabel}
        </button>
      </form>
    </>
  );
};

export { ExpressionInput };

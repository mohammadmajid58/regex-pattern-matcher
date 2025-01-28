import { verifyRegexExpression } from "./verify-regex-expression";

describe("verifyRegexExpression", () => {
  const basicValidExpressions = [
    ["^[a-zA-Z0-9]+$", "alphanumeric string"],
    ["\\w+", "word characters"],
    ["\\d{3}-\\d{2}-\\d{4}", "SSN format"],
    ["[a-z]+@[a-z]+\\.[a-z]{2,3}", "simple email"],
    ["(https?:\\/\\/)?([\\da-z\\.-]+)\\.([a-z\\.]{2,6})", "URL"],
    [
      "^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{8,}$",
      "password with letters and numbers",
    ],
    ["", "empty pattern"],
  ];

  basicValidExpressions.forEach(([expr, description]) => {
    it(`should return true for '${expr}' - ${description}`, () => {
      expect(verifyRegexExpression(expr)).toBe(true);
    });
  });

  const invalidExpressions = [
    ["[", "unclosed character class"],
    ["(", "unclosed group"],
    ["\\", "incomplete escape"],
    ["?*+", "invalid quantifier sequence"],
    ["[a-z", "unclosed character class"],
    ["(hello", "unclosed parenthesis"],
  ];

  invalidExpressions.forEach(([expr, description]) => {
    it(`should return false for '${expr}' - ${description}`, () => {
      expect(verifyRegexExpression(expr)).toBe(false);
    });
  });

  const lookAroundExpressions = [
    ["(?=\\d{3})", "positive lookahead"],
    ["(?<=\\w)\\d+", "positive lookbehind"],
    ["(?<!\\d)\\w+", "negative lookbehind"],
    ["(?!\\s).", "negative lookahead"],
  ];

  lookAroundExpressions.forEach(([expr, description]) => {
    it(`should return true for '${expr}' - ${description}`, () => {
      expect(verifyRegexExpression(expr)).toBe(true);
    });
  });
});

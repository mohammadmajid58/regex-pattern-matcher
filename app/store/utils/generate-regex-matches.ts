import { RegexMatch, RegexPattern } from "../types";
import { generateId } from "./generate-id";

const generateRegexMatches = (
  pattern: RegexPattern,
  text: string
): RegexMatch[] => {
  const matches: RegexMatch[] = [];
  const regex = new RegExp(pattern.expression, "g");
  let match;

  while ((match = regex.exec(text)) !== null) {
    // Avoid infinite loops with zero-width matches
    if (match.index === regex.lastIndex) {
      regex.lastIndex++;
      continue;
    }

    matches.push({
      id: generateId(),
      patternId: pattern.id,
      text: match[0],
      status: "pending",
    });
  }

  return matches;
};

export { generateRegexMatches };

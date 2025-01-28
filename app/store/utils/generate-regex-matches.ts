import { RegexMatch, RegexPattern } from "../types";
import { generateId } from "./generate-id";

const generateRegexMatches = (
  pattern: RegexPattern,
  text: string,
  maxMatches = 200
): {
  matches: RegexMatch[];
  error?: string;
} => {
  try {
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

      // Check for memory safety limit
      if (matches.length >= maxMatches) {
        return { matches, error: `Match limit of ${maxMatches} reached.` };
      }
    }

    return { matches };
  } catch (err) {
    return {
      matches: [],
      error: `Failed to process regex pattern.`,
    };
  }
};

export { generateRegexMatches };

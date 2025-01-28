interface RegexPattern {
  id: string;
  expression: string;
}

type MatchStatus = "pending" | "approved";

interface RegexMatch {
  id: string;
  patternId: string;
  text: string;
  status: MatchStatus;
}

type ViewMode = "edit" | "approve";

export type { RegexPattern, RegexMatch, ViewMode };

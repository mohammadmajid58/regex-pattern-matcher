import { RegexMatch, RegexPattern, ViewMode } from "./types";

interface State {
  documentText: string;
  viewMode: ViewMode;
  patterns: RegexPattern[];
  matches: RegexMatch[];
}

type Actions = {
  setDocumentText: (documentText: string) => void;
  setViewMode: (viewMode: ViewMode) => void;
  createPattern: (pattern: string) => boolean;
  updatePattern: (pattern: RegexPattern) => boolean;
  deletePattern: (id: string) => void;
  refreshMatches: () => void;
  approveMatch: (id: string) => void;
};

import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { persist } from "zustand/middleware";

import { RegexMatch, RegexPattern, ViewMode } from "./types";
import { verifyRegexExpression } from "./utils/verify-regex-expression";
import { generateId } from "./utils/generate-id";
import { generateRegexMatches } from "./utils/generate-regex-matches";

interface State {
  documentText: string;
  viewMode: ViewMode;
  patterns: RegexPattern[];
  matches: RegexMatch[];
}

type Actions = {
  setDocumentText: (documentText: string) => void;
  setViewMode: (viewMode: ViewMode) => void;
  createPattern: (expression: string) => boolean;
  updatePattern: (pattern: RegexPattern) => boolean;
  deletePattern: (id: string) => void;
  refreshMatches: () => void;
  approveMatch: (id: string) => void;
};

const useRegexStore = create<State & Actions>()(
  immer(
    persist(
      (set, get) => ({
        documentText: "",
        viewMode: "edit",
        patterns: [],
        matches: [],
        setDocumentText: (newText) => {
          set((state) => {
            state.documentText = newText;
            state.matches = [];
          });
        },
        setViewMode: (newMode) => {
          set((state) => {
            state.viewMode = newMode;
          });
        },
        createPattern: (expression) => {
          const valid = verifyRegexExpression(expression);
          if (valid) {
            set((state) => {
              state.patterns.push({
                id: generateId(),
                expression: expression,
              });
            });
            get().refreshMatches();
          }
          return valid;
        },
        updatePattern: (pattern) => {
          const valid = verifyRegexExpression(pattern.expression);
          if (valid) {
            set((state) => {
              state.patterns = state.patterns.map((p: RegexPattern) =>
                p.id === pattern.id ? pattern : p
              );
            });
            get().refreshMatches();
          }
          return valid;
        },
        deletePattern: (id) => {
          set((state) => {
            state.patterns = state.patterns.filter(
              (p: RegexPattern) => p.id !== id
            );
            state.matches = state.matches.filter(
              (m: RegexMatch) => m.patternId !== id
            );
          });
          get().refreshMatches();
        },
        approveMatch: (id) => {
          set((state) => {
            state.matches = state.matches.map((m: RegexMatch) =>
              m.id === id ? { ...m, status: "approved" } : m
            );
          });
        },
        refreshMatches: () => {
          set((state) => {
            const text = state.documentText;

            // Keep approved matches
            const approvedMatches = state.matches.filter(
              (m: RegexMatch) => m.status === "approved"
            );

            // Generate new matches
            const newMatches = state.patterns.flatMap((pattern: RegexPattern) =>
              generateRegexMatches(pattern, text)
            );

            state.matches = approvedMatches.concat(newMatches);
          });
        },
      }),
      {
        name: "regex-pattern-matcher",
      }
    )
  )
);

export { useRegexStore };

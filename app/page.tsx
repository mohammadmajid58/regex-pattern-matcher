import { HydrationWrapper } from "./components/hydration-wrapper";

import { DocumentPanel } from "./ui/document-panel/document-panel";
import { DocumentPanelSkeleton } from "./ui/document-panel/document-panel-skeleton";
import { RegexPanel } from "./ui/regex-panel/regex-panel";
import { RegexPanelSkeleton } from "./ui/regex-panel/regex-panel-skeleton";

export default function Home() {
  return (
    <div className="mx-auto max-w-7xl grid grid-cols-12 gap-8">
      <div className="col-span-4">
        <HydrationWrapper fallback={<RegexPanelSkeleton />}>
          <RegexPanel />
        </HydrationWrapper>
      </div>
      <div className="col-span-8">
        <HydrationWrapper fallback={<DocumentPanelSkeleton />}>
          <DocumentPanel />
        </HydrationWrapper>
      </div>
    </div>
  );
}

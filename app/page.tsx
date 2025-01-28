import { HydrationWrapper } from "./components/hydration-wrapper";

import { DocumentPanel } from "./ui/document-panel/document-panel";
import { DocumentPanelSkeleton } from "./ui/document-panel/document-panel-skeleton";
import { RegexPanel } from "./ui/regex-panel/regex-panel";

export default function Home() {
  return (
    <div>
      <div className="mx-auto max-w-7xl grid grid-cols-12 gap-4">
        <div className="col-span-4">
          <RegexPanel />
        </div>
        <div className="col-span-8">
          <HydrationWrapper fallback={<DocumentPanelSkeleton />}>
            <DocumentPanel />
          </HydrationWrapper>
        </div>
      </div>
    </div>
  );
}

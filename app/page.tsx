import { DocumentPanel } from "./ui/document-panel/document-panel";
import { RegexPanel } from "./ui/regex-panel/regex-panel";

export default function Home() {
  return (
    <div>
      <div className="mx-auto max-w-7xl grid grid-cols-12 gap-4">
        <div className="col-span-4">
          <RegexPanel />
        </div>
        <div className="col-span-8">
          <DocumentPanel />
        </div>
      </div>
    </div>
  );
}

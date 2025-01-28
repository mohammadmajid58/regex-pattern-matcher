"use client";

import { useRegexStore } from "@/app/store/store";
import { LoremIpsum } from "lorem-ipsum";

const lorem = new LoremIpsum();

const DocumentPanel = () => {
  const documentText = useRegexStore((state) => state.documentText);
  const setDocumentText = useRegexStore((state) => state.setDocumentText);

  const setNewText = () => setDocumentText(lorem.generateParagraphs(7));

  const generateNewDocument = () => {
    // No need to confirm if there is no text
    if (documentText === "") {
      setNewText();
    } else {
      const confirm = window.confirm(
        "Are you sure you want to generate a new document? Your current document, both pending and approved regex matches will be lost."
      );
      if (confirm) setNewText();
    }
  };

  return (
    <>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold mb-4">Document:</h2>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
          onClick={generateNewDocument}
        >
          Generate new document
        </button>
      </div>
      <textarea
        value={documentText}
        rows={20}
        className="border border-gray-300 p-2 w-full rounded-md"
        onChange={(e) => setDocumentText(e.target.value)}
      />
    </>
  );
};

export { DocumentPanel };

const DocumentPanelSkeleton = () => {
  return (
    <>
      <div className="flex justify-between items-center mb-4">
        <div className="h-8 w-32 bg-gray-200 rounded-md animate-pulse" />
        <div className="h-10 w-40 bg-gray-200 rounded-md animate-pulse" />
      </div>
      <div className="h-[500px] w-full bg-gray-200 rounded-md animate-pulse" />
    </>
  );
};

export { DocumentPanelSkeleton };

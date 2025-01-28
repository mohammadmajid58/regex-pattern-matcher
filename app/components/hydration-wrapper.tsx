"use client";

import { useEffect, useState } from "react";

const HydrationWrapper = ({
  children,
  fallback,
}: {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}) => {
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    // since our store is local storage based, we should wait 300ms
    // to hydrate before rendering to avoid flickering of the
    // fallback / skeleton UI

    // simple implementation, a more robust solution would be used
    // in a real-world application
    const timer = setTimeout(() => {
      setHydrated(true);
    }, 400);
    return () => clearTimeout(timer);
  }, []);

  if (hydrated) {
    return <>{children}</>;
  }

  if (fallback) {
    return <>{fallback}</>;
  }

  return <p>Loading...</p>;
};

export { HydrationWrapper };

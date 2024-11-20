'use client';

import { useEffect, useState } from 'react';
import LoadingBar from 'react-top-loading-bar';
import { usePathname, useSearchParams } from 'next/navigation';

export default function LoadingProgress() {
  const [progress, setProgress] = useState(0);
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    setProgress(100);
  }, [pathname, searchParams]);

  return (
    <LoadingBar
      color="#f11946"
      progress={progress}
      onLoaderFinished={() => setProgress(0)}
      height={3}
    />
  );
}
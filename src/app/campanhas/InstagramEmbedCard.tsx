"use client";

import { useEffect, useState } from "react";

interface Props {
  url: string;
}

export function InstagramEmbedCard({ url }: Props) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-full flex justify-center bg-gray-50/5 p-2 animate-pulse min-h-[400px]">
        <div className="w-full h-full bg-gray-200/20 rounded-lg"></div>
      </div>
    );
  }

  // Remove any trailing slashes and ensure embed/ is appended for iframe embed
  const embedUrl = url.endsWith('/') ? `${url}embed/` : `${url}/embed/`;

  return (
    <div className="w-full flex justify-center bg-gray-50/5 p-2" style={{ backgroundColor: 'var(--bg-surface)' }}>
      <iframe
        src={embedUrl}
        className="w-full max-w-md h-[400px] border-none rounded-lg"
        allowTransparency={true}
        allow="encrypted-media"
        loading="lazy"
        title="Instagram Embed"
      ></iframe>
    </div>
  );
}

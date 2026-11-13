import { useState } from 'react';
import { Layers } from 'lucide-react';

interface ResilientImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackTitle?: string;
}

export function ResilientImage({
  src,
  alt,
  className = '',
  fallbackTitle,
}: ResilientImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex flex-col items-center justify-center gap-3 bg-gradient-to-br from-[#0B1120] via-[#0F172A] to-[#1E1B4B] p-6 text-center ${className}`}
      >
        <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-blue-400/20 bg-blue-500/10 text-blue-400">
          <Layers className="h-6 w-6" aria-hidden="true" />
        </div>
        <span className="font-display text-sm font-semibold text-slate-200">
          {fallbackTitle || alt}
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={className}
      loading="lazy"
    />
  );
}

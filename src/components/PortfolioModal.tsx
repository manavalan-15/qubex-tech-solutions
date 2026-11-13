import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Check, Pause, Play, X } from 'lucide-react';
import { PortfolioProject } from '../data/portfolio';
import { ResilientImage } from './ResilientImage';

interface PortfolioModalProps {
  project: PortfolioProject | null;
  onClose: () => void;
  onInquireSimilar: (category: string, projectTitle: string) => void;
}

function InteractiveVideoReelPreview({ project }: { project: PortfolioProject }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId = 0;
    let startTime = performance.now();

    const scenes = project.videoSpec?.scenes ?? [
      '00:00 — Brand Reveal',
      '00:15 — Motion Graphics Sequence',
      '00:30 — Product Showcase',
      '00:45 — End Card CTA',
    ];

    const renderFrame = (now: number) => {
      const elapsed = isPlaying ? ((now - startTime) / 1000) % 12 : (progress / 100) * 12;
      const pct = Math.min(100, Math.round((elapsed / 12) * 100));
      if (isPlaying) {
        setProgress(pct);
      }

      const width = canvas.width;
      const height = canvas.height;

      // Deep dark studio gradient canvas
      const grad = ctx.createLinearGradient(0, 0, width, height);
      grad.addColorStop(0, '#05070D');
      grad.addColorStop(0.55, '#0B1736');
      grad.addColorStop(1, '#1E1B4B');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, width, height);

      // Animated kinetic geometric bars
      for (let i = 0; i < 6; i++) {
        const wave = Math.sin(elapsed * 2.2 + i * 0.85);
        const barH = 40 + (wave + 1) * 55;
        const x = 60 + i * 110;
        const y = height - barH - 44;
        ctx.fillStyle = i % 2 === 0 ? 'rgba(59, 130, 246, 0.35)' : 'rgba(139, 92, 246, 0.35)';
        ctx.fillRect(x, y, 72, barH);
      }

      // Sweep line
      const sweepX = ((elapsed / 12) * width) % width;
      ctx.strokeStyle = 'rgba(96, 165, 250, 0.45)';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(sweepX, 0);
      ctx.lineTo(sweepX, height);
      ctx.stroke();

      // Active scene caption
      const sceneIndex = Math.min(scenes.length - 1, Math.floor((elapsed / 12) * scenes.length));
      ctx.fillStyle = '#93C5FD';
      ctx.font = '600 13px "JetBrains Mono", monospace';
      ctx.fillText('QUBEX MOTION STUDIO · REEL PREVIEW', 36, 48);

      ctx.fillStyle = '#FFFFFF';
      ctx.font = '700 28px "Outfit", sans-serif';
      ctx.fillText(project.title, 36, 94);

      ctx.fillStyle = '#CBD5E1';
      ctx.font = '500 16px "Plus Jakarta Sans", sans-serif';
      ctx.fillText(scenes[sceneIndex], 36, 130);

      // Timecode
      const secs = Math.floor(elapsed);
      ctx.fillStyle = '#E2E8F0';
      ctx.font = '500 13px "JetBrains Mono", monospace';
      ctx.fillText(
        `00:${secs.toString().padStart(2, '0')} / ${project.videoSpec?.duration ?? '00:45'}`,
        width - 140,
        48,
      );

      if (isPlaying) {
        animId = requestAnimationFrame(renderFrame);
      }
    };

    animId = requestAnimationFrame(renderFrame);
    return () => cancelAnimationFrame(animId);
  }, [isPlaying, project, progress]);

  return (
    <div className="overflow-hidden rounded-xl border border-white/10 bg-[#05070D]">
      <canvas
        ref={canvasRef}
        width={760}
        height={360}
        className="aspect-[16/9] w-full object-cover"
      />
      <div className="flex items-center justify-between gap-4 border-t border-white/10 bg-[#080D1B] px-4 py-3">
        <button
          type="button"
          onClick={() => setIsPlaying((p) => !p)}
          className="inline-flex min-h-[36px] items-center gap-1.5 rounded-lg bg-blue-600/20 px-3 py-1.5 text-xs font-semibold text-blue-300 transition-colors hover:bg-blue-600/30"
        >
          {isPlaying ? (
            <>
              <Pause className="h-3.5 w-3.5" aria-hidden="true" />
              <span>Pause Reel</span>
            </>
          ) : (
            <>
              <Play className="h-3.5 w-3.5" aria-hidden="true" />
              <span>Play Reel</span>
            </>
          )}
        </button>

        <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-white/10">
          <div
            className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-150"
            style={{ width: `${progress}%` }}
          />
        </div>

        <span className="font-mono text-xs text-slate-400 tabular-nums">
          {project.videoSpec?.fps ?? '60 FPS'} · {project.videoSpec?.aspect ?? '16:9'}
        </span>
      </div>
    </div>
  );
}

function InteractivePhotoComparison({ project }: { project: PortfolioProject }) {
  const [sliderPos, setSliderPos] = useState(55);

  return (
    <div className="space-y-3">
      <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-white/10 bg-[#05070D]">
        {/* Unretouched RAW base view */}
        <div className="absolute inset-0">
          <ResilientImage
            src={project.imageUrl}
            alt={`${project.title} original capture`}
            fallbackTitle="Original Raw Frame"
            className="h-full w-full object-cover brightness-75 contrast-75 saturate-50"
          />
          <span className="absolute top-3 left-3 rounded-md bg-black/75 px-2.5 py-1 text-xs font-medium text-slate-300">
            Before · Raw Capture
          </span>
        </div>

        {/* Retouched After view clipped by slider */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
        >
          <ResilientImage
            src={project.imageUrl}
            alt={`${project.title} retouched studio grade`}
            fallbackTitle="Studio Retouched Frame"
            className="h-full w-full object-cover brightness-105 contrast-110 saturate-115"
          />
          <span className="absolute top-3 right-3 rounded-md bg-blue-600/90 px-2.5 py-1 text-xs font-medium text-white">
            After · Studio Retouch
          </span>
        </div>

        {/* Divider Line */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-0 bottom-0 w-0.5 bg-blue-400 shadow-[0_0_12px_rgba(96,165,250,0.9)]"
          style={{ left: `${sliderPos}%` }}
        />
      </div>

      <label className="flex items-center justify-between gap-4 text-xs text-slate-300">
        <span>Drag to compare Raw vs. Retouched</span>
        <input
          type="range"
          min={5}
          max={95}
          value={sliderPos}
          onChange={(e) => setSliderPos(Number(e.target.value))}
          aria-label="Before and after retouch comparison slider"
          className="w-48 accent-blue-500"
        />
      </label>
    </div>
  );
}

export function PortfolioModal({
  project,
  onClose,
  onInquireSimilar,
}: PortfolioModalProps) {
  useEffect(() => {
    if (!project) return;
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="portfolio-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-md"
      onClick={onClose}
    >
      <div
        className="glass-surface-elevated relative max-h-[92vh] w-full max-w-3xl overflow-y-auto rounded-2xl p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4 border-b border-white/10 pb-5">
          <div>
            <div className="flex flex-wrap items-center gap-2 text-xs text-slate-400">
              <span className="font-medium text-blue-400">
                {project.category}
              </span>
              <span aria-hidden="true">·</span>
              <span>{project.client}</span>
              <span aria-hidden="true">·</span>
              <span className="font-mono tabular-nums">{project.year}</span>
            </div>
            <h3
              id="portfolio-modal-title"
              className="mt-1.5 font-display text-2xl font-bold text-white"
            >
              {project.title}
            </h3>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close project preview"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-slate-300 transition-colors hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>

        {/* Media Viewer Area */}
        <div className="mt-6">
          {project.previewType === 'video-reel' ? (
            <InteractiveVideoReelPreview project={project} />
          ) : project.previewType === 'before-after' ? (
            <InteractivePhotoComparison project={project} />
          ) : (
            <div className="overflow-hidden rounded-xl border border-white/10">
              <ResilientImage
                src={project.imageUrl}
                alt={project.title}
                fallbackTitle={project.title}
                className="aspect-[16/10] w-full object-cover"
              />
            </div>
          )}
        </div>

        {/* Campaign Metrics if Marketing Project */}
        {project.campaignMetrics && (
          <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {project.campaignMetrics.map((metric) => (
              <div
                key={metric.label}
                className="rounded-xl border border-white/10 bg-white/5 p-3.5"
              >
                <div className="font-mono text-lg font-bold text-blue-400 tabular-nums">
                  {metric.value}
                </div>
                <div className="mt-0.5 text-xs text-slate-300">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-12">
          <div className="sm:col-span-7">
            <h4 className="font-display text-sm font-semibold text-white">
              Project Overview
            </h4>
            <p className="mt-2 text-sm leading-relaxed text-slate-300">
              {project.fullDescription}
            </p>
            <p className="mt-3 font-mono text-xs font-medium text-blue-300">
              Outcome: {project.outcomeMetric}
            </p>
          </div>

          <div className="sm:col-span-5">
            <h4 className="font-display text-sm font-semibold text-white">
              Deliverables
            </h4>
            <ul className="mt-2.5 space-y-2">
              {project.deliverables.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 text-sm text-slate-300"
                >
                  <Check
                    className="mt-0.5 h-4 w-4 shrink-0 text-blue-400"
                    aria-hidden="true"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-end gap-3 border-t border-white/10 pt-5">
          <button
            type="button"
            onClick={onClose}
            className="min-h-[42px] rounded-xl border border-white/10 px-4 py-2 text-sm font-medium text-slate-300 transition-colors hover:bg-white/5 hover:text-white whitespace-nowrap shrink-0"
          >
            Close
          </button>
          <button
            type="button"
            onClick={() => {
              onInquireSimilar(project.category, project.title);
              onClose();
            }}
            className="inline-flex min-h-[42px] items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition-transform hover:scale-[1.02] whitespace-nowrap shrink-0"
          >
            <span>Start a Similar Project</span>
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  );
}

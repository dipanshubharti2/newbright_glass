import React, { useState } from 'react';
import {
  Video,
  Image as ImageIcon,
  Play,
  X,
  Volume2,
  VolumeX,
  Gauge,
  ArrowRight
} from 'lucide-react';
import { FACTORY_MEDIA, GalleryMediaItem } from '../data/galleryAndClientsData.ts';

export const FactoryGallery: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [selectedMedia, setSelectedMedia] = useState<GalleryMediaItem | null>(null);
  const [isPlayingVideo, setIsPlayingVideo] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  const categories = [
    { id: 'all', label: 'All Factory Media' },
    { id: 'video', label: 'Video Tours' },
    { id: 'furnace', label: 'Furnaces' },
    { id: 'artisan', label: 'Artisan Works' },
    { id: 'lehr', label: 'Annealing' },
    { id: 'packaging', label: 'Logistics' },
  ];

  const filteredMedia = FACTORY_MEDIA.filter((item) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'video') return item.type === 'video';
    return item.category === activeFilter;
  });

  return (
    <section id="gallery" className="py-14 sm:py-18 bg-[var(--bg-primary)] relative overflow-hidden transition-colors duration-300">
      {/* Decorative ambient lighting */}
      <div
        className="absolute top-1/4 -right-32 w-80 h-80 rounded-full blur-3xl pointer-events-none opacity-10"
        style={{ backgroundColor: 'var(--accent)' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-amber-800 bg-amber-50 px-3.5 py-1.5 rounded-full border border-amber-200 uppercase tracking-widest mb-2 shadow-xs">
              <Video className="w-3.5 h-3.5 text-amber-600" />
              <span>Inside Firozabad Works</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[var(--text-primary)] tracking-tight">
              Factory & Video Gallery
            </h2>
            <p className="text-xs sm:text-sm text-[var(--text-secondary)] mt-1">
              Click any thumbnail to inspect high-resolution footage and live furnace telemetry.
            </p>
          </div>

          {/* Compact Telemetry Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-amber-50/90 border border-amber-200 text-xs text-amber-950 self-start sm:self-auto font-mono shadow-xs">
            <Gauge className="w-3.5 h-3.5 text-amber-600 shrink-0" />
            <span>1,520°C Furnace · 45,000+ Units/Day</span>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-3 mb-6 scrollbar-none">
          {categories.map((cat) => {
            const isActive = activeFilter === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveFilter(cat.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap shrink-0 transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#0F172A] text-white font-semibold shadow-sm'
                    : 'bg-white text-[var(--text-secondary)] hover:text-[var(--text-primary)] border border-[var(--border-subtle)]'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Small Compact Grid (6 columns on desktop, 3 on tablet, 2 on mobile) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {filteredMedia.map((media) => (
            <div
              key={media.id}
              onClick={() => setSelectedMedia(media)}
              className="glass-card rounded-xl overflow-hidden group cursor-pointer border border-[var(--border-card)] hover:border-amber-300 transition-all flex flex-col justify-between hover:shadow-md"
            >
              {/* Compact Thumbnail Container */}
              <div className="relative h-28 sm:h-32 w-full overflow-hidden bg-slate-900/20">
                <img
                  src={media.thumbnail}
                  alt={media.title}
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div
                  className="absolute inset-0 opacity-50 pointer-events-none"
                  style={{
                    background: 'linear-gradient(to top, var(--bg-primary) 0%, transparent 60%)',
                  }}
                />

                {/* Compact Media Type Badge */}
                <div className="absolute top-2 left-2 flex items-center gap-1 px-1.5 py-0.5 rounded bg-white/95 backdrop-blur-md border border-slate-200 text-[10px] font-medium text-slate-800 shadow-xs">
                  {media.type === 'video' ? (
                    <>
                      <Video className="w-2.5 h-2.5 text-red-500" />
                      <span className="font-semibold text-red-700">{media.duration}</span>
                    </>
                  ) : (
                    <>
                      <ImageIcon className="w-2.5 h-2.5 text-amber-600" />
                      <span className="font-semibold text-amber-900">Photo</span>
                    </>
                  )}
                </div>

                {/* Play Button Overlay for Videos */}
                {media.type === 'video' && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-9 h-9 rounded-full bg-red-600 text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-all">
                      <Play className="w-4 h-4 fill-current ml-0.5" />
                    </div>
                  </div>
                )}
              </div>

              {/* Compact Caption */}
              <div className="p-2.5 flex-1 flex flex-col justify-between space-y-1">
                <h3 className="font-serif text-xs font-bold text-[var(--text-primary)] group-hover:text-amber-700 transition-colors line-clamp-1 leading-snug">
                  {media.title}
                </h3>
                <div className="flex items-center justify-between text-[10px] text-[var(--text-secondary)] pt-1 border-t border-[var(--border-subtle)]">
                  <span className="truncate">{media.categoryLabel}</span>
                  <ArrowRight className="w-2.5 h-2.5 text-amber-600 opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Lightbox / Fullscreen Video Player Modal */}
      {selectedMedia && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
          onClick={() => setSelectedMedia(null)}
        >
          <div
            className="relative max-w-4xl w-full glass-panel border border-[var(--border-strong)] rounded-2xl overflow-hidden shadow-2xl bg-[var(--bg-primary)] flex flex-col max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-4 bg-[var(--bg-panel)] border-b border-[var(--border-subtle)] flex items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[var(--accent)]" />
                <h4 className="font-serif text-base sm:text-lg font-bold text-[var(--text-primary)]">
                  {selectedMedia.title}
                </h4>
              </div>
              <button
                onClick={() => setSelectedMedia(null)}
                className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-[var(--text-primary)] transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Media Content Area */}
            <div className="relative flex-1 bg-black overflow-hidden flex items-center justify-center min-h-[280px] sm:min-h-[420px]">
              <img
                src={selectedMedia.thumbnail}
                alt={selectedMedia.title}
                className="w-full h-full object-cover max-h-[55vh]"
                referrerPolicy="no-referrer"
              />

              {/* If Video: Interactive Video Player Controls Overlay */}
              {selectedMedia.type === 'video' && (
                <div className="absolute inset-0 bg-black/40 flex flex-col justify-between p-4 sm:p-6">
                  {/* Top Live Feed Badge */}
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full bg-red-600/90 text-white text-[10px] font-mono tracking-widest uppercase font-bold flex items-center gap-1.5 shadow-md">
                      <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                      <span>FACTORY CAMERA FEED · 1080P</span>
                    </span>
                    <button
                      onClick={() => setIsMuted(!isMuted)}
                      className="p-2 rounded-lg bg-black/60 text-white hover:bg-black/80 transition-colors"
                      title={isMuted ? 'Unmute Factory Sound' : 'Mute'}
                    >
                      {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                    </button>
                  </div>

                  {/* Center Play/Pause Trigger */}
                  <div className="flex items-center justify-center">
                    <button
                      onClick={() => setIsPlayingVideo(!isPlayingVideo)}
                      className="w-16 h-16 rounded-full bg-[var(--accent)] text-[var(--accent-text)] flex items-center justify-center shadow-2xl hover:scale-110 transition-transform cursor-pointer"
                    >
                      {isPlayingVideo ? (
                        <div className="flex gap-1.5">
                          <span className="w-1.5 h-6 bg-current rounded" />
                          <span className="w-1.5 h-6 bg-current rounded" />
                        </div>
                      ) : (
                        <Play className="w-8 h-8 fill-current ml-1" />
                      )}
                    </button>
                  </div>

                  {/* Bottom Video Progress Bar */}
                  <div className="space-y-2 bg-black/70 p-3 rounded-xl backdrop-blur-md border border-white/10">
                    <div className="flex items-center justify-between text-xs text-white/80 font-mono">
                      <span>{isPlayingVideo ? '0:42' : '0:00'}</span>
                      <span className="text-[var(--accent)]">{selectedMedia.duration}</span>
                    </div>
                    <div className="w-full h-1.5 bg-white/20 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-[var(--accent)] transition-all duration-300"
                        style={{ width: isPlayingVideo ? '40%' : '0%' }}
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Modal Footer Description */}
            <div className="p-4 sm:p-5 bg-[var(--bg-panel)] space-y-2">
              <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                {selectedMedia.description}
              </p>
              <div className="pt-2 border-t border-[var(--border-subtle)] flex items-center justify-between text-xs">
                <span className="font-mono text-[var(--accent)] font-semibold">
                  {selectedMedia.specs}
                </span>
                <span className="text-[var(--text-secondary)] opacity-70">
                  New Bright Glass Works · Firozabad
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

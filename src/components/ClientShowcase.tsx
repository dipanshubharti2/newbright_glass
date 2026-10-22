import React from 'react';
import { Building2 } from 'lucide-react';

interface ClientLogo {
  id: string;
  name: string;
  logo: React.ReactNode;
}

export const ClientShowcase: React.FC = () => {
  const clientLogos: ClientLogo[] = [
    {
      id: 'taj',
      name: 'Taj Hotels & Resorts',
      logo: (
        <svg viewBox="0 0 160 60" className="h-9 w-auto fill-current" aria-label="Taj Hotels">
          {/* Taj Arch / Crown Crest */}
          <path d="M80 6 C74 13 69 19 62 21 C69 23 74 27 76 34 C78 27 83 23 90 21 C83 19 78 13 80 6 Z" fill="var(--accent)" />
          <path d="M72 17 C68 21 64 24 58 25 C64 27 68 30 70 35 C71 30 75 27 80 25 C75 24 71 21 72 17 Z" fill="var(--accent)" opacity="0.6" />
          <path d="M88 17 C84 21 80 24 74 25 C80 27 84 30 86 35 C87 30 91 27 96 25 C91 24 87 21 88 17 Z" fill="var(--accent)" opacity="0.6" />
          <text x="80" y="52" textAnchor="middle" fontFamily="'Playfair Display', serif" fontWeight="700" fontSize="16" letterSpacing="4">
            TAJ
          </text>
        </svg>
      ),
    },
    {
      id: 'radisson',
      name: 'Radisson Blu',
      logo: (
        <svg viewBox="0 0 180 60" className="h-8 w-auto fill-current" aria-label="Radisson Blu">
          <text x="90" y="32" textAnchor="middle" fontFamily="'Playfair Display', serif" fontWeight="700" fontSize="18" letterSpacing="1">
            Radisson
          </text>
          <text x="90" y="48" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="800" fontSize="11" letterSpacing="4" fill="var(--accent)">
            BLU
          </text>
        </svg>
      ),
    },
    {
      id: 'itc',
      name: 'ITC Hotels',
      logo: (
        <svg viewBox="0 0 160 60" className="h-9 w-auto fill-current" aria-label="ITC Hotels">
          {/* ITC Shield & Monogram */}
          <rect x="68" y="8" width="24" height="24" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none" />
          <text x="80" y="25" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="900" fontSize="11" letterSpacing="1">
            ITC
          </text>
          <text x="80" y="48" textAnchor="middle" fontFamily="'Cinzel', 'Playfair Display', serif" fontWeight="700" fontSize="11" letterSpacing="3">
            HOTELS
          </text>
        </svg>
      ),
    },
    {
      id: 'marriott',
      name: 'Marriott Hotels',
      logo: (
        <svg viewBox="0 0 160 60" className="h-8 w-auto fill-current" aria-label="Marriott">
          <path d="M72 12 L75 32 L80 16 L85 32 L88 12 L92 12 L87 36 L83 36 L80 23 L77 36 L73 36 L68 12 Z" fill="var(--accent)" />
          <text x="80" y="50" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="800" fontSize="10" letterSpacing="3">
            MARRIOTT
          </text>
        </svg>
      ),
    },
    {
      id: 'oberoi',
      name: 'The Oberoi Group',
      logo: (
        <svg viewBox="0 0 170 60" className="h-8 w-auto fill-current" aria-label="The Oberoi Group">
          {/* Floral star emblem */}
          <circle cx="85" cy="18" r="7" stroke="var(--accent)" strokeWidth="1.5" fill="none" />
          <circle cx="85" cy="18" r="3" fill="var(--accent)" />
          <text x="85" y="40" textAnchor="middle" fontFamily="'Playfair Display', serif" fontWeight="600" fontSize="14" letterSpacing="3">
            Oberoi
          </text>
          <text x="85" y="52" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="700" fontSize="7" letterSpacing="2" opacity="0.7">
            HOTELS & RESORTS
          </text>
        </svg>
      ),
    },
    {
      id: 'lemontree',
      name: 'Lemon Tree Hotels',
      logo: (
        <svg viewBox="0 0 170 60" className="h-8 w-auto fill-current" aria-label="Lemon Tree Hotels">
          <circle cx="85" cy="16" r="8" fill="#FBBF24" />
          <path d="M85 8 C88 5 92 6 92 6 C92 6 91 10 88 11" stroke="#059669" strokeWidth="1.5" fill="none" />
          <text x="85" y="38" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="800" fontSize="11" letterSpacing="1">
            lemon tree
          </text>
          <text x="85" y="49" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="600" fontSize="7" letterSpacing="3" opacity="0.7">
            HOTELS
          </text>
        </svg>
      ),
    },
    {
      id: 'homecentre',
      name: 'Home Centre',
      logo: (
        <svg viewBox="0 0 170 60" className="h-8 w-auto fill-current" aria-label="Home Centre">
          {/* House icon */}
          <path d="M85 10 L73 20 L77 20 L77 30 L93 30 L93 20 L97 20 Z" fill="var(--accent)" />
          <text x="85" y="46" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="900" fontSize="11" letterSpacing="2">
            home centre
          </text>
        </svg>
      ),
    },
    {
      id: 'westside',
      name: 'Westside Home (Tata)',
      logo: (
        <svg viewBox="0 0 170 60" className="h-8 w-auto fill-current" aria-label="Westside Home">
          <text x="85" y="33" textAnchor="middle" fontFamily="'Playfair Display', serif" fontWeight="800" fontSize="20" letterSpacing="3">
            WESTSIDE
          </text>
          <text x="85" y="48" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="600" fontSize="8" letterSpacing="4" fill="var(--accent)">
            HOME
          </text>
        </svg>
      ),
    },
    {
      id: 'tata',
      name: 'Tata Consultancy Services',
      logo: (
        <svg viewBox="0 0 160 60" className="h-8 w-auto fill-current" aria-label="TATA">
          <text x="80" y="30" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="900" fontSize="20" letterSpacing="4">
            TATA
          </text>
          <text x="80" y="46" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="600" fontSize="7" letterSpacing="2" opacity="0.75">
            CONSULTANCY SERVICES
          </text>
        </svg>
      ),
    },
    {
      id: 'diageo',
      name: 'Diageo Brands',
      logo: (
        <svg viewBox="0 0 160 60" className="h-8 w-auto fill-current" aria-label="Diageo">
          <text x="80" y="36" textAnchor="middle" fontFamily="'Playfair Display', serif" fontStyle="italic" fontWeight="700" fontSize="22" letterSpacing="1">
            DIAGEO
          </text>
        </svg>
      ),
    },
    {
      id: 'pernod',
      name: 'Pernod Ricard',
      logo: (
        <svg viewBox="0 0 180 60" className="h-8 w-auto fill-current" aria-label="Pernod Ricard">
          <circle cx="90" cy="16" r="6" stroke="var(--accent)" strokeWidth="1.5" fill="none" />
          <path d="M87 16 L93 16 M90 13 L90 19" stroke="var(--accent)" strokeWidth="1.5" />
          <text x="90" y="38" textAnchor="middle" fontFamily="'Playfair Display', serif" fontWeight="700" fontSize="13" letterSpacing="1">
            Pernod Ricard
          </text>
          <text x="90" y="49" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="600" fontSize="7" letterSpacing="2" opacity="0.7">
            CRÉATEURS DE CONVIVIALITÉ
          </text>
        </svg>
      ),
    },
    {
      id: 'gulf',
      name: 'Gulf Hospitality Supplies LLC',
      logo: (
        <svg viewBox="0 0 170 60" className="h-8 w-auto fill-current" aria-label="Gulf Hospitality">
          {/* Dubai Palm / Crown motif */}
          <path d="M85 8 L88 18 L96 14 L91 22 L99 24 L89 27 L85 34 L81 27 L71 24 L79 22 L74 14 L82 18 Z" fill="var(--accent)" />
          <text x="85" y="46" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="800" fontSize="9" letterSpacing="3">
            GULF HOSPITALITY
          </text>
          <text x="85" y="55" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="600" fontSize="6.5" letterSpacing="2" opacity="0.6">
            DUBAI · UAE
          </text>
        </svg>
      ),
    },
  ];

  return (
    <section id="clients" className="py-14 sm:py-16 bg-[var(--bg-secondary)] border-y border-[var(--border-subtle)] relative overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-[var(--accent)] uppercase tracking-widest mb-2">
            <Building2 className="w-3.5 h-3.5" />
            <span>Trusted By Industry Leaders</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[var(--text-primary)] tracking-tight">
            Our Clients & Partners
          </h2>
          <p className="text-xs sm:text-sm text-[var(--text-secondary)] mt-1.5">
            Direct glassware manufacturer to leading hotel chains, retail brands, and corporate enterprises.
          </p>
        </div>

        {/* Clean Logo Only Grid (12 Brand Logos, No Names, No Details) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
          {clientLogos.map((client) => (
            <div
              key={client.id}
              className="h-20 sm:h-22 rounded-xl glass-card flex items-center justify-center p-4 border border-[var(--border-subtle)] hover:border-[var(--border-strong)] transition-all group cursor-default"
              title={client.name}
              aria-label={client.name}
            >
              <div className="text-[var(--text-secondary)] opacity-70 group-hover:opacity-100 group-hover:text-[var(--text-primary)] group-hover:scale-105 transition-all duration-300 flex items-center justify-center w-full">
                {client.logo}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

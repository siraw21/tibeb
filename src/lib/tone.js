export const TONES = {
  gold: {
    badgeBg: 'bg-gold-pale',
    badgeText: 'text-gold-deep',
    solidBg: 'bg-gold',
    solidText: 'text-ink',
    ring: 'ring-gold',
    border: 'border-gold-deep',
    dot: 'bg-gold',
    bar: 'bg-gold',
  },
  forest: {
    badgeBg: 'bg-forest-pale',
    badgeText: 'text-forest-deep',
    solidBg: 'bg-forest',
    solidText: 'text-on-ink',
    ring: 'ring-forest',
    border: 'border-forest-deep',
    dot: 'bg-forest',
    bar: 'bg-forest',
  },
  rust: {
    badgeBg: 'bg-rust-pale',
    badgeText: 'text-rust-deep',
    solidBg: 'bg-rust',
    solidText: 'text-on-ink',
    ring: 'ring-rust',
    border: 'border-rust-deep',
    dot: 'bg-rust',
    bar: 'bg-rust',
  },
  sky: {
    badgeBg: 'bg-sky-pale',
    badgeText: 'text-sky-deep',
    solidBg: 'bg-sky',
    solidText: 'text-on-ink',
    ring: 'ring-sky',
    border: 'border-sky-deep',
    dot: 'bg-sky',
    bar: 'bg-sky',
  },
}

export const getTone = (tone) => TONES[tone] || TONES.gold

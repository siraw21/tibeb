const bgFromInitials = (initials = '') => {
  const palette = ['bg-gold-pale text-gold-deep', 'bg-forest-pale text-forest-deep', 'bg-rust-pale text-rust-deep', 'bg-sky-pale text-sky-deep']
  const idx = initials.charCodeAt(0) ? initials.charCodeAt(0) % palette.length : 0
  return palette[idx]
}

export default function Avatar({ initials = '?', size = 'md', className = '' }) {
  const sizes = { sm: 'w-7 h-7 text-xs', md: 'w-10 h-10 text-sm', lg: 'w-14 h-14 text-base' }
  return (
    <div
      className={`inline-flex items-center justify-center rounded-full font-semibold font-display shrink-0 ${bgFromInitials(initials)} ${sizes[size]} ${className}`}
    >
      {initials}
    </div>
  )
}

import { Link } from 'react-router-dom'

const variants = {
  primary: 'bg-gold text-ink hover:bg-gold-deep hover:text-on-ink',
  dark: 'bg-ink text-on-ink hover:bg-ink-2',
  outline: 'bg-transparent text-ink border border-ink/25 hover:border-ink',
  outlineOnDark: 'bg-transparent text-on-ink border border-on-ink/30 hover:border-on-ink',
  ghost: 'bg-transparent text-ink-soft hover:bg-paper-2',
  danger: 'bg-transparent text-rust-deep border border-rust/40 hover:bg-rust-pale',
}

const sizes = {
  sm: 'text-sm px-3.5 py-1.5 gap-1.5',
  md: 'text-sm px-5 py-2.5 gap-2',
  lg: 'text-base px-6 py-3.5 gap-2',
}

export default function Button({
  as,
  to,
  href,
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  ...props
}) {
  const base = `inline-flex items-center justify-center font-medium rounded-full transition-colors duration-150 whitespace-nowrap disabled:opacity-50 disabled:pointer-events-none ${variants[variant]} ${sizes[size]} ${className}`

  if (to) {
    return (
      <Link to={to} className={base} {...props}>
        {children}
      </Link>
    )
  }
  if (href) {
    return (
      <a href={href} className={base} {...props}>
        {children}
      </a>
    )
  }
  const Cmp = as || 'button'
  return (
    <Cmp className={base} {...props}>
      {children}
    </Cmp>
  )
}

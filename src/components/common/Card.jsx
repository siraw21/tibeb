export default function Card({ children, className = '', as = 'div', ...props }) {
  const Cmp = as
  return (
    <Cmp
      className={`bg-card border border-line rounded-[var(--radius-card)] ${className}`}
      {...props}
    >
      {children}
    </Cmp>
  )
}

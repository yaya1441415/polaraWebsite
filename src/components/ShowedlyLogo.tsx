interface ShowedlyLogoProps {
  iconSize?: number
  showWordmark?: boolean
  wordmarkSize?: 'sm' | 'md' | 'lg'
  className?: string
}

const wordmarkSizes = {
  sm: 'text-lg',
  md: 'text-xl',
  lg: 'text-2xl',
}

function ShowedlyIcon({ size = 28 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 56 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Speed lines — left of bubble */}
      <line x1="1" y1="17" x2="14" y2="17" stroke="#22C55E" strokeWidth="3.5" strokeLinecap="round" />
      <line x1="3" y1="24" x2="14" y2="24" stroke="#22C55E" strokeWidth="3.5" strokeLinecap="round" />
      <line x1="1" y1="31" x2="14" y2="31" stroke="#22C55E" strokeWidth="3.5" strokeLinecap="round" />

      {/* Speech bubble — circle arc + bottom tail */}
      <path
        d="M 34 6
           A 18 18 0 1 1 16 42
           L 10 52
           L 18 40
           A 18 18 0 0 1 34 6 Z"
        stroke="#1B2B5E"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />

      {/* Checkmark inside bubble */}
      <path
        d="M 24 27 L 30 33 L 44 20"
        stroke="#22C55E"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default function ShowedlyLogo({
  iconSize = 28,
  showWordmark = true,
  wordmarkSize = 'md',
  className = '',
}: ShowedlyLogoProps) {
  return (
    <span className={`inline-flex items-center gap-2 select-none ${className}`}>
      <ShowedlyIcon size={iconSize} />
      {showWordmark && (
        <span className={`font-black tracking-tight ${wordmarkSizes[wordmarkSize]}`}>
          <span className="text-[#1B2B5E]">showed</span>
          <span className="text-[#22C55E]">ly</span>
        </span>
      )}
    </span>
  )
}

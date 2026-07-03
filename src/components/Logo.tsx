interface LogoProps {
  iconSize?: number
  wordmarkSize?: 'sm' | 'md' | 'lg'
  dark?: boolean
}

const wordmarkSizes = {
  sm: 'text-sm',
  md: 'text-base',
  lg: 'text-lg',
}

export default function Logo({ iconSize = 28, wordmarkSize = 'md', dark = false }: LogoProps) {
  const h = Math.round(iconSize * 1.15)

  return (
    <div className="flex items-center gap-2.5 select-none">
      <svg
        width={iconSize}
        height={h}
        viewBox="0 0 32 37"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M3 35L16 5"
          stroke={dark ? '#FFFFFF' : '#1E2A4A'}
          strokeWidth="5"
          strokeLinecap="round"
        />
        <path
          d="M29 35L16 5"
          stroke={dark ? '#FFFFFF' : '#1E2A4A'}
          strokeWidth="5"
          strokeLinecap="round"
        />
        <path
          d="M16 20L22 27L16 34L10 27Z"
          fill={dark ? '#93C5FD' : '#2563EB'}
        />
      </svg>

      <span className={`${wordmarkSizes[wordmarkSize]} font-semibold tracking-tight leading-none`}>
        <span className={dark ? 'text-white' : 'text-[#1E2A4A]'}>net</span>
        <span className="text-blue-600">solution</span>
        <span className={dark ? 'text-white/50' : 'text-gray-400'}>.ai</span>
      </span>
    </div>
  )
}

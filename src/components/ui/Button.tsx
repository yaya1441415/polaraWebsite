'use client'

import { ButtonHTMLAttributes, forwardRef } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = '', variant = 'primary', size = 'md', children, ...props }, ref) => {
    const base =
      'inline-flex items-center justify-center gap-2 font-semibold rounded-xl transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed'

    const variants = {
      primary:
        'bg-blue-600 text-white hover:bg-blue-700 shadow-sm hover:shadow-md active:scale-[0.98]',
      secondary:
        'bg-white text-gray-900 border border-gray-200 hover:border-gray-300 hover:bg-gray-50 shadow-sm active:scale-[0.98]',
      ghost: 'text-gray-600 hover:text-gray-900 hover:bg-gray-100',
    }

    const sizes = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-5 py-2.5 text-sm',
      lg: 'px-7 py-3.5 text-base',
    }

    return (
      <button
        ref={ref}
        className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
        {...props}
      >
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'

export default Button

import React from 'react'
import type { FC } from 'react'

interface IconProps {
  className?: string
}

// 基本单位图标
export const IconLength: FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M2 12h20M7 8l-4 4 4 4M17 8l4 4-4 4" />
  </svg>
)

export const IconArea: FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <path d="M3 9h18M9 3v18" />
  </svg>
)

export const IconVolume: FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M3 3h18v18H3z" />
    <path d="M3 9h18M9 3v18M3 15h18M15 3v18" />
  </svg>
)

export const IconWeight: FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M12 2l-8 4v12l8 4 8-4V6l-8-4z" />
    <path d="M12 6v12" />
  </svg>
)

// 时间相关图标
export const IconTime: FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10" />
    <path d="M12 6v6l4 2" />
  </svg>
)

export const IconTemperature: FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M12 2v12M8 14h8M12 14v6" />
    <circle cx="12" cy="18" r="2" />
  </svg>
)

export const IconSpeed: FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10" />
    <path d="M12 12l6-6" />
    <path d="M12 8v4" />
  </svg>
)

export const IconAngle: FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M4 20v-8a8 8 0 0 1 8-8h8" />
    <path d="M4 20l16-16" />
  </svg>
)

// 物理单位图标
export const IconPressure: FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10" />
    <path d="M12 12l-6-6M12 8v4" />
  </svg>
)

export const IconPower: FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M12 2v8M8 6l4-4 4 4" />
    <path d="M5 14a7 7 0 1 0 14 0 7 7 0 0 0-14 0z" />
  </svg>
)

export const IconEnergy: FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M13 2l-2 6h6l-2 6h6l-8 8 2-6H9l2-6H5l8-8z" />
  </svg>
)

export const IconForce: FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M4 12h16M16 6l4 6-4 6" />
  </svg>
)

export const IconDensity: FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="4" y="4" width="16" height="16" rx="2" />
    <path d="M8 8h8M8 12h8M8 16h8" />
  </svg>
)

export const IconFlow: FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M3 12h18M7 8l-4 4 4 4M17 8l4 4-4 4" />
    <path d="M12 3v18" />
  </svg>
)

export const IconTorque: FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10" />
    <path d="M12 12l6 6M12 16v-4" />
  </svg>
)

// 数据单位图标
export const IconData: FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="4" y="4" width="16" height="16" rx="2" />
    <path d="M8 8h8M8 12h8M8 16h4" />
  </svg>
)

export const IconDataRate: FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M4 12h16M16 8l4 4-4 4" />
    <path d="M12 4v16" />
  </svg>
)

// 其他单位图标
export const IconCurrency: FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10" />
    <path d="M12 6v12M8 10h8M8 14h8" />
  </svg>
)

export const IconCooking: FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M6 4h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z" />
    <path d="M8 8h8M8 12h8M8 16h8" />
  </svg>
)

export const IconNumeral: FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M4 4h16M4 8h16M4 12h16M4 16h16M4 20h16" />
  </svg>
) 
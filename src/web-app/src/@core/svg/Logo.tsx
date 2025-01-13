// React Imports
import type { SVGAttributes } from 'react'

const Logo = (props: SVGAttributes<SVGElement>) => {
  return (
    <svg width='1.5em' height='1.5em' viewBox='0 0 120 120' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
      {/* Outer Ring */}
      <circle cx='60' cy='60' r='50' stroke='currentColor' strokeWidth='6' fill='none' opacity='0.8' />

      {/* Inner Linked Circles */}
      <circle cx='40' cy='60' r='10' fill='currentColor' opacity='0.9' />
      <circle cx='80' cy='60' r='10' fill='currentColor' opacity='0.9' />

      {/* Connection Line */}
      <line x1='50' y1='60' x2='70' y2='60' stroke='currentColor' strokeWidth='4' strokeLinecap='round' />

      {/* Core Circle */}
      <circle cx='60' cy='60' r='5' fill='currentColor' />
    </svg>
  )
}

export default Logo

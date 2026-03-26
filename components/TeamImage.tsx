'use client'

import { useState } from 'react'

export default function TeamImage({ 
  src, 
  alt, 
  name, 
  className = "" 
}: { 
  src?: string; 
  alt: string; 
  name: string; 
  className?: string 
}) {
  const [error, setError] = useState(false)

  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase()
  }

  if (error || !src) {
    return (
      <div className={`bg-gradient-to-br from-forest-700 to-forest-900 flex items-center justify-center ${className}`}>
        <span className="text-white text-2xl font-bold">{getInitials(name)}</span>
      </div>
    )
  }

  return (
    <div className={`relative ${className}`}>
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover rounded-full"
        onError={() => setError(true)}
      />
    </div>
  )
}

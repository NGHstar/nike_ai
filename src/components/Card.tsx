'use client'

import Image from 'next/image'

interface CardProps {
  title: string
  subtitle: string
  price: number
  meta: string
  image: string
  badge?: { label: string; tone: 'orange' | 'red' | 'green' }
}

const badgeColorMap = {
  orange: 'text-orange',
  red: 'text-red',
  green: 'text-green',
} as const

export default function Card({ title, subtitle, meta, price, image, badge }: CardProps) {
  return (
    <div className="group w-full rounded-xl ring-light-300 ring hover:ring-light-400">
      <div className="relative aspect-square overflow-hidden bg-light-200 rounded-t-xl">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        {badge && (
          <span
            className={`absolute left-3 top-3 rounded-full bg-light-100 px-3 py-1 text-caption font-semibold ${badgeColorMap[badge.tone]}`}
          >
            {badge.label}
          </span>
        )}
      </div>

      <div className="p-3">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-body-medium text-dark-900">{title}</h3>
          <span className="shrink-0 text-body-medium text-dark-900">${price.toFixed(2)}</span>
        </div>
        <p className="mt-0.5 text-body text-dark-700">{subtitle}</p>
        <p className="mt-0.5 text-body text-dark-700">{meta}</p>
      </div>
    </div>
  )
}

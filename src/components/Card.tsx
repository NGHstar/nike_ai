'use client'

import Image from 'next/image'

interface CardProps {
  title: string
  subtitle: string
  price: number
  meta: string
  image: string
  colors?: number
  badge?:
    | { label: string; tone: 'orange' }
    | { label: string; tone: 'red' }
    | { label: string; tone: 'green' }
}

export function Card({ title, price, image, colors, badge }: CardProps) {
  return (
    <div className="group w-full overflow-hidden">
      <div className="relative aspect-square overflow-hidden bg-light-200">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
        {badge && (
          <span className="absolute left-3 top-3 rounded-full bg-light-100 px-3 py-1 text-caption font-semibold text-red">
            {badge.label}
          </span>
        )}
      </div>

      <div className="bg-dark-900 px-4 py-3">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-body-medium text-light-100">{title}</h3>
          <span className="shrink-0 text-body-medium text-light-100">{price}</span>
        </div>

        {colors !== undefined && <p className="mt-0.5 text-caption text-dark-500">{colors} Colour</p>}
      </div>
    </div>
  )
}

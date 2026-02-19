'use client'

import Image from 'next/image'

export function SocialProviders() {
  return (
    <div className="flex flex-col gap-3">
      <button
        type="button"
        className="flex cursor-pointer w-full items-center justify-center gap-3 rounded-xl border border-light-300 bg-light-100 px-4 py-3.5 text-body-medium text-dark-900 transition-colors hover:bg-light-200"
      >
        <Image src="/google.svg" alt="google" width={22} height={22} priority />
        Continue with Google
      </button>
      <button
        type="button"
        className="flex cursor-pointer w-full items-center justify-center gap-3 rounded-xl border border-light-300 bg-light-100 px-4 py-3.5 text-body-medium text-dark-900 transition-colors hover:bg-light-200"
      >
        <Image src="/apple.svg" alt="google" width={26} height={26} priority />
        Continue with Apple
      </button>
    </div>
  )
}

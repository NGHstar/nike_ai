"use client"

export function SocialProviders() {
  return (
    <div className="flex flex-col gap-3">
      <button
        type="button"
        className="flex w-full items-center justify-center gap-3 rounded-xl border border-light-300 bg-light-100 px-4 py-3.5 text-body-medium text-dark-900 transition-colors hover:bg-light-200"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
          <path
            d="M17.5 12h-7M14 8.5l3.5 3.5-3.5 3.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        Continue with Google
      </button>
      <button
        type="button"
        className="flex w-full items-center justify-center gap-3 rounded-xl border border-light-300 bg-light-100 px-4 py-3.5 text-body-medium text-dark-900 transition-colors hover:bg-light-200"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path
            d="M8.5 12.5c0-2 1.5-3.5 3.5-3.5s3.5 1.5 3.5 3.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
        Continue with Apple
      </button>
    </div>
  )
}

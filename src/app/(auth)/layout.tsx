import Image from 'next/image'
import Link from 'next/link'

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="flex min-h-screen flex-col lg:flex-row">
      <div className="relative hidden w-full bg-dark-900 lg:flex lg:w-1/2">
        <div className="flex h-full w-full flex-col justify-between px-10 py-10">
          <Link href="/" aria-label="Nike home">
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-orange">
              <Image
                src="/logo.svg"
                alt="Nike"
                width={32}
                height={32}
                priority
              />
            </div>
          </Link>

          <div>
            <h1 className="text-h2 text-light-100">Just Do It</h1>
            <p className="mt-4 max-w-md text-body text-dark-500">
              Join millions of athletes and fitness enthusiasts who trust Nike
              for their performance needs.
            </p>
            <div className="mt-6 flex gap-2">
              <span className="h-2 w-2 rounded-full bg-light-100" />
              <span className="h-2 w-2 rounded-full bg-dark-700" />
              <span className="h-2 w-2 rounded-full bg-dark-700" />
            </div>
          </div>

          <p className="text-footnote text-dark-500">
            &copy; 2024 Nike. All rights reserved.
          </p>
        </div>
      </div>

      <div className="flex min-h-screen w-full flex-col bg-light-100 lg:w-1/2">
        <main className="flex flex-1 items-center justify-center px-6 py-10 lg:px-16">
          {children}
        </main>
      </div>
    </div>
  )
}

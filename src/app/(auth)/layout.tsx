import Image from 'next/image'
import Link from 'next/link'

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="flex min-h-screen flex-col lg:flex-row">
      <div className="relative hidden w-full items-center justify-center bg-dark-900 lg:flex lg:w-1/2">
        <div className="absolute inset-0 bg-gradient-to-b from-dark-900/60 via-dark-900/80 to-dark-900" />
        <div className="relative z-10 flex flex-col items-center px-12 text-center">
          <div className="mb-8 rounded-2xl bg-dark-900/60 p-5 shadow-lg backdrop-blur-sm">
            <Image
              src="/logo.svg"
              alt="Nike"
              width={64}
              height={64}
              priority
            />
          </div>
          <h1 className="text-h2 text-light-100">
            Your Style, <span className="text-orange">Elevated</span>
          </h1>
          <p className="mt-4 max-w-md text-body text-dark-500">
            Discover the latest Nike collections. Premium shoes, clothing, and
            gear designed for performance and style.
          </p>
          <div className="mt-8 flex gap-2">
            <span className="h-2 w-2 rounded-full bg-light-100" />
            <span className="h-2 w-2 rounded-full bg-dark-700" />
            <span className="h-2 w-2 rounded-full bg-dark-700" />
          </div>
        </div>
      </div>

      <div className="flex min-h-screen w-full flex-col bg-light-100 lg:w-1/2">
        <header className="flex items-center justify-between px-6 py-5 lg:px-10">
          <Link href="/" aria-label="Nike home">
            <Image
              src="/logo.svg"
              alt="Nike"
              width={60}
              height={22}
              className="invert"
              priority
            />
          </Link>
        </header>

        <main className="flex flex-1 items-center justify-center px-6 py-8 lg:px-10">
          {children}
        </main>

        <footer className="flex flex-col items-center justify-between gap-2 border-t border-light-300 px-6 py-4 sm:flex-row lg:px-10">
          <p className="text-footnote text-dark-700">&copy; 2025 Nike, Inc.</p>
          <div className="flex gap-4">
            <Link
              href="#"
              className="text-footnote text-dark-700 transition-colors hover:text-dark-900"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-footnote text-dark-700 transition-colors hover:text-dark-900"
            >
              Support
            </Link>
          </div>
        </footer>
      </div>
    </div>
  )
}

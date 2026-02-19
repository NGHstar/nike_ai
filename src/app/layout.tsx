import type { Metadata } from 'next'
import { Vazirmatn } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'

const vazirmatn = Vazirmatn({
  variable: '--font-vazir',
  subsets: ['arabic'],
})

export const metadata: Metadata = {
  title: 'فروشگاه نایک',
  description:
    'فروشگاه اینترنتی نایک، ارائه‌دهنده انواع کفش، لباس و لوازم ورزشی با کیفیت بالا و طراحی‌های مدرن برای تمامی سنین و سلیقه‌ها.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fa">
      <body className={`${vazirmatn.variable} antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}

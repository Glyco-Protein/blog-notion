import Navbar from "@/components/Navbar"
import Providers from "@/components/Providers"
import { Inter } from 'next/font/google'

import { cn } from "@/lib/utils"
import "@/styles/globals.css"
import "prismjs/themes/prism-solarizedlight.min.css"
import { Toaster } from "@/components/ui/Toast"
import GoTop from "@/components/GoTop"
export const metadata = {
  title: "Glyco_Protein",
  viewport: 'width=device-width, initial-scale=1.0, user-scalable=no,minimum-scale=1.0, maximum-scale=1.0',
  icons: {
    shortcut: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🍃</text></svg>",
  },
}
const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={cn(inter.className,"text-[16px]")}>
      <body className="bg-white text-sm leading-normal md:leading-normal md:text-base overflow-hidden text-slate-900 dark:text-slate-50 dark:bg-black antialiased">
        <Providers>
          <Navbar />
          <Toaster position='bottom-center' />
          {children}
          <GoTop/>
        </Providers>
      </body>
    </html>
  )
}


import QueryProvider from '@/QueryProvider/QueryProvider'
import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import '@/styles/Globals.scss'
import Header from '@/components/Header/Header'

const roboto = Roboto({
  weight: ['400', '700', '900'],
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: 'Your Games',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <QueryProvider>
          <Header />

          {children}
        </QueryProvider>
      </body>
    </html>
  )
}
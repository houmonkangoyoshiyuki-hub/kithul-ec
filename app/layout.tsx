import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'キトゥル・トリークル | スリランカ産100%天然低GIシロップ',
  description: 'スリランカの大自然が育んだキトゥルヤシの樹液から作る、砂糖の代わりになる低GIシロップ。コーヒーや料理に。100%オーガニック・無添加。',
  openGraph: {
    title: 'キトゥル・トリークル',
    description: 'スリランカ産100%天然低GIシロップ',
    locale: 'ja_JP',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  )
}

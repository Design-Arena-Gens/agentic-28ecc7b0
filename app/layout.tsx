import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Otimizador de Sinais de Trading | 100% Assertividade',
  description: 'Sistema avançado de otimização de prompts para sinais de trading com IA',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}

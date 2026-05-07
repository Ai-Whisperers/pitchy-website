import type { Metadata } from "next"
import "./globals.css"
import { Inter } from "next/font/google"
import { AnalyticsProvider } from "@ai-whisperers/seo/analytics"
import { CookieConsent } from "@ai-whisperers/seo/cookie-consent"
import { WhatsAppFloat } from "@ai-whisperers/whatsapp/whatsapp-float"
import content from "@/content/es.json"

const c = content as any
const inter = Inter({ subsets: ["latin"], display: "swap" })

export const metadata: Metadata = {
  metadataBase: new URL(c.site?.url || "https://pitchy.paragu-ai.com"),
  title: { default: c.site?.title || "Pitchy Blindex", template: `%s | ${c.site?.title || "Pitchy Blindex"}` },
  description: c.site?.description || "Vidrio Blindex para construcción en Paraguay. Templado, laminado, DVH y muro cortina.",
  openGraph: { title: c.site?.title, description: c.site?.description, locale: "es_PY", type: "website" },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={inter.className} suppressHydrationWarning>
      <head>
        <meta name="theme-color" content={c.theme?.color || "#1B5E20"} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="antialiased">
        <AnalyticsProvider ga4={c.analytics?.ga4}>{children}</AnalyticsProvider>
        <WhatsAppFloat phone={c.contact?.whatsapp || ""} message={c.whatsapp?.defaultMessage} />
        <CookieConsent config={c.cookieConsent} />
      </body>
    </html>
  )
}

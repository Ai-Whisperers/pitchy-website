"use client"
import content from "@/content/es.json"

const c = content as any
const productos = c.products || []

export default function ProductosPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-[#1A1A2E] mb-2">Productos</h1>
      <p className="text-[#6B7280] mb-10 max-w-2xl">Vidrio Blindex certificado para proyectos de construcción de todos los tamaños. Stock local, entrega rápida.</p>

      <div className="space-y-10">
        {productos.map((p: any) => (
          <section key={p.id} id={p.id} className="scroll-mt-24 rounded-xl border border-gray-200 bg-white p-8 shadow-sm">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <h2 className="text-2xl font-bold text-[#1A1A2E] mb-3">{p.name}</h2>
                <p className="text-[#6B7280] mb-4">{p.description}</p>

                <h3 className="font-semibold text-sm text-[#1A1A2E] uppercase tracking-wider mb-2">Características</h3>
                <ul className="list-disc list-inside text-sm text-[#6B7280] mb-4 space-y-1">
                  {(p.features || []).map((f: string, i: number) => (
                    <li key={i}>{f}</li>
                  ))}
                </ul>

                <h3 className="font-semibold text-sm text-[#1A1A2E] uppercase tracking-wider mb-2">Aplicaciones</h3>
                <div className="flex flex-wrap gap-2 mb-6">
                  {(p.applications || []).map((a: string, i: number) => (
                    <span key={i} className="bg-[#E8ECF0] text-[#4A5568] text-xs font-medium px-3 py-1.5 rounded-full">{a}</span>
                  ))}
                </div>

                <a href={`https://wa.me/595981277601?text=${encodeURIComponent(`Hola Pitchy, quiero cotizar: ${p.name}`)}`}
                  target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#0F62FE] text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21"/></svg>
                  {p.cta || "Solicitar cotización"}
                </a>
              </div>
              <div className="hidden md:flex items-center justify-center bg-gradient-to-br from-[#F8F9FA] to-[#E8ECF0] rounded-xl min-h-[200px]">
                <span className="text-6xl opacity-30">
                  {p.id === "vidrio-templado" ? "🔷" : p.id === "vidrio-laminado" ? "🪟" : p.id === "dvh" ? "🪞" : p.id === "muro-cortina" ? "🏢" : p.id === "low-e" ? "☀️" : p.id === "blindex" ? "🚿" : "🔧"}
                </span>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* Final CTA */}
      <section className="mt-16 rounded-xl p-10 text-center" style={{ background: "linear-gradient(135deg, #1A1A2E 0%, #0F62FE 100%)" }}>
        <h2 className="text-2xl font-bold text-white mb-3">¿No encontrás lo que buscás?</h2>
        <p className="text-white/80 mb-6">Consultános por productos y medidas especiales. Te respondemos en el día.</p>
        <a href="https://wa.me/595981277601" target="_blank" rel="noopener noreferrer"
          className="inline-block rounded-lg bg-white text-[#0F62FE] px-8 py-4 font-semibold hover:bg-white/90 transition-colors">
            Consultar por WhatsApp
        </a>
      </section>
    </div>
  )
}

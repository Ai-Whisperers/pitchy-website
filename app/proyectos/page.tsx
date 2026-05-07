"use client"
import content from "@/content/es.json"

const c = content as any
const proyectos = c.proyectos || []

export default function ProyectosPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-[#1A1A2E] mb-2">Proyectos</h1>
      <p className="text-[#6B7280] mb-10 max-w-2xl">Conocé algunos de los proyectos donde participamos con nuestros productos.</p>

      {proyectos.length === 0 && (
        <div className="rounded-xl border border-gray-200 bg-[#F8F9FA] p-12 text-center">
          <p className="text-[#6B7280] mb-4">Próximamente estaremos publicando nuestros proyectos realizados.</p>
          <p className="text-sm text-[#6B7280]">Mientras tanto, <a href="/contacto" className="text-[#0F62FE] font-semibold">contactanos</a> para contarte sobre nuestros trabajos.</p>
        </div>
      )}

      {proyectos.length > 0 && (
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {proyectos.map((p: any, i: number) => (
            <div key={i} className="rounded-xl border border-gray-200 bg-white shadow-sm overflow-hidden hover:shadow-md transition-shadow">
              <div className="h-48 bg-gradient-to-br from-[#E8ECF0] to-[#F8F9FA] flex items-center justify-center">
                <span className="text-4xl opacity-30">🏗️</span>
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-lg text-[#1A1A2E]">{p.name}</h3>
                <p className="text-sm text-[#6B7280] mb-2">{p.location}</p>
                <p className="text-sm text-[#6B7280]">{p.scope}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

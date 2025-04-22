import { Suspense } from "react"
import SearchComponent from "@/components/search-component"
import { Skeleton } from "@/components/ui/skeleton"

export default function Home() {
  return (
    <main className="container mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Buscador de Información Electoral</h1>
      <p className="text-center mb-8 text-muted-foreground">
        Busca información sobre distritos, municipios, localidades y secciones electorales
      </p>

      <Suspense fallback={<Skeleton className="w-full h-[400px] rounded-lg" />}>
        <SearchComponent />
      </Suspense>
    </main>
  )
}

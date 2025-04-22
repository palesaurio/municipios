"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Search, Loader2 } from "lucide-react"
import ResultCard from "./result-card"
import type { ElectoralData } from "@/lib/types"

export default function SearchComponent() {
  const [searchTerm, setSearchTerm] = useState("")
  const [results, setResults] = useState<ElectoralData[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSearch = async () => {
    if (!searchTerm.trim()) return

    setIsLoading(true)
    setError(null)

    try {
      const response = await fetch(`/api/search?q=${encodeURIComponent(searchTerm)}`)

      if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`)
      }

      const data = await response.json()
      setResults(data)
    } catch (error) {
      console.error("Error searching:", error)
      setError("Ocurrió un error al buscar. Por favor, intenta de nuevo.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Buscar información</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex gap-2">
            <Input
              placeholder="Buscar por distrito, municipio, localidad, sección..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSearch()}
              className="flex-1"
            />
            <Button onClick={handleSearch} disabled={isLoading}>
              {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Search className="h-4 w-4" />}
              <span className="ml-2">{isLoading ? "Buscando..." : "Buscar"}</span>
            </Button>
          </div>

          {error && <div className="mt-4 p-3 bg-red-50 text-red-600 rounded-md text-sm">{error}</div>}
        </CardContent>
      </Card>

      {results.length > 0 && (
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Resultados ({results.length})</h2>
          {results.map((result, index) => (
            <ResultCard key={index} data={result} />
          ))}
        </div>
      )}

      {searchTerm && results.length === 0 && !isLoading && !error && (
        <Card>
          <CardContent className="py-4">
            <p className="text-center text-muted-foreground">No se encontraron resultados para "{searchTerm}"</p>
          </CardContent>
        </Card>
      )}
    </div>
  )
}

import { type NextRequest, NextResponse } from "next/server"
import { parsePdfData } from "@/lib/pdf-parser"
import path from "path"
import fs from "fs/promises"

// Cache para almacenar los datos del PDF y evitar leerlo en cada solicitud
let cachedData: any = null

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const query = searchParams.get("q")?.toLowerCase() || ""

  try {
    // Si no tenemos los datos en caché, leemos el PDF
    if (!cachedData) {
      const pdfPath = path.join(process.cwd(), "public", "municipios", "datos.pdf")

      try {
        // Verificar si el archivo existe
        await fs.access(pdfPath)
      } catch (error) {
        return NextResponse.json({ error: "El archivo PDF no se encuentra en la ruta especificada" }, { status: 404 })
      }

      const pdfBuffer = await fs.readFile(pdfPath)
      cachedData = await parsePdfData(pdfBuffer)
    }

    // Si no hay consulta, devolvemos todos los datos
    if (!query) {
      return NextResponse.json(cachedData)
    }

    // Filtrar los resultados basados en la consulta
    const results = cachedData.filter((item: any) => {
      return (
        (item.distritoFederalNombre && item.distritoFederalNombre.toLowerCase().includes(query)) ||
        (item.distritoLocalNombre && item.distritoLocalNombre.toLowerCase().includes(query)) ||
        (item.municipioNombre && item.municipioNombre.toLowerCase().includes(query)) ||
        (item.localidadNombre && item.localidadNombre.toLowerCase().includes(query)) ||
        (item.seccion && item.seccion.toLowerCase().includes(query)) ||
        (item.ubicacion && item.ubicacion.toLowerCase().includes(query)) ||
        (item.presidente && item.presidente.toLowerCase().includes(query)) ||
        (item.secretario1 && item.secretario1.toLowerCase().includes(query)) ||
        (item.secretario2 && item.secretario2.toLowerCase().includes(query)) ||
        (item.escrutador1 && item.escrutador1.toLowerCase().includes(query)) ||
        (item.escrutador2 && item.escrutador2.toLowerCase().includes(query)) ||
        (item.escrutador3 && item.escrutador3.toLowerCase().includes(query)) ||
        (item.suplente1 && item.suplente1.toLowerCase().includes(query)) ||
        (item.suplente2 && item.suplente2.toLowerCase().includes(query)) ||
        (item.suplente3 && item.suplente3.toLowerCase().includes(query))
      )
    })

    return NextResponse.json(results)
  } catch (error) {
    console.error("Error searching PDF:", error)
    return NextResponse.json({ error: "Error al buscar en el PDF. Por favor, intenta de nuevo." }, { status: 500 })
  }
}

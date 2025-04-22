import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import type { ElectoralData } from "@/lib/types"

interface ResultCardProps {
  data: ElectoralData
}

export default function ResultCard({ data }: ResultCardProps) {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg">
          Sección: {data.seccion} {data.tipo}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-2">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <InfoItem label="Distrito Federal" value={`${data.distritoFederal}) ${data.distritoFederalNombre}`} />
            <InfoItem label="Distrito Local" value={`${data.distritoLocal}) ${data.distritoLocalNombre}`} />
          </div>

          <InfoItem label="Municipio" value={`${data.municipio}) ${data.municipioNombre}`} />
          <InfoItem label="Localidad" value={`${data.localidad}) ${data.localidadNombre}`} />

          <InfoItem label="Ubicación" value={data.ubicacion} className="border-t pt-2 mt-1" />

          <div className="border-t pt-2 mt-1">
            <h3 className="font-semibold mb-2">Funcionarios:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              <InfoItem label="Presidente/a" value={data.presidente} />
              <InfoItem label="1er. Secretario/a" value={data.secretario1} />
              <InfoItem label="2do. Secretario/a" value={data.secretario2} />
              <InfoItem label="1er. Escrutador/a" value={data.escrutador1} />
              <InfoItem label="2do. Escrutador/a" value={data.escrutador2} />
              <InfoItem label="3er. Escrutador/a" value={data.escrutador3} />
              <InfoItem label="1er. Suplente" value={data.suplente1} />
              <InfoItem label="2do. Suplente" value={data.suplente2} />
              <InfoItem label="3er. Suplente" value={data.suplente3} />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

interface InfoItemProps {
  label: string
  value: string
  className?: string
}

function InfoItem({ label, value, className = "" }: InfoItemProps) {
  return (
    <div className={className}>
      <span className="text-sm font-medium text-muted-foreground">{label}: </span>
      <span className="text-sm">{value}</span>
    </div>
  )
}

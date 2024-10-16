import { Bar } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
)

interface EstadisticasProps {
  datos: {
    servicios: string[]
    ingresos: number[]
  }
}

export function Estadisticas({ datos }: EstadisticasProps) {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Ingresos por Servicio',
      },
    },
  }

  const data = {
    labels: datos.servicios,
    datasets: [
      {
        label: 'Ingresos (€)',
        data: datos.ingresos,
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
    ],
  }

  return (
    <div className="w-full max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Estadísticas de la Peluquería</h2>
      <Bar options={options} data={data} />
    </div>
  )
}
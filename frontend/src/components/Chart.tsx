interface ChartProps {
  title: string
}

export function Chart({ title }: ChartProps) {
  return <h2>{title}</h2>
}

export default Chart

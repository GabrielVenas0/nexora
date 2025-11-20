interface CardProps {
  title: string
  value: number
}

function Card({ title, value }: CardProps) {
  return (
    <div className="rounded-lg bg-gray-300 px-6 py-2 dark:bg-slate-700">
      <div className="flex w-full flex-row items-center justify-between gap-3 px-4 py-2">
        <h1 className="text-lg text-gray-800 dark:text-white">{title}</h1>
        <span className="rounded-full bg-gray-400 px-3 py-1 text-gray-800 dark:bg-slate-600 dark:text-white">
          {value}
        </span>
      </div>
    </div>
  )
}

export default Card

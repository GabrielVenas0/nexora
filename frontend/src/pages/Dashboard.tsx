import { useState } from 'react'
import { Sidebar, Header, Card, Chart } from '../components'
import { sidebarItems } from '../configs/sidebar'

function Dashboard() {
  const [isCollapsed, setIsCollapsed] = useState(false)

  return (
    <div className="flex h-screen flex-col">
      <Header onToggleSidebar={() => setIsCollapsed(!isCollapsed)} />
      <div className="flex flex-1">
        <Sidebar items={sidebarItems} isCollapsed={isCollapsed} />
        <main className="flex flex-1 overflow-y-auto bg-white text-gray-800 dark:bg-slate-800 dark:text-white">
          <div className="flex flex-col gap-6 p-6">
            {/* Título */}
            <h1 className="text-2xl font-bold">Visão Geral</h1>

            {/* Cards com indicadores */}
            <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
              <Card title="Usuários" value={14} />
              <Card title="Clientes" value={25} />
              <Card title="Tarefas" value={32} />
              <Card title="Produtividade" value={48} />
            </div>

            {/* Gráficos */}
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <Chart title="Tarefas por Status"></Chart>
            </div>

            {/* Listagem rápida */}
            <div>
              <h2 className="mt-4 mb-2 text-xl font-semibold text-gray-800 dark:text-white">
                Últimas Tarefas
              </h2>
              <ul className="space-y-2 rounded-xl bg-white p-4 text-gray-800 shadow dark:bg-slate-700 dark:text-white">
                <li>Tarefa 1 — Cliente A</li>
                <li>Tarefa 2 — Cliente B</li>
                <li>Tarefa 3 — Cliente C</li>
              </ul>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default Dashboard

import { NavLink } from 'react-router-dom'
import type { SidebarItem } from '../types/SidebarItem'

interface SidebarProps {
  items: SidebarItem[]
  isCollapsed: boolean
}

function Sidebar({ items, isCollapsed }: SidebarProps) {
  return (
    <aside
      className={`flex bg-white text-gray-800 dark:bg-slate-900 dark:text-white ${isCollapsed ? 'w-18' : 'w-64'}`}
    >
      <nav className="flex w-full flex-col space-y-2 p-2 pb-8">
        {items.map(({ label, path, icon: Icon }) => (
          <NavLink
            aria-label={label}
            key={path}
            to={path}
            className={({ isActive }) =>
              `${
                isCollapsed
                  ? 'flex h-12 items-center justify-center gap-2 rounded-lg transition duration-300 ease-in-out'
                  : 'flex h-12 items-center justify-start rounded-lg px-4'
              } ${
                isActive
                  ? 'bg-gray-300 hover:bg-gray-200 dark:bg-slate-800 dark:hover:bg-slate-700'
                  : 'hover:bg-gray-300 dark:hover:bg-slate-800'
              }`
            }
          >
            <Icon size={24} />
            {!isCollapsed && (
              <span className="pl-6 whitespace-nowrap">{label}</span>
            )}
          </NavLink>
        ))}
      </nav>
    </aside>
  )
}

export default Sidebar

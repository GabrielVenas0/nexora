import { Menu, User, Moon, Sun } from 'lucide-react'
import { useTheme } from '../hooks/useTheme'

interface HeaderProps {
  onToggleSidebar: () => void
}

function Header({ onToggleSidebar }: HeaderProps) {
  const { theme, toggleTheme } = useTheme()

  return (
    <header className="flex w-full flex-row items-center justify-between bg-white px-4 text-gray-800 dark:bg-slate-900 dark:text-white">
      <div className="flex flex-row items-center">
        <button onClick={onToggleSidebar}>
          <Menu className="h-10 w-10 rounded-full p-2 hover:bg-slate-800"></Menu>
        </button>
        <div className="px-4 py-3.5 text-center text-xl">Nexora</div>
      </div>

      <div className="flex flex-row items-center">
        <button onClick={toggleTheme} className="mx-4 cursor-pointer">
          {theme === 'dark' ? <Sun /> : <Moon />}
        </button>
        <User></User>
      </div>
    </header>
  )
}

export default Header

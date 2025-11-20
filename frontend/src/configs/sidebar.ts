import type { SidebarItem } from '../types/SidebarItem'
import {
  ChartNoAxesCombined,
  Cog,
  Home,
  LogOut,
  UserRoundCog,
} from 'lucide-react'

export const sidebarItems: SidebarItem[] = [
  { label: 'Dashboard', path: '/', icon: Home },
  { label: 'Usuários', path: '/b', icon: UserRoundCog },
  { label: 'Relatórios', path: '/c', icon: ChartNoAxesCombined },
  { label: 'Configuração', path: '/d', icon: Cog },
  { label: 'Logout', path: '/e', icon: LogOut },
  { label: 'teste', path: 'auth', icon: LogOut },
]

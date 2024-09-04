import { BarChart2, DollarSign, Settings, ShoppingBag, ShoppingCart, TrendingUp, Users } from "lucide-react";
import { ISidebarItem } from "./types";

export const SIDEBAR_ITEMS: Array<ISidebarItem> = [
    {
        name: 'Overview',
        icon: BarChart2,
        color: '#6366f1',
        path: '/'
    },
    {
        name: 'Products',
        icon: ShoppingBag,
        color: '#8b5cf6',
        href: '/products'
    },
    {
        name: 'Users',
        icon: Users,
        color: '#ec4899',
        href: '/users'
    },
    {
        name: 'Sales',
        icon: DollarSign,
        color: '#10b981',
        href: '/sales'
    },
    {
        name: 'Orders',
        icon: ShoppingCart,
        color: '#f59e0b',
        href: '/orders'
    },
    {
        name: 'Analytics',
        icon: TrendingUp,
        color: '#3b82f6',
        href: '/analytics'
    },
    {
        name: 'Settings',
        icon: Settings,
        color: '#6ee7b7',
        href: '/settings'
    },
    
]
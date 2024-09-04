import { BarChart2, DollarSign, Settings, ShoppingBag, ShoppingCart, TrendingUp, Users } from "lucide-react";
import { ICategoryItem, ISalesItem, ISidebarItem } from "./types";

export const SIDEBAR_ITEMS: Array<ISidebarItem> = [
    {
        name: 'Overview',
        icon: BarChart2,
        color: '#6366f1',
        href: '/'
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

export const SALES_DATA: Array<ISalesItem> = [
    {month: 'Jul', sales: 4200},
    {month: 'Aug', sales: 3800},
    {month: 'Sep', sales: 5100},
    {month: 'Oct', sales: 4600},
    {month: 'Nov', sales: 5400},
    {month: 'Dec', sales: 7200},
    {month: 'Jan', sales: 6100},
    {month: 'Feb', sales: 5900},
    {month: 'Mar', sales: 6800},
    {month: 'Apr', sales: 6300},
    {month: 'May', sales: 7100},
    {month: 'Jun', sales: 7100},
]

export const CATEGORY_DATA: Array<ICategoryItem> = [
    {category: 'Electronics', value: 4500},
    {category: 'Clothing', value: 3200},
    {category: 'Home & Garden', value: 2800},
    {category: 'Books', value: 2100},
    {category: 'Sports & Outdoors', value: 1900},
]

export const SALES_CHANNEL_DATA: Array<ICategoryItem> = [
    {category: 'Website', value: 45600},
    {category: 'Mobile App', value: 38200},
    {category: 'Marketplace', value: 29800},
    {category: 'Social Media', value: 18700},
]

export const COLORS = ['#6366f1','#8b5cf6','#ec4899','#10b981','#f59e0b'];
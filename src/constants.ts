import { AlertTriangle, BarChart2, DollarSign, Package, Settings, ShoppingBag, ShoppingCart, TrendingUp, UserCheck, UserIcon, UserPlus, Users, UserX, Zap } from "lucide-react";
import { ICategoryItem, IProductItem, ISalesItem, ISidebarItem, IStat, IUserGrowthItem } from "./types";

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

export const OVERVIE_PAGE_STATS_DATA: Array<IStat> = [
  { title:"Total Sales", icon:Zap,value:"$12,345",color:"#6366f1"},
  {title:"New Users", icon:Users, value:"1,234", color:"#8b5cf6"},
  { title:"Total Products",icon:ShoppingBag,value:"567",color:"#ec4899"},
  {title:"Conversion Rate",icon:BarChart2,value:"12.5%",color:"#10b981"}
]


export const PRODUCTS_PAGE_STATS_DATA: Array<IStat> = [
    { title:"Total Products", icon:Package,value:"1234",color:"#6366f1"},
    {title:"Top Selling", icon:TrendingUp, value:"89", color:"#10b981"},
    { title:"Low Stock",icon:AlertTriangle,value:"23",color:"#f59e0b"},
    {title:"Total Revenue",icon:DollarSign,value:"$543,210",color:"#ef4444"}
  ]

export const USER_PAGE_STATS_DATA: Array<IStat> = [
    { title:"Total User", icon:UserIcon,value:"152845",color:"#6366f1"},
    {title:"New Users Today", icon:UserPlus, value:"243", color:"#10b981"},
    { title:"Active Users",icon:UserCheck,value:"98520",color:"#f59e0b"},
    {title:"Churn Rate",icon:UserX,value:"2.4%",color:"#ef4444"}

]

export const PRODUCT_DATA: Array<IProductItem> = [
	{ id: 1, name: "Wireless Earbuds", category: "Electronics", price: 59.99, stock: 143, sales: 1200 },
	{ id: 2, name: "Leather Wallet", category: "Accessories", price: 39.99, stock: 89, sales: 800 },
	{ id: 3, name: "Smart Watch", category: "Electronics", price: 199.99, stock: 56, sales: 650 },
	{ id: 4, name: "Yoga Mat", category: "Fitness", price: 29.99, stock: 210, sales: 950 },
	{ id: 5, name: "Coffee Maker", category: "Home", price: 79.99, stock: 78, sales: 720 },
];  
export const COLORS = ['#6366f1','#8b5cf6','#ec4899','#10b981','#f59e0b'];

export const ANOTHER_SALES_DATA: Array<ISalesItem> = [
    { month: "Jan", sales: 4000 },
	{ month: "Feb", sales: 3000 },
	{ month: "Mar", sales: 5000 },
	{ month: "Apr", sales: 4500 },
	{ month: "May", sales: 6000 },
	{ month: "Jun", sales: 5500 },
]

export const USER_GROWTH_DATA: Array<IUserGrowthItem> = [
    { month: "Jan", users: 1000 },
	{ month: "Feb", users: 1500 },
	{ month: "Mar", users: 2000 },
	{ month: "Apr", users: 3000 },
	{ month: "May", users: 4000 },
	{ month: "Jun", users: 5000 },
]

export const USER_DATA = [
    { id: 1, name: "John Doe", email: "john@example.com", role: "Customer", status: "Active" },
	{ id: 2, name: "Jane Smith", email: "jane@example.com", role: "Admin", status: "Active" },
	{ id: 3, name: "Bob Johnson", email: "bob@example.com", role: "Customer", status: "Inactive" },
	{ id: 4, name: "Alice Brown", email: "alice@example.com", role: "Customer", status: "Active" },
	{ id: 5, name: "Charlie Wilson", email: "charlie@example.com", role: "Moderator", status: "Active" },

] 


export const USER_ACTIVITY_DATA = [
	{ name: "Mon", "0-4": 20, "4-8": 40, "8-12": 60, "12-16": 80, "16-20": 100, "20-24": 30 },
	{ name: "Tue", "0-4": 30, "4-8": 50, "8-12": 70, "12-16": 90, "16-20": 110, "20-24": 40 },
	{ name: "Wed", "0-4": 40, "4-8": 60, "8-12": 80, "12-16": 100, "16-20": 120, "20-24": 50 },
	{ name: "Thu", "0-4": 50, "4-8": 70, "8-12": 90, "12-16": 110, "16-20": 130, "20-24": 60 },
	{ name: "Fri", "0-4": 60, "4-8": 80, "8-12": 100, "12-16": 120, "16-20": 140, "20-24": 70 },
	{ name: "Sat", "0-4": 70, "4-8": 90, "8-12": 110, "12-16": 130, "16-20": 150, "20-24": 80 },
	{ name: "Sun", "0-4": 80, "4-8": 100, "8-12": 120, "12-16": 140, "16-20": 160, "20-24": 90 },
];


export const USER_DEMOGRAPHICS_DATA = [
	{ name: "18-24", value: 20 },
	{ name: "25-34", value: 30 },
	{ name: "35-44", value: 25 },
	{ name: "45-54", value: 15 },
	{ name: "55+", value: 10 },
];

export const ANOTHER_COLORS = ["#8884d8", "#82ca9d", "#ffc658", "#ff8042", "#0088FE"];
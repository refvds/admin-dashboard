import {TypeIcon } from 'lucide-react';

export interface ISidebarItem {
    name: string;
    icon: typeof TypeIcon;
    color: string;
    href: string;
}

export interface ISalesItem {
    month: string;
    sales: number;
}

export interface ICategoryItem {
    category: string;
    value: number;
}

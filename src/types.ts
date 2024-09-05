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

export interface IStat {
    title: string;
    icon: typeof TypeIcon;
    value: string;
    color: string;
}

export interface IProductItem {
    id: number;
    name: string;
    category: string;
    price: number;
    stock: number;
    sales: number;
}

export interface IUserGrowthItem {
    month: string;
    users: number;
}
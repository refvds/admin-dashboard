import {TypeIcon } from 'lucide-react';

export interface ISidebarItem {
    name: string;
    icon: typeof TypeIcon;
    color: string;
    href?: string;
    path?:string;
}
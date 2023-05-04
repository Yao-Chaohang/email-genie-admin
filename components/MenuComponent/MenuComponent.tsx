import React from 'react'
import {
    ContainerOutlined,
    DesktopOutlined,
    PieChartOutlined,
} from '@ant-design/icons'
import type { MenuProps } from 'antd'
import { Menu } from 'antd'
import Logo from '@/components/Logo/Logo'
import style from './MenuComponent.module.scss'

import {menuConfig} from "@/utils/config";

type MenuItem = Required<MenuProps>['items'][number]

function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
    type?: 'group',
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
        type,
    } as MenuItem
}

const items: MenuItem[] = [
    getItem('Projects', 'Projects', <PieChartOutlined />),
    getItem('Templates', 'Templates', <DesktopOutlined />),
    getItem('Tools', 'Tools', <ContainerOutlined />),
]

export default function MenuComponent() {
    const defaultSelectedKeys = ''

    const menuStyle: any = {
        width: menuConfig.menuWidth,
        height: '100vh',
        background: menuConfig.background,
        position: 'relative'
    }

    return (
        <div style={menuStyle}>
            <div className='logo'>
                <Logo />
            </div>
                <div className={style.new_project}>New Project</div>
            <Menu
                defaultSelectedKeys={[defaultSelectedKeys]}
                defaultOpenKeys={['']}
                mode="inline"
                theme="dark"
                items={items}
            />
            <div className={style.log_out}>log out</div>
        </div>
    )
}
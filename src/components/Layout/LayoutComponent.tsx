import React, { FC } from 'react'
import { SideNav } from '../SideNav'
import './Layout.css'

const LayoutComponent: FC = ({ children }) => {
    return (
        <div id="layout">
            <div className="layout-container">
                <SideNav />
                <main>
                    <div className="container">{children}</div>
                </main>
            </div>
        </div>
    )
}

export default LayoutComponent

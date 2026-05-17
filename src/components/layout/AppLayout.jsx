import { useState } from 'react';
import Navbar from './Navbar';


export default function AppLayout() {
    const [collapsed, setCollapsed] = useState(false);

    const handleMenuToggle = () => {
        if (window.innerWidth < 1024) {
            setMobileOpen((v) => !v);
        } else {
            setCollapsed((v) => !v);
        }
    };

    return (
        <div className="flex h-screen overflow-hidden" style={{ background: 'var(--bg-base)' }}>
            {/* Main content area */}
            <div
                className="flex-1 flex flex-col overflow-hidden transition-all duration-300"
                style={{ marginLeft: window.innerWidth >= 1024 ? (collapsed ? '68px' : '220px') : '0' }}
            >
                <Navbar
                    onMenuToggle={handleMenuToggle}
                />
            </div>
        </div>
    );
}

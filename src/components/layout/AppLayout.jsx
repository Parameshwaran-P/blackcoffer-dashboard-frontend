import { useState } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';



export default function AppLayout() {
    const [collapsed, setCollapsed] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    // On mobile: mobileOpen controls visibility; on desktop: collapsed controls width
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 1024;

    const handleMenuToggle = () => {
        if (window.innerWidth < 1024) {
            setMobileOpen((v) => !v);
        } else {
            setCollapsed((v) => !v);
        }
    };

    const sidebarCollapsed = window.innerWidth < 1024 ? !mobileOpen : collapsed;

    return (
        <div className="flex h-screen overflow-hidden" style={{ background: 'var(--bg-base)' }}>
            {/* Main content area */}
            <Sidebar
                collapsed={sidebarCollapsed}
                onClose={() => setMobileOpen(false)}
                isMobile={window.innerWidth < 1024}
            />
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

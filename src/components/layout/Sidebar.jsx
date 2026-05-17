import {
    BarChart3,
    FileBarChart,
    LayoutDashboard,
    Lightbulb,
    Settings,
    X,
    Zap,
} from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { NAV_ITEMS } from '../../constants';

const ICON_MAP = { LayoutDashboard, BarChart3, FileBarChart, Lightbulb, Settings };

function NavItem({ item, collapsed, onClick }) {
    const Icon = ICON_MAP[item.icon];
    return (
        <NavLink
            to={item.path}
            onClick={onClick}
            className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-150 group
        ${isActive
                    ? 'text-white'
                    : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-elevated)]'
                }`
            }
            style={({ isActive }) => isActive ? {
                background: 'linear-gradient(135deg, var(--accent), #8b5cf6)',
                boxShadow: '0 4px 12px rgba(91,106,246,0.35)',
            } : {}}
        >
            {Icon && <Icon size={18} className="shrink-0" />}
            {!collapsed && <span>{item.label}</span>}
        </NavLink>
    );
}

export default function Sidebar({ collapsed, onClose, isMobile }) {
    return (
        <>
            {/* Mobile overlay */}
            {isMobile && !collapsed && (
                <div
                    className="fixed inset-0 bg-black/40 backdrop-blur-sm z-30 lg:hidden"
                    onClick={onClose}
                />
            )}

            <aside
                className={`
          fixed top-0 left-0 h-full z-40 flex flex-col
          transition-all duration-300 ease-in-out
          ${collapsed ? (isMobile ? '-translate-x-full' : 'w-[68px]') : 'w-[220px]'}
          bg-[var(--bg-surface)] border-r border-[var(--border)]
        `}
                style={{ boxShadow: 'var(--shadow-md)' }}
            >
                {/* Logo */}
                <div className="flex items-center gap-2.5 px-4 h-16 border-b border-[var(--border)] shrink-0">
                    <div className="w-8 h-8 rounded-xl flex items-center justify-center shrink-0"
                        style={{ background: 'linear-gradient(135deg, var(--accent), #8b5cf6)' }}>
                        <Zap size={16} className="text-white" />
                    </div>
                    {!collapsed && (
                        <div>
                            <div className="text-sm font-bold text-[var(--text-primary)]"
                                style={{ fontFamily: 'var(--font-display)' }}>
                                Blackcoffer
                            </div>
                            <div className="text-[10px] text-[var(--text-muted)] -mt-0.5">Analytics</div>
                        </div>
                    )}
                    {isMobile && !collapsed && (
                        <button onClick={onClose} className="ml-auto text-[var(--text-muted)] hover:text-[var(--text-primary)]">
                            <X size={18} />
                        </button>
                    )}
                </div>

                {/* Nav items */}
                <nav className="flex-1 overflow-y-auto px-3 py-4 space-y-1">
                    {NAV_ITEMS.map((item) => (
                        <NavItem key={item.id} item={item} collapsed={collapsed} onClick={isMobile ? onClose : undefined} />
                    ))}
                </nav>

                {/* Bottom user card */}
                {!collapsed && (
                    <div className="p-3 border-t border-[var(--border)]">
                        <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-[var(--bg-elevated)]">
                            <div className="w-8 h-8 rounded-lg shrink-0 flex items-center justify-center text-white text-xs font-bold"
                                style={{ background: 'linear-gradient(135deg, var(--accent-2), var(--accent))' }}>
                                BC
                            </div>
                            <div className="min-w-0">
                                <div className="text-xs font-semibold text-[var(--text-primary)] truncate">Blackcoffer</div>
                                <div className="text-[10px] text-[var(--text-muted)] truncate">admin@blackcoffer.com</div>
                            </div>
                        </div>
                    </div>
                )}
            </aside>
        </>
    );
}

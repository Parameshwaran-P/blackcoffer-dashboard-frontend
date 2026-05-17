import { Bell, Menu, Search, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar({ onMenuToggle }) {

    const [searchOpen, setSearchOpen] = useState(false);

    return (
        <header
            className="h-16 flex items-center gap-3 px-4 lg:px-6 border-b border-[var(--border)] sticky top-0 z-20"
            style={{ background: 'var(--bg-surface)', boxShadow: 'var(--shadow-sm)' }}
        >
            {/* Menu toggle */}
            <button
                onClick={onMenuToggle}
                className="p-2 rounded-lg text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-elevated)] transition-colors"
            >
                <Menu size={20} />
            </button>

            {/* Title */}
            <div className="hidden sm:block">
                <h1 className="text-sm font-bold text-[var(--text-primary)]"
                    style={{ fontFamily: 'var(--font-display)' }}>
                    Dashboard
                </h1>
                <p className="text-[11px] text-[var(--text-muted)]">Blackcoffer Analytics Platform</p>
            </div>

            <div className="flex-1" />

            {/* Search */}
            <div className={`relative flex items-center transition-all duration-200 ${searchOpen ? 'w-48 sm:w-64' : 'w-9'}`}>
                {searchOpen ? (
                    <div className="flex items-center w-full rounded-xl border border-[var(--border)] bg-[var(--bg-elevated)] px-3 gap-2">
                        <Search size={14} className="text-[var(--text-muted)] shrink-0" />
                        <input
                            autoFocus
                            placeholder="Search..."
                            className="flex-1 bg-transparent text-sm py-2 outline-none text-[var(--text-primary)] placeholder:text-[var(--text-muted)]"
                        />
                        <button onClick={() => setSearchOpen(false)}>
                            <X size={14} className="text-[var(--text-muted)]" />
                        </button>
                    </div>
                ) : (
                    <button
                        onClick={() => setSearchOpen(true)}
                        className="p-2 rounded-lg text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-elevated)] transition-colors"
                    >
                        <Search size={18} />
                    </button>
                )}
            </div>

            {/* Notification bell */}
            <button className="relative p-2 rounded-lg text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-elevated)] transition-colors">
                <Bell size={18} />
                <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-[var(--accent-2)]" />
            </button>



            {/* Avatar */}
            <div
                className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold cursor-pointer shrink-0"
                style={{ background: 'linear-gradient(135deg, var(--accent-2), var(--accent))' }}
            >
                BC
            </div>
        </header>
    );
}

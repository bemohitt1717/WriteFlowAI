import { useState, useRef, useEffect } from "react";
import {
  User,
  Settings,
  LogOut,
  Share2,
  ChevronDown,
  Menu,
  UserCircle,
  UserCircleIcon,
} from "lucide-react";

export const Topbar = ({ toggleSidebar }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="w-full select-none sticky top-0 z-30 bg-gradient-to-r from-white via-[var(--color-surface)] to-white border-b border-[var(--color-border)] shadow-sm">
      <div className="flex items-center justify-between px-8 py-4">
        {/* Chat Title / Meta info & Sidebar Trigger */}
        <div className="flex items-center gap-4">
          {/* Toggle Sidebar Trigger button */}
          <button
            onClick={toggleSidebar}
            className="p-2.5 rounded-xl text-[var(--color-text)] hover:bg-[var(--color-primary)]/10 hover:text-[var(--color-primary)] transition-all duration-200 cursor-pointer active:scale-95 shrink-0 group"
            title="Toggle Sidebar"
          >
            <Menu
              size={20}
              className="group-hover:scale-110 transition-transform duration-200"
            />
          </button>

          <span className="bg-slate-900 h-4 md:h-5 relative left-2 rounded-md w-1"></span>
          <div className="flex flex-col">
            <h2 className="text-md font-bold text-[var(--color-text)] tracking-wide ">
              New Chat
            </h2>
          </div>
        </div>

        {/* User Interaction Controls */}
        <div className="flex items-center gap-3">
          {/* Profile Dropdown Container */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center gap-2 px-2 py-1.5 rounded-xl hover:bg-[var(--color-primary)]/5  transition-all duration-200 active:scale-[0.98] group"
            >
              {/* User Avatar with Icon */}
              <div className="relative">
                <div className="w-11 h-11 p-0 rounded-full bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)] flex items-center justify-center shadow-md shadow-[var(--color-primary)]/20 group-hover:shadow-lg group-hover:shadow-[var(--color-primary)]/30 transition-all duration-200 cursor-pointer">
                  <UserCircleIcon className="text-white w-full" />
                </div>
                <span className="absolute -bottom-1 -right-1 w-3 h-3 rounded-full bg-emerald-500 border-2 border-white shadow-md animate-pulse"></span>
              </div>
              <ChevronDown
                size={16}
                className={`text-[var(--color-text)] transition-transform duration-300 ${dropdownOpen ? "rotate-180" : ""}`}
              />
            </button>

            {/* Dropdown Card */}
            {dropdownOpen && (
              <div className="absolute right-0 mt-3 w-64 rounded-2xl bg-white border border-[var(--color-border)] shadow-2xl shadow-[var(--color-primary)]/10 py-3 z-40 animate-in fade-in slide-in-from-top-2">
                {/* Dropdown Header */}
                <div className="px-5 py-3 border-b border-[var(--color-border)] mb-2 bg-gradient-to-r from-[var(--color-surface)] to-transparent rounded-t-xl">
                  <p className="text-xs font-semibold text-[var(--color-muted)] uppercase tracking-wider">
                    Logged in as
                  </p>
                  <p className="text-sm font-bold text-[var(--color-text)] truncate mt-1">
                    user@writeflow.ai
                  </p>
                </div>

                {/* Dropdown features */}
                <div className="space-y-1 px-2">
                  {/* Feature 1: Profile */}
                  <button
                    onClick={() => {
                      setDropdownOpen(false);
                    }}
                    className="w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium text-[var(--color-text)] hover:bg-[var(--color-primary)]/10 hover:text-[var(--color-primary)] transition-all duration-200 cursor-pointer group"
                  >
                    <User
                      size={16}
                      className="text-[var(--color-primary)] group-hover:scale-120 transition-transform duration-200"
                    />
                    <span>View Profile</span>
                  </button>

                  {/* Feature 2: Settings */}
                  <button
                    onClick={() => {
                      setDropdownOpen(false);
                    }}
                    className="w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium text-[var(--color-text)] hover:bg-[var(--color-primary)]/10 hover:text-[var(--color-primary)] transition-all duration-200 cursor-pointer group"
                  >
                    <Settings
                      size={16}
                      className="text-[var(--color-primary)] group-hover:scale-120 transition-transform duration-200"
                    />
                    <span>Account Settings</span>
                  </button>

                  {/* Divider */}
                  <div className="h-px bg-[var(--color-border)] my-2 mx-2" />

                  {/* Feature 3: Logout */}
                  <button
                    onClick={() => {
                      setDropdownOpen(false);
                    }}
                    className="w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-semibold text-red-600 hover:bg-red-50/60 hover:text-red-700 transition-all duration-200 cursor-pointer group"
                  >
                    <LogOut
                      size={16}
                      className="text-red-500 group-hover:scale-120 transition-transform duration-200"
                    />
                    <span>Sign Out</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

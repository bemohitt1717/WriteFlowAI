import { useState } from "react";
import {
  Plus,
  LayoutTemplate,
  History,
  Bookmark,
  Settings,
  HelpCircle,
  ChevronDown,
  MessageSquare,
  X
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { PATHS } from "@/utils/path";

export const SideBar = ({ isOpen, onClose, handleNewChat, setActiveChatId, activeChatId, chats }) => {
  const [expandRecent, setExpandRecent] = useState(true);
  const [activeItem, setActiveItem] = useState("new-chat");
  const navigate = useNavigate();

  const menuItems = [
    { id: "templates", label: "Templates", icon: LayoutTemplate },
    { id: "history", label: "History", icon: History },
    { id: "saved", label: "Saved Prompts", icon: Bookmark },
  ];

  // Shared link class builder
  const linkClass = (isActive) =>
    `w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 group cursor-pointer ${
      isActive
        ? "bg-[var(--color-primary)]/10 text-[var(--color-primary)] font-bold shadow-sm"
        : "text-slate-700 hover:bg-[var(--color-primary)]/8 hover:text-[var(--color-primary)]"
    }`;

  return (
    <div
      className={`flex flex-col h-screen dashboard-panel-sidebar select-none transition-all duration-300 ease-in-out fixed top-0 bottom-0 left-0 z-40 lg:static overflow-hidden ${
        isOpen ? "w-64 translate-x-0" : "-translate-x-full lg:translate-x-0 lg:w-0"
      }`}
    >
      {/* Header / Logo */}
      <div className="px-5 py-4 border-b border-slate-100/60 flex items-center justify-between shrink-0">
        <div className="flex items-center gap-2.5 cursor-pointer" onClick={() => navigate(PATHS.HOME)}>
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)] flex items-center justify-center shadow-md shadow-[var(--color-primary)]/10">
            <span className="text-white font-extrabold text-lg tracking-wider">W</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-bold text-sm text-[var(--color-text)] tracking-tight leading-tight">
              WriteFlow
            </span>
            
          </div>
        </div>

        {/* Close Button - Mobile Only */}
        <button
          onClick={onClose}
          className="lg:hidden p-1.5 rounded-lg hover:bg-slate-100 text-slate-500 hover:text-slate-900 transition-colors cursor-pointer active:scale-95"
          title="Close Sidebar"
        >
          <X size={18} />
        </button>
      </div>

      {/* Navigation Content */}
      <nav className="flex-1 px-3 py-4 space-y-6 overflow-y-auto min-w-[256px]">

        {/* New Chat CTA */}
        <button
          onClick={() => {setActiveItem("new-chat")
            handleNewChat()
          }}
          className={`w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl font-bold transition-all duration-200 cursor-pointer ${
            activeItem === "new-chat"
              ? "bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] text-white shadow-lg shadow-[var(--color-primary)]/20"
              : "border border-slate-200 text-slate-700 hover:bg-[var(--color-primary)]/5 hover:text-[var(--color-primary)] hover:border-[var(--color-primary)]/30"
          }`}
        >
          <Plus size={18} className={activeItem === "new-chat" ? "text-white" : "text-[var(--color-primary)]"} />
          <span className="text-sm">New Chat</span>
        </button>

        {/* Navigation Links */}
        <div className="space-y-0.5">
          {menuItems.map((item) => {
            const IconComponent = item.icon;
            const isActive = activeItem === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveItem(item.id)}
                className={linkClass(isActive)}
              >
                {/* Active indicator dot */}
                <span
                  className={`shrink-0 w-1 h-5 rounded-full transition-all duration-200 ${
                    isActive ? "bg-[var(--color-primary)]" : "bg-transparent group-hover:bg-[var(--color-primary)]/30"
                  }`}
                />
                <IconComponent
                  size={17}
                  className={`transition-colors duration-200 shrink-0 ${
                    isActive ? "text-[var(--color-primary)]" : "text-slate-400 group-hover:text-[var(--color-primary)]"
                  }`}
                />
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>

        {/* Recent Chats Section */}
        <div className="pt-1">
          <button
            onClick={() => setExpandRecent(!expandRecent)}
            className="flex items-center justify-between w-full px-4 py-1.5 rounded-lg text-slate-500 hover:bg-slate-50 hover:text-slate-700 transition-colors cursor-pointer"
          >
            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
              Recent Chats
            </span>
            <ChevronDown
              size={13}
              className={`transition-transform duration-200 ${expandRecent ? "" : "-rotate-90"}`}
            />
          </button>

          {expandRecent && (
            <div className="mt-1 space-y-0.5">
              {chats.map((chat) => (
                <button
                  key={chat.id}
                  onClick={() => setActiveChatId(chat.id)}
                  className={`w-full text-left px-4 py-2 rounded-xl text-xs font-semibold truncate flex items-center gap-2.5 transition-all duration-200 cursor-pointer group ${
                    activeItem === `${chat.id}`
                      ? "bg-[var(--color-primary)]/10 text-[var(--color-primary)] font-bold"
                      : "text-slate-600 hover:bg-[var(--color-primary)]/6 hover:text-[var(--color-primary)]"
                  }`}
                >
                  <MessageSquare
                    size={13}
                    className={`shrink-0 transition-colors ${
                      activeItem === `${chat.id}` ? "text-[var(--color-primary)]" : "text-slate-400 group-hover:text-[var(--color-primary)]"
                    }`}
                  />
                  <span className="truncate">{chat.title}</span>
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Sidebar Footer */}
      <div className="border-t border-slate-100 px-3 py-4 space-y-0.5 shrink-0 min-w-[256px]">
        {[
          { id: "settings", label: "Settings", icon: Settings },
          { id: "help", label: "Help & Feedback", icon: HelpCircle },
        ].map(({ id, label, icon: IconComp }) => {
          const isActive = activeItem === id;
          return (
            <button
              key={id}
              onClick={() => setActiveItem(id)}
              className={linkClass(isActive)}
            >
              <span
                className={`shrink-0 w-1 h-5 rounded-full transition-all duration-200 ${
                  isActive ? "bg-[var(--color-primary)]" : "bg-transparent group-hover:bg-[var(--color-primary)]/30"
                }`}
              />
              <IconComp
                size={17}
                className={`transition-colors duration-200 shrink-0 ${
                  isActive ? "text-[var(--color-primary)]" : "text-slate-400 group-hover:text-[var(--color-primary)]"
                }`}
              />
              <span>{label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

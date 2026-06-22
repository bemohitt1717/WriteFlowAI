import { useState, useEffect } from "react";
import { SideBar } from "./sidebar/sidebar";
import { Topbar } from "./TopBar/Topbar";
import { ChatArea } from "./chatArea/ChatArea";
import { PromptInp } from "./Prompt/PromptInp";

export const Dashboard = ({
  messages,
  isTyping,
  inputValue,
  setInputValue,
  handleSendMessage,
  handleNewChat,
  chats,
  activeChatId,
  setActiveChatId,
  Icon,
}) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  // Auto-collapse sidebar on mobile/tablet widths by default
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setSidebarOpen(false);
      } else {
        setSidebarOpen(true);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <div className="min-h-screen flex dashboard-wrapper overflow-hidden relative select-none">
      {/* Mobile Sidebar backdrop overlay */}
      {sidebarOpen && (
        <div
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 bg-slate-900/10 backdrop-blur-[3px] z-30 lg:hidden transition-all duration-300"
        />
      )}

      {/* Sidebar */}
      <SideBar
        isOpen={sidebarOpen}
        handleNewChat={handleNewChat}
        chats={chats}
        activeChatId={activeChatId}
        setActiveChatId={setActiveChatId}
        onClose={() => setSidebarOpen(false)}
        toggleSidebar={toggleSidebar}
      />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col h-screen overflow-hidden bg-transparent transition-all duration-300 relative w-full">
        {/* Top Bar */}
        <Topbar toggleSidebar={toggleSidebar} />

        {/* Chat Messages Area */}
        <ChatArea
          messages={messages}
          isTyping={isTyping}
          setInputValue={setInputValue}
        />

        {/* Prompt Input Area */}
        <PromptInp
          inputValue={inputValue}
          setInputValue={setInputValue}
          Icon={Icon}
          handleSendMessage={handleSendMessage}
        />
      </div>
    </div>
  );
};

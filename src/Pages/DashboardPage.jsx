import { useEffect, useState } from "react";
import { Dashboard } from "../components/DashBoard/dashboardLayout";
import { Icon } from "../components/DashBoard/icons/Icons";
import { LogIn } from "lucide-react";

const DashboardPage = () => {
  const [chats, setChats] = useState(() => {
    const savedChats = localStorage.getItem("write-flow-chats");

    return savedChats
      ? JSON.parse(savedChats)
      : [
          {
            id: 1,
            title: "New Chat",
            messages: [],
          },
        ];
  });
  const [activeChatId, setActiveChatId] = useState(chats[0]?.id || null);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const activeChat = chats.find((chat) => chat.id === activeChatId);

  const handleSendMessage = async (e) => {
    e.preventDefault();

    if (!inputValue.trim()) return;

    const userMessage = {
      id: Date.now(),
      type: "user",
      text: inputValue,
    };

    setChats((prevChats) =>
      prevChats.map((chat) =>
        chat.id === activeChatId
          ? {
              ...chat,
              title:
                chat.messages.length == 0
                  ? userMessage.text.slice(0, 30)
                  : chat.title,
              messages: [...chat.messages, userMessage],
            }
          : chat,
      ),
    );

    setInputValue("");
    setIsTyping(true);

    try {
      const apiBaseUrl = (
        import.meta.env.VITE_API_URL || "http://localhost:5006"
      ).replace(/\/$/, "");

      const response = await fetch(`${apiBaseUrl}/api/chat`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prompt: userMessage.text,
        }),
      });

      const data = await response.json();
      

      const aiReply = {
        id: Date.now() + 1,
        type: "ai",
        text: data.response,
      };

      setChats((prevChats) =>
        prevChats.map((chat) =>
          chat.id === activeChatId
            ? {
                ...chat,
                messages: [...chat.messages, aiReply],
              }
            : chat,
        ),
      );
    } catch (error) {
      console.error("Error sending message:", error);
    } finally {
      setIsTyping(false);
    }
  };

  const handleNewChat = () => {
    const newChat = {
      id: Date.now() + 1,
      title: "New Chat",
      messages: [],
    };

    setChats((prevChats) => [...prevChats, newChat]);

    setActiveChatId(newChat.id);
  };
  useEffect(() => {
    localStorage.setItem("write-flow-chats", JSON.stringify(chats));
  }, [chats]);

  return (
    <Dashboard
      messages={activeChat?.messages || []}
      isTyping={isTyping}
      inputValue={inputValue}
      setInputValue={setInputValue}
      handleSendMessage={handleSendMessage}
      Icon={Icon}
      handleNewChat={handleNewChat}
      chats={chats}
      activeChatId={activeChatId}
      setActiveChatId={setActiveChatId}
    />
  );
};

export default DashboardPage;

import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, User, Bot, ArrowRight } from "lucide-react";
import { useRef, useEffect } from "react";
import { GridBackgorund } from "@/components/ui/GridBackground";

export const ChatArea = ({ messages, isTyping, setInputValue }) => {
  const bottomRef = useRef(null);

  // Auto-scroll to bottom on new messages or typing state changes
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const suggestions = [
    {
      prompt: "Write an engaging blog post about modern UI design",
      title: "Blog",
    },
    {
      prompt: "Create high-converting email subject lines for SaaS",
      title: "Email",
    },
    {
      prompt: "Brainstorm 5 innovative ideas for a marketing campaign",
      title: "Ideas",
    },
  ];

  return (
    <div className="flex-1 overflow-y-auto px-6 py-8 md:px-12 select-text relative">
      {/* Custom Themed Grid Background Overlay - Fixed background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <GridBackgorund />
      </div>

      <div className="max-w-3xl mx-auto relative z-10 space-y-8 min-h-[calc(100vh-220px)] flex flex-col justify-between">
        <div className="space-y-6 flex-1">
          {messages.length === 0 ? (
            /* Upgraded Premium SaaS Empty State */
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-center text-center py-12 md:py-16"
            >
              {/* Sparkle Glow container */}
              <div className="relative mb-6">
                <div className="absolute inset-0 rounded-3xl bg-[var(--color-primary)]/10 blur-xl animate-pulse"></div>
                <div className="w-16 h-16 rounded-3xl bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)] flex items-center justify-center shadow-lg shadow-[var(--color-primary)]/20 relative z-10">
                  <Sparkles size={28} className="text-white" />
                </div>
              </div>

              <h3 className="text-2xl font-extrabold text-[var(--color-text)] tracking-tight mb-2.5">
                What can I help you write today?
              </h3>
              <p className="text-sm text-slate-700 font-medium max-w-md mb-10 leading-relaxed">
                Generate high-quality captions, blogs, and templates instantly.
                Ask any question below or choose a suggestion to start.
              </p>

              {/* Grid of quick prompts */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4.5 w-full max-w-2xl mt-4">
                {suggestions.map((sug, idx) => (
                  <motion.button
                    key={idx}
                    onClick={() => setInputValue(sug.prompt)}
                    type="button"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * idx + 0.2 }}
                    className="p-4 rounded-2xl bg-white/60 backdrop-blur-md border border-slate-200/50 text-left hover:border-[var(--color-primary)]/30 hover:bg-white/85 hover:shadow-md hover:shadow-[var(--color-primary)]/5 transition-all duration-200 group relative flex flex-col justify-between h-32 cursor-pointer"
                  >
                    <span className="text-[10px] font-bold text-[var(--color-primary)] uppercase tracking-wider bg-[var(--color-soft-periwinkle-100)] px-2.5 py-0.5 rounded-full w-max">
                      {sug.title}
                    </span>
                    <p className="text-xs font-bold text-slate-800 leading-snug group-hover:text-[var(--color-text)] transition-colors mt-2">
                      "{sug.prompt}"
                    </p>
                    <div className="flex justify-end w-full mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <ArrowRight
                        size={13}
                        className="text-[var(--color-primary)]"
                      />
                    </div>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          ) : (
            /* Active Chat Messages Stream */
            <div className="space-y-6">
              <AnimatePresence initial={false}>
                {messages.map((message) => (
                  <motion.div
                    key={message.id}
                    initial={{ opacity: 0, y: 12, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    className={`flex items-start gap-3.5 ${
                      message.type === "user" ? "flex-row-reverse" : "flex-row"
                    }`}
                  >
                    {/* Message Icon Avatar */}
                    <div
                      className={`w-8.5 h-8.5 rounded-full flex items-center justify-center shadow-sm shrink-0 ${
                        message.type === "user"
                          ? "bg-[var(--color-soft-periwinkle-50)] border border-purple-200/50"
                          : "bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)]"
                      }`}
                    >
                      {message.type === "user" ? (
                        <User
                          size={15}
                          className="text-[var(--color-primary)]"
                        />
                      ) : (
                        <Bot size={15} className="text-white" />
                      )}
                    </div>

                    {/* Message Text Bubble */}
                    <div
                      className={`max-w-[85%] sm:max-w-xl px-4.5 py-3.5 text-sm leading-relaxed ${
                        message.type === "user"
                          ? "chat-bubble-user"
                          : "chat-bubble-ai"
                      }`}
                    >
                      <p className="font-medium whitespace-pre-wrap">
                        {message.text}
                      </p>
                    </div>
                  </motion.div>
                ))}

                {/* Interactive AI Thinking / Typing Loader */}
                {isTyping && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="flex items-start gap-3.5 flex-row"
                  >
                    <div className="w-8.5 h-8.5 rounded-full bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)] flex items-center justify-center shadow-sm shrink-0">
                      <Bot size={15} className="text-white" />
                    </div>
                    <div className="chat-bubble-ai px-5 py-4 flex items-center gap-1.5 min-w-[70px] justify-center">
                      <span className="typing-dot"></span>
                      <span className="typing-dot"></span>
                      <span className="typing-dot"></span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )}
        </div>
        {/* Scroll Target */}
        <div ref={bottomRef} />
      </div>
    </div>
  );
};

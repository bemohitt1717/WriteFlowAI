import { useEffect, useState } from "react";
import {
  FiMessageSquare,
  FiPaperclip,
  FiSend,
  FiUser,
} from "../../../../../assets/icons/icons";
import aiIcon from "./img/icons8-chatbot-32.png";
import { useNavigate } from "react-router-dom";
import { PATHS } from "@/utils/path";

const DemoChatBox = () => {
  const navigate = useNavigate();

  const prompts = [
  "Write an Instagram caption for a fitness reel",
  "Generate a LinkedIn post about productivity",
  "Create a product launch announcement",
  "Give me blog ideas for web developers",
  "Write a YouTube video description",
];

const responses = [
  "No excuses. No shortcuts. Just consistency, discipline, and progress. 💪🔥",

  "Remote work isn't about working from anywhere. It's about creating systems that allow you to perform at your best.",

  "🚀 We're excited to introduce WriteFlow AI — your intelligent content creation partner.",

  "• React Performance Optimization\n• Advanced Custom Hooks\n• Modern Dashboard Design Patterns",

  "Welcome back! In today's video we'll build a modern SaaS dashboard from scratch using React and Tailwind CSS.",
];

  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [stage, setStage] = useState("typing");
  const [messages, setMessages] = useState([]);
  const [cycleCount, setCycleCount] = useState(0);

  const currentPrompt = prompts[cycleCount % prompts.length];
  const currentResponse = responses[cycleCount % responses.length];

  useEffect(() => {
    if (stage !== "typing") return undefined;

    if (currentIndex < currentPrompt.length) {
      const timer = setTimeout(() => {
        setDisplayedText(currentPrompt.substring(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, 50);
      return () => clearTimeout(timer);
    }

    const timer = setTimeout(() => setStage("sending"), 700);
    return () => clearTimeout(timer);
  }, [currentIndex, currentPrompt, stage]);

  useEffect(() => {
    if (stage === "sending") {
      const timer = setTimeout(() => {
        setMessages((prev) => [...prev, { type: "user", text: displayedText }]);
        setDisplayedText("");
        setStage("userMsg");
      }, 350);
      return () => clearTimeout(timer);
    }

    if (stage === "userMsg") {
      const timer = setTimeout(() => setStage("aiTyping"), 800);
      return () => clearTimeout(timer);
    }

    if (stage === "aiTyping") {
      const timer = setTimeout(() => {
        setMessages((prev) => [...prev, { type: "ai", text: currentResponse }]);
        setStage("aiMsg");
      }, 1200);
      return () => clearTimeout(timer);
    }

    if (stage === "aiMsg") {
      const timer = setTimeout(() => {
        setDisplayedText("");
        setCurrentIndex(0);
        setMessages([]);
        setCycleCount((prev) => prev + 1);
        setStage("typing");
      }, 2800);
      return () => clearTimeout(timer);
    }

    return undefined;
  }, [currentResponse, displayedText, stage]);

  return (
    <div className="theme-card cursor-pointer flex w-full flex-col overflow-hidden rounded-2xl  min-h-180 lg:min-h-130 lg:flex-1" onClick={() => navigate(PATHS.DASHBOARD)}>
      <div className="flex items-center justify-between border-b  border-[var(--color-border)] p-4">
        <div className="flex items-center gap-2">
          <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[var(--color-primary)]">
            <span className="text-sm font-bold text-[var(--color-background)]">
              W
            </span>
          </div>
          <div className="flex items-center">
            <h1 className="text-base font-bold tracking-tight text-[var(--color-text)]">
              WriteFlow
            </h1>
            <span className="ml-1 text-sm font-bold text-[var(--color-accent)]">
              ai
            </span>
          </div>
        </div>

        <button
          disabled
          className="cursor-default rounded-lg bg-[var(--color-primary)] px-4 py-1.5 text-xs font-semibold text-[var(--color-background)]"
        >
          Get Started
        </button>
      </div>

      <div className="flex-1 overflow-y-auto bg-white p-4">
        {messages.length === 0 && stage === "typing" ? (
          <p className="py-8 text-center text-sm text-[var(--color-muted)]">
            Starting demo...
          </p>
        ) : (
          <div className="flex flex-col space-y-3">
            {messages.map((msg, idx) => (
              <div
                key={`${msg.type}-${idx}`}
                className={`flex items-start gap-2 ${
                  msg.type === "ai" ? "justify-end" : ""
                }`}
              >
                {msg.type === "user" ? (
                  <>
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--color-secondary)]">
                      <FiUser className="text-[var(--color-text)]" size={16} />
                    </div>
                    <div className="max-w-xs rounded-lg bg-[var(--color-secondary)]/70 px-3 py-2">
                      <p className="text-sm text-[var(--color-text)]">
                        {msg.text}
                      </p>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="max-w-xs rounded-lg bg-[var(--color-primary)]/18 px-3 py-2">
                      <p className="text-sm text-[var(--color-text)]">
                        {msg.text}
                      </p>
                    </div>
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--color-primary)]">
                      <img src={aiIcon} alt="AI" className="h-5 w-5" />
                    </div>
                  </>
                )}
              </div>
            ))}

            {(stage === "aiTyping" || stage === "aiMsg") && (
              <div className="flex items-start gap-2">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--color-primary)]">
                  <img src={aiIcon} alt="AI" className="h-5 w-5" />
                </div>
                <div className="rounded-lg bg-[var(--color-primary)]/18 px-3 py-2">
                  <p className="text-sm text-[var(--color-text)]">
                    AI is thinking<span className="animate-pulse">...</span>
                  </p>
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      <div className="border-t border-[var(--color-border)] bg-[var(--color-surface)] p-3">
        <div className="flex items-center gap-3 rounded-lg border border-[var(--color-border)] bg-white px-4 py-2.5 transition-colors focus-within:border-[var(--color-accent)]">
          <FiMessageSquare
            className="shrink-0 text-[var(--color-accent)]"
            size={20}
          />
          <input
            type="text"
            value={displayedText}
            readOnly
            disabled
            placeholder="Write a caption for gym motivation"
            className="flex-1 cursor-default bg-transparent text-sm text-[var(--color-text)] outline-none placeholder:text-[var(--color-muted)]"
          />
          <button
            disabled
            className="shrink-0 cursor-default text-[var(--color-muted)]"
          >
            <FiPaperclip size={20} />
          </button>
          <button
            disabled
            className="shrink-0 cursor-default text-[var(--color-accent)]"
          >
            <FiSend size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default DemoChatBox;

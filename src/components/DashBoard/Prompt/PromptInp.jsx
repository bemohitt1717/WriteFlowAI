import { Paperclip, SendHorizontal } from "lucide-react";

export const PromptInp = ({
  inputValue,
  setInputValue,
  handleSendMessage,
}) => {
  return (
    <div className="bg-transparent px-6 pb-6 pt-2 md:px-12 select-none">
      <form onSubmit={handleSendMessage} className="max-w-3xl mx-auto">
        <div className="flex gap-3 items-center">
          {/* Main Input Capsule */}
          <div className="flex-1   relative">
            <div className="prompt-container-glow flex  items-center gap-3 px-4 py-3 rounded-full">
              {/* Attachment Clip button */}
              <button
                type="button"
                className="p-1.5 rounded-xl hover:bg-[var(--color-soft-periwinkle-50)] text-slate-400 hover:text-[var(--color-primary)] transition-all duration-200 active:scale-95 cursor-pointer shrink-0"
                title="Attach Files"
              >
                <Paperclip size={18} />
              </button>

              {/* Text Input area */}
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Ask WriteFlow AI to write something..."
                className="flex-1 bg-transparent outline-none text-[var(--color-text)] placeholder-slate-400 text-sm font-medium w-full"
              />
            </div>
          </div>

          {/* Submit Send Button */}
          <button
            type="submit"
            disabled={!inputValue.trim()}
            className="p-3.5 rounded-full bg-linear-to-r from-(--color-primary) to-(--color-secondary) text-white shadow-md shadow-(--color-primary)/15 hover:shadow-lg hover:shadow-(--color-primary)/25 disabled:opacity-40 disabled:shadow-none disabled:cursor-not-allowed transition-all duration-250 flex items-center justify-center cursor-pointer active:scale-95 shrink-0"
            title="Send Message"
          >
            <SendHorizontal size={18} className="text-white transition-transform duration-200 group-hover:translate-x-0.5" />
          </button>
        </div>

        {/* Info label */}
        <p className="text-[9px] font-semibold text-slate-600 mt-2.5 ml-2.5 tracking-wide flex items-center gap-1">
          <span>💡</span>
          <span>Press Enter or click send to submit your message. WriteFlow can make mistakes.</span>
        </p>
      </form>
    </div>
  );
};

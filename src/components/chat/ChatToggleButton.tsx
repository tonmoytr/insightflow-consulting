type ChatToggleButtonProps = {
  isOpen: boolean;
  onToggle: () => void;
};

export function ChatToggleButton({ isOpen, onToggle }: ChatToggleButtonProps) {
  return (
    <button
      type="button"
      onClick={onToggle}
      className="flex h-11 w-11 items-center justify-center rounded-full bg-slate-900 text-white shadow-lg shadow-slate-900/30 transition hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-500"
      aria-label={isOpen ? "Close chat" : "Open chat"}
    >
      <span className="text-lg leading-none">{isOpen ? "×" : "💬"}</span>
    </button>
  );
}

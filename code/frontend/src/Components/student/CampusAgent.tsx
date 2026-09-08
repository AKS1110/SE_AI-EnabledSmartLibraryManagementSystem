import { useState } from "react";
import {
  Bot,
  Send,
  Sparkles,
  X,
  User,
} from "lucide-react";

interface CampusAgentProps {
  isOpen: boolean;
  onClose: () => void;
}

interface ChatMessage {
  id: number;
  sender: "agent" | "user";
  message: string;
}

function CampusAgent({
  isOpen,
  onClose,
}: CampusAgentProps) {
  const [input, setInput] = useState("");

  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 1,
      sender: "agent",
      message:
        "Hello! I'm your Campus Intelligence Agent. I can help you find library resources, check availability, and understand your loans.",
    },
  ]);

  const sendMessage = () => {
    const trimmedInput = input.trim();

    if (!trimmedInput) {
      return;
    }

    const userMessage: ChatMessage = {
      id: Date.now(),
      sender: "user",
      message: trimmedInput,
    };

    const agentMessage: ChatMessage = {
      id: Date.now() + 1,
      sender: "agent",
      message:
        "I understand your request. Based on the current library catalog, I recommend using the Intelligent Library Search to find the most relevant available resources.",
    };

    setMessages((currentMessages) => [
      ...currentMessages,
      userMessage,
      agentMessage,
    ]);

    setInput("");
  };

  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (event.key === "Enter") {
      sendMessage();
    }
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-slate-900/30">
      <div className="flex h-full w-full max-w-md flex-col bg-white shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between bg-slate-900 px-5 py-4 text-white">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500">
              <Bot className="h-5 w-5" />
            </div>

            <div>
              <div className="flex items-center gap-2">
                <h2 className="font-bold">
                  Campus Intelligence Agent
                </h2>

                <Sparkles className="h-4 w-4 text-indigo-300" />
              </div>

              <p className="text-xs text-slate-300">
                Smart Library Assistant
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="rounded-lg p-2 transition hover:bg-white/10"
            aria-label="Close assistant"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 space-y-4 overflow-y-auto bg-slate-50 p-5">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex gap-3 ${
                message.sender === "user"
                  ? "justify-end"
                  : "justify-start"
              }`}
            >
              {message.sender === "agent" && (
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-indigo-100">
                  <Bot className="h-4 w-4 text-indigo-600" />
                </div>
              )}

              <div
                className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm leading-6 ${
                  message.sender === "user"
                    ? "rounded-br-md bg-indigo-600 text-white"
                    : "rounded-bl-md bg-white text-slate-700 shadow-sm ring-1 ring-slate-200"
                }`}
              >
                {message.message}
              </div>

              {message.sender === "user" && (
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-200">
                  <User className="h-4 w-4 text-slate-600" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Suggested prompts */}
        <div className="border-t border-slate-200 bg-white px-4 py-3">
          <p className="mb-2 text-xs font-medium text-slate-500">
            Try asking:
          </p>

          <div className="flex flex-wrap gap-2">
            {[
              "Find AI books",
              "What's overdue?",
              "Find machine learning resources",
            ].map((prompt) => (
              <button
                key={prompt}
                type="button"
                onClick={() => setInput(prompt)}
                className="rounded-full border border-slate-200 px-3 py-1.5 text-xs text-slate-600 transition hover:border-indigo-300 hover:bg-indigo-50 hover:text-indigo-700"
              >
                {prompt}
              </button>
            ))}
          </div>
        </div>

        {/* Input */}
        <div className="border-t border-slate-200 bg-white p-4">
          <div className="flex items-center gap-2">
            <input
              type="text"
              value={input}
              onChange={(event) => setInput(event.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ask the Campus Agent..."
              className="flex-1 rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
            />

            <button
              type="button"
              onClick={sendMessage}
              disabled={!input.trim()}
              className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-600 text-white transition hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-50"
              aria-label="Send message"
            >
              <Send className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CampusAgent;

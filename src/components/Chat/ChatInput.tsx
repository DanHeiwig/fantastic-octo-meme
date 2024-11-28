import React from 'react';
import { Send } from 'lucide-react';

interface ChatInputProps {
  input: string;
  onInputChange: (value: string) => void;
  onSend: (e: React.FormEvent) => void;
}

export function ChatInput({ input, onInputChange, onSend }: ChatInputProps) {
  return (
    <form onSubmit={onSend} className="p-4 border-t">
      <div className="flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => onInputChange(e.target.value)}
          placeholder="Ask about MILPER messages..."
          className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4B5320]"
        />
        <button
          type="submit"
          className="bg-[#4B5320] text-white p-2 rounded-lg hover:bg-[#5B6330] transition-colors"
        >
          <Send className="h-5 w-5" />
        </button>
      </div>
    </form>
  );
}
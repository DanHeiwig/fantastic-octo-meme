import React from 'react';
import { MessageSquare } from 'lucide-react';
import { Message } from '../../types';

interface MessageListProps {
  messages: Message[];
}

export function MessageList({ messages }: MessageListProps) {
  return (
    <div className="flex-1 p-4 overflow-y-auto space-y-4">
      {messages.map((message, index) => (
        <div
          key={index}
          className={`flex ${
            message.sender === 'user' ? 'justify-end' : 'justify-start'
          }`}
        >
          <div
            className={`max-w-[80%] p-3 rounded-lg ${
              message.sender === 'user'
                ? 'bg-[#4B5320] text-white'
                : 'bg-gray-100 text-gray-800'
            }`}
          >
            <div className="flex items-center gap-2 mb-1">
              {message.sender === 'bot' && <MessageSquare className="h-4 w-4" />}
              <span className="text-xs opacity-75">
                {message.timestamp.toLocaleTimeString()}
              </span>
            </div>
            <p className="text-sm">{message.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
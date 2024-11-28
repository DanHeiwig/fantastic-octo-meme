import React, { useState } from 'react';
import { Header } from './components/Header/Header';
import { QuickActions } from './components/QuickActions/QuickActions';
import { MessageList } from './components/Chat/MessageList';
import { ChatInput } from './components/Chat/ChatInput';
import { Disclaimers } from './components/Disclaimers/Disclaimers';
import { Message } from './types';
import { getMockResponse } from './utils/responses';

function App() {
  const [messages, setMessages] = useState<Message[]>([
    {
      content: "Hello Soldier, I'm your MILPER Message Assistant. How can I help you today? You can ask about promotions, assignments, evaluations, or any other personnel actions.",
      sender: 'bot',
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState('');

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage: Message = {
      content: input,
      sender: 'user',
      timestamp: new Date(),
    };

    const botResponse: Message = {
      content: getMockResponse(input),
      sender: 'bot',
      timestamp: new Date(),
    };

    setMessages([...messages, userMessage, botResponse]);
    setInput('');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="max-w-4xl mx-auto p-4">
        <QuickActions />
        <div className="bg-white rounded-lg shadow-sm min-h-[500px] flex flex-col">
          <MessageList messages={messages} />
          <ChatInput 
            input={input}
            onInputChange={setInput}
            onSend={handleSend}
          />
        </div>
        <Disclaimers />
      </main>
    </div>
  );
}

export default App;
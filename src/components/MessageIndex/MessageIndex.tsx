import React from 'react';
import { milperMessages } from '../../data/milperMessages';
import { formatDate } from '../../utils/date';

interface MessageIndexProps {
  onClose: () => void;
}

export function MessageIndex({ onClose }: MessageIndexProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg w-full max-w-2xl max-h-[80vh] flex flex-col">
        <div className="p-4 border-b flex justify-between items-center">
          <h2 className="text-xl font-bold">MILPER Message Index</h2>
          <button 
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            ✕
          </button>
        </div>
        
        <div className="overflow-y-auto flex-1 p-4">
          <div className="space-y-4">
            {milperMessages.map((message) => (
              <div 
                key={message.id}
                className="border rounded-lg p-4 hover:bg-gray-50"
              >
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold">
                    MILPER #{message.id}
                  </h3>
                  <span className="text-sm text-gray-500">
                    {formatDate(message.publishDate)}
                  </span>
                </div>
                <p className="text-sm mb-2">{message.title}</p>
                <div className="flex justify-between items-center">
                  <span className="text-xs px-2 py-1 bg-[#4B5320] text-white rounded">
                    {message.category}
                  </span>
                  <span className="text-xs text-gray-500">
                    Expires: {formatDate(message.expirationDate)}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
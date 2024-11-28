import React, { useState, useEffect } from 'react';
import { Search as SearchIcon, X } from 'lucide-react';
import { useFloating, useInteractions, useRole, useDismiss, FloatingFocusManager, FloatingOverlay } from '@floating-ui/react';
import { searchMilperMessages } from '../../utils/search';
import { formatDate } from '../../utils/date';
import { MilperMessage } from '../../types/milper';

interface SearchDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SearchDialog({ isOpen, onClose }: SearchDialogProps) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<MilperMessage[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const { refs, context } = useFloating({
    open: isOpen,
    onOpenChange: (open) => {
      if (!open) onClose();
    },
  });

  const role = useRole(context);
  const dismiss = useDismiss(context);
  const { getFloatingProps } = useInteractions([role, dismiss]);

  useEffect(() => {
    if (query.trim()) {
      const searchResults = searchMilperMessages(query);
      setResults(searchResults.map(r => r.message));
    } else {
      setResults([]);
    }
  }, [query]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex(prev => 
        prev < results.length - 1 ? prev + 1 : prev
      );
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex(prev => prev > -1 ? prev - 1 : prev);
    }
  };

  if (!isOpen) return null;

  return (
    <FloatingOverlay className="bg-black/50 z-50 fixed inset-0 flex items-start justify-center pt-[20vh]">
      <FloatingFocusManager context={context}>
        <div
          ref={refs.setFloating}
          {...getFloatingProps()}
          className="bg-white rounded-lg shadow-xl w-full max-w-2xl"
        >
          <div className="p-4 flex items-center gap-3 border-b">
            <SearchIcon className="w-5 h-5 text-gray-400" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Search MILPER messages..."
              className="flex-1 outline-none text-lg"
              autoFocus
            />
            <button
              onClick={onClose}
              className="p-1 hover:bg-gray-100 rounded-full"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="max-h-[60vh] overflow-y-auto">
            {results.length > 0 ? (
              <div className="p-2">
                {results.map((message, index) => (
                  <div
                    key={message.id}
                    className={`p-3 rounded-lg ${
                      index === selectedIndex
                        ? 'bg-[#4B5320] text-white'
                        : 'hover:bg-gray-100'
                    }`}
                  >
                    <div className="flex justify-between items-start mb-1">
                      <span className="font-medium">
                        MILPER #{message.id}
                      </span>
                      <span className={`text-sm ${
                        index === selectedIndex ? 'text-white/80' : 'text-gray-500'
                      }`}>
                        {formatDate(message.publishDate)}
                      </span>
                    </div>
                    <p className="text-sm mb-2">{message.title}</p>
                    <div className="flex justify-between items-center">
                      <span className={`text-xs px-2 py-1 rounded ${
                        index === selectedIndex
                          ? 'bg-white/20'
                          : 'bg-[#4B5320] text-white'
                      }`}>
                        {message.category}
                      </span>
                      <span className={`text-xs ${
                        index === selectedIndex ? 'text-white/80' : 'text-gray-500'
                      }`}>
                        Expires: {formatDate(message.expirationDate)}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            ) : query && (
              <div className="p-8 text-center text-gray-500">
                No MILPER messages found matching "{query}"
              </div>
            )}
          </div>
        </div>
      </FloatingFocusManager>
    </FloatingOverlay>
  );
}
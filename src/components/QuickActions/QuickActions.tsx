import React, { useState } from 'react';
import { FileText, Search, Clock, AlertCircle } from 'lucide-react';
import { QuickAction } from '../../types';
import { MessageIndex } from '../MessageIndex/MessageIndex';
import { ExpiringMessages } from '../ExpiringMessages/ExpiringMessages';
import { SearchDialog } from '../Search/SearchDialog';

export function QuickActions() {
  const [showMessageIndex, setShowMessageIndex] = useState(false);
  const [showExpiringMessages, setShowExpiringMessages] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  const actions: QuickAction[] = [
    { 
      icon: <FileText className="text-[#4B5320]" />, 
      label: 'Message Index',
      onClick: () => setShowMessageIndex(true)
    },
    { 
      icon: <Search className="text-[#4B5320]" />, 
      label: 'Search MILPER',
      onClick: () => setShowSearch(true)
    },
    { 
      icon: <Clock className="text-[#4B5320]" />, 
      label: 'Recent Messages',
      onClick: () => console.log('Recent clicked')
    },
    { 
      icon: <AlertCircle className="text-[#4B5320]" />, 
      label: 'Expiring Soon',
      onClick: () => setShowExpiringMessages(true)
    },
  ];

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {actions.map((action, index) => (
          <button
            key={index}
            onClick={action.onClick}
            className="flex items-center gap-2 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
          >
            {action.icon}
            <span className="font-medium">{action.label}</span>
          </button>
        ))}
      </div>

      {showMessageIndex && (
        <MessageIndex onClose={() => setShowMessageIndex(false)} />
      )}

      {showExpiringMessages && (
        <ExpiringMessages onClose={() => setShowExpiringMessages(false)} />
      )}

      <SearchDialog 
        isOpen={showSearch}
        onClose={() => setShowSearch(false)}
      />
    </>
  );
}
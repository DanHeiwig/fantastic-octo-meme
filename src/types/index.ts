export interface Message {
  content: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

export interface QuickAction {
  icon: React.ReactNode;
  label: string;
  onClick: () => void;
}
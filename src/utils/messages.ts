import { MilperMessage } from '../types/milper';
import { milperMessages } from '../data/milperMessages';
import { getDaysUntilExpiration } from './date';

interface ExpiringMessage extends MilperMessage {
  daysUntilExpiration: number;
}

export function getExpiringMessages(): ExpiringMessage[] {
  const thirtyDaysFromNow = new Date();
  thirtyDaysFromNow.setDate(thirtyDaysFromNow.getDate() + 30);

  return milperMessages
    .map(message => ({
      ...message,
      daysUntilExpiration: getDaysUntilExpiration(message.expirationDate)
    }))
    .filter(message => message.daysUntilExpiration <= 30 && message.daysUntilExpiration > 0)
    .sort((a, b) => a.daysUntilExpiration - b.daysUntilExpiration);
}
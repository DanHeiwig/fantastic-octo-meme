import { MilperMessage, SearchResult } from '../types/milper';
import { milperMessages } from '../data/milperMessages';

export function searchMilperMessages(query: string): SearchResult[] {
  const searchTerms = query.toLowerCase().split(' ');
  
  return milperMessages
    .map(message => {
      const relevanceScore = calculateRelevance(message, searchTerms);
      return { message, relevanceScore };
    })
    .filter(result => result.relevanceScore > 0)
    .sort((a, b) => b.relevanceScore - a.relevanceScore);
}

function calculateRelevance(message: MilperMessage, searchTerms: string[]): number {
  let score = 0;
  
  // Convert message content to lowercase for case-insensitive matching
  const content = message.content.toLowerCase();
  const title = message.title.toLowerCase();
  
  for (const term of searchTerms) {
    // Higher weight for matches in title and keywords
    if (title.includes(term)) score += 3;
    if (message.keywords.some(k => k.toLowerCase().includes(term))) score += 2;
    
    // Base score for content matches
    if (content.includes(term)) score += 1;
  }
  
  // Boost score for recent messages
  const daysSincePublish = (new Date().getTime() - message.publishDate.getTime()) / (1000 * 60 * 60 * 24);
  if (daysSincePublish < 30) score *= 1.2;
  
  return score;
}
import { searchMilperMessages } from './search';

export function getMockResponse(query: string): string {
  const searchResults = searchMilperMessages(query);
  
  if (searchResults.length > 0) {
    const topResult = searchResults[0];
    const message = topResult.message;
    
    return `According to MILPER Message ${message.id} (${formatDate(message.publishDate)}): ${message.summary}\n\nKey details: ${extractKeyDetails(message.content)}`;
  }
  
  return "I understand your question about MILPER messages. However, I couldn't find a specific message addressing your query. For the most accurate and up-to-date information, please verify through official HRC channels or your S1. How else can I assist you?";
}

function formatDate(date: Date): string {
  return date.toLocaleDateString('en-US', { 
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });
}

function extractKeyDetails(content: string): string {
  // Extract the first relevant paragraph after numbered points
  const paragraphs = content.split('\n');
  const relevantParagraphs = paragraphs.filter(p => 
    p.match(/^\d+\./) && // Starts with a number and period
    p.length > 20 // Has substantial content
  );
  
  return relevantParagraphs[0]?.replace(/^\d+\.\s*/, '') || content.split('\n')[0];
}
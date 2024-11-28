export interface MilperMessage {
  id: string;
  title: string;
  category: MilperCategory;
  publishDate: Date;
  expirationDate: Date;
  content: string;
  keywords: string[];
  summary: string;
}

export type MilperCategory = 
  | 'PROMOTIONS'
  | 'EVALUATIONS'
  | 'ASSIGNMENTS'
  | 'SCHOOLS'
  | 'RETENTION'
  | 'SEPARATIONS'
  | 'AWARDS'
  | 'OTHER';

export interface SearchResult {
  message: MilperMessage;
  relevanceScore: number;
}
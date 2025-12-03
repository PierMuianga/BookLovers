export interface FeaturedSpotlight {
  id: string;
  title: string;
  description: string;
  cover: string;
  reason: string;
  glassEffect?: boolean;
}

export interface BookSummary {
  id: string;
  title: string;
  author: string;
  cover: string;
  length: string;
  access: string;
  genre: string;
}

export interface QuizHighlight {
  id: string;
  bookTitle: string;
  chapter: number;
  prompt: string;
  tags: string[];
}

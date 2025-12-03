export interface BookChapter {
  id: string;
  title: string;
  length: string;
}

export interface BookSection {
  title: string;
  chapters: BookChapter[];
}

export interface BookDetail {
  id: string;
  title: string;
  author: string;
  description: string;
  cover: string;
  tags: string[];
  isPublicDomain: boolean;
  price: number;
  availability: {
    inventory: number;
    canBorrow: boolean;
    canBuy: boolean;
  };
  sections: BookSection[];
  why: string;
  submittedBy: string;
}

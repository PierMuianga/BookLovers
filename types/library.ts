interface BaseItem {
  id: string;
  title: string;
  subtitle: string;
  cover?: string;
}

interface BorrowedItem extends BaseItem {
  due?: string;
  progress?: never;
  notes?: string;
}

interface ProgressItem extends BaseItem {
  progress?: string;
  notes?: string;
  due?: never;
}

export type LibraryCard = BorrowedItem | ProgressItem;

export interface LibraryData {
  purchased: LibraryCard[];
  borrowed: LibraryCard[];
  inProgress: LibraryCard[];
  completed: LibraryCard[];
  highlights: LibraryCard[];
}

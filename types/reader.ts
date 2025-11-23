export interface ReaderChapter {
  id: string;
  title: string;
  content: string;
  progress: string;
  estimate: string;
}

export interface ReaderData {
  id: string;
  title: string;
  author: string;
  chapters: ReaderChapter[];
}

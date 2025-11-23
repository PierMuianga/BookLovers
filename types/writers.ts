export interface WriterRequest {
  id: string;
  name: string;
  reason: string;
}

export interface WriterDraft {
  id: string;
  title: string;
  genre: string;
  status: string;
}

export interface AiFeedback {
  id: string;
  title: string;
  message: string;
  severity: "High" | "Medium" | "Low";
}

export interface WriterSubmission {
  id: string;
  title: string;
  summary: string;
  status: string;
  submitted: string;
}

export interface WriterHubData {
  requests: WriterRequest[];
  drafts: WriterDraft[];
  aiFeedback: AiFeedback[];
  submissions: WriterSubmission[];
}

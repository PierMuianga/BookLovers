import { z } from "zod";

const quizSchema = z.object({
  id: z.string(),
  bookId: z.string(),
  chapterId: z.string(),
  questions: z.array(
    z.object({
      q: z.string(),
      options: z.array(z.string()),
      answerIndex: z.number().min(0)
    })
  )
});

type QuizPayload = z.infer<typeof quizSchema>;

export async function generateQuiz(payload: QuizPayload) {
  const parsed = quizSchema.parse(payload);
  return {
    ...parsed,
    generatedByAI: true
  };
}

export async function aiExplainRecommendation(reason: string) {
  return `AI reason: ${reason}`;
}

export async function fetchPublicDomainBooks(feedUrl: string) {
  return [
    {
      id: "public-domain-1",
      title: "Pride and Prejudice",
      author: "Jane Austen",
      source: feedUrl
    }
  ];
}

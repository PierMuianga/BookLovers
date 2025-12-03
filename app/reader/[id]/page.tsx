import { notFound } from "next/navigation";
import { getReaderExperience } from "@/lib/data/reader";
import { ReaderShell } from "@/components/layout/reader-shell";

interface ReaderPageProps {
  params: { id: string };
}

export default async function ReaderPage({ params }: ReaderPageProps) {
  const { id } = params;
  const data = await getReaderExperience(id);

  if (!data) {
    notFound();
  }

  return <ReaderShell data={data} />;
}

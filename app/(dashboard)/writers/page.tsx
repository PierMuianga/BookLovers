import { WriterOverview } from "@/components/layout/writer-overview";
import { getWriterHubData } from "@/lib/data/writers";

export default async function WritersHubPage() {
  const data = await getWriterHubData();
  return <WriterOverview data={data} />;
}

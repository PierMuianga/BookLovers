import { getAdminDashboard } from "@/lib/data/admin";
import { AdminDashboard } from "@/components/layout/admin-dashboard";

export default async function AdminPage() {
  const data = await getAdminDashboard();
  return <AdminDashboard data={data} />;
}

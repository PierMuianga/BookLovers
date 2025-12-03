import { supabase } from "@/lib/supabase";

async function run() {
  console.log("Seeding demo users and books...");
  await supabase.rpc("seed_demo_data");
  console.log("Seed complete");
}

run().catch((error) => {
  console.error(error);
  process.exit(1);
});

import Image from "next/image";
import RadialProgressBar from "@/components/admin/widgets/RadialProgressBar";
import SubscriptionStatus from "@/components/admin/widgets/SubscriptionStatus";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <RadialProgressBar progress={50} />
      <SubscriptionStatus progress={50} />
    </main>
  );
}

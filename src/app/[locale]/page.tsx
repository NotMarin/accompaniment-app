import { redirect } from "@/i18n/navigation";

export default function Home() {
  return redirect({ href: "/login", locale: "en" });
}

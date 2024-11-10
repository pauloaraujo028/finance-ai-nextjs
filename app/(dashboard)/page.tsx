import { Button } from "@/components/ui/button";
import { SignOutButton, UserButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function Home() {
  const { userId } = await auth();

  if (!userId) {
    redirect("/sign-in");
  }

  return (
    <div>
      <Button>Olá Mundo!</Button>

      <UserButton />
      <SignOutButton redirectUrl="/sign-in" />
    </div>
  );
}

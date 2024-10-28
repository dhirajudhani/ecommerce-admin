import prismadb from "@/lib/prismadb";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import type React from "react";

export default async function SetupLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { userId } = auth();

  if (!userId) {
    redirect("/signin");
  }

  const store = await prismadb.store.findFirst({
    where: {
      userId: userId,
    },
  });

  if (store) {
    redirect(`/${store.id}`);
  }

  return <>{children}</>;
}

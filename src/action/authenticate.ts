"use server";

import { signIn, signOut } from "@/lib/auth";
import { redirect } from "next/navigation";

export const authenticateSignIn = async () => {
  await signIn();
  redirect("/recipes");
};

export const authenticateSignOut = async () => {
  await signOut({
    redirectTo: "/",
  });
};

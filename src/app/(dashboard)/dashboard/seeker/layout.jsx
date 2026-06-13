import { auth } from "@/lib/auth";
import { requireRole } from "@/lib/core/session";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import React from "react";

const SeekerLayout = async ({ children }) => {
  // const session = await auth.api.getSession({
  //   headers: await headers(),
  // });

  // if (session?.user?.role !== "seeker") redirect("/");

  await requireRole("seeker");

  return children;
};

export default SeekerLayout;

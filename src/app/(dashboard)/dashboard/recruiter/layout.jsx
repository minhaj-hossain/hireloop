import { auth } from "@/lib/auth";
import { requireRole } from "@/lib/core/session";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import React from "react";

const RecruiterLayout = async ({ children }) => {
  // const session = await auth.api.getSession({
  //   headers: await headers(),
  // });

  // if (session?.user?.role !== "recruiter") redirect("/");

  await requireRole("recruiter");

  return children;
};

export default RecruiterLayout;

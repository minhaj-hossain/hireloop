"use server";

import { headers } from "next/headers";
import { auth } from "../auth";
import { getUserSession } from "../core/session";

export const createCompany = async (formData) => {
  /// 2. Await the headers and pass them into the getSession function
  // const session = await auth.api.getSession({
  //   headers: await headers(),
  // });

  const user = await getUserSession();

  if (!user) {
    return { success: false, message: "Unauthorized" };
  }

  const recruiterId = user?.id;
  // const status = "pending";

  // console.log(recruiterId);

  // 2. Forward it to Express exactly like before
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/companies`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ...formData, recruiterId }),
  });

  return res.json();
};

export const getCompany = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/get-company`,
  );
  const data = await res.json();
  return data;
};

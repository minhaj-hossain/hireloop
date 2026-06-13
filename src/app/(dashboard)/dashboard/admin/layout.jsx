
import { requireRole } from "@/lib/core/session";


const AdminLayout = async ({ children }) => {
  // const session = await auth.api.getSession({
  //   headers: await headers(),
  // });

  // //   console.log();

  // if (session?.user?.role !== "admin") {
  //   redirect("/");
  // }
  await requireRole("admin");

  return children;
};

export default AdminLayout;

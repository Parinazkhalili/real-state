
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import DashboardSidebar from '@/layout/DashboardSidebar';
import { redirect } from "next/navigation";




async function DashboardLayout({children}) {
    const session = await getServerSession(authOptions);
    if (!session) redirect("/signin");
  return (
    <DashboardSidebar>{children}</DashboardSidebar>
  )
}

export default DashboardLayout
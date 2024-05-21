import {getServerSession} from "next-auth" ;
import {authOptions} from "@/api/auth/[...nextauth]/route"
import {redirect} from "next/navigation"
import SignupPage from '@/template/SignupPage'


async function signup() {
  const session = await getServerSession(authOptions);
  if(session) redirect("/")
  return (
    <SignupPage />
  )
}

export default signup
import {useContext} from "react"
import {useRouter} from "next/navigation"
import {ShopeProviderContext} from "@/context/ShopeContext"

export default function withAuthandRole(Component: any) {
  const Auth = (props: any) => {
    const {cookies} = useContext(ShopeProviderContext)
    const router = useRouter()

    if (cookies.token && window.localStorage.getItem("role") == "ADMIN") {
      return <Component {...props} />
    }
    return router.push("/")
  }
  return Auth
}

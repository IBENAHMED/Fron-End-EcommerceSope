import {useContext} from "react";
import {ShopeProviderContext} from "@/context/ShopeContext";

import SignUp from "@/components/SignUp/SignUp";

export default function withAuth (Component: any) {
  const Auth = (props: any) => {
    const {cookies} = useContext(ShopeProviderContext);

    if (cookies && cookies.token) {
      return <Component {...props} />
    };
    return <SignUp />
  };
  return Auth;
};
import SignUp from "@/components/SignUp/SignUp";
import { ShopeProviderContext } from "@/context/ShopeContext";
import { useRouter } from "next/navigation";
import { useContext, useState } from "react";

const withAuthandRole = (Component: any) => {
    const Auth = (props: any) => {
        const { cookies } = useContext(ShopeProviderContext);
        const router = useRouter()


        if (cookies.token && window.localStorage.getItem("role") == "ADMIN") {
            return (
                <Component {...props} />
            );
        };

        return (router.push("/"))
    };
    return Auth;
};

export default withAuthandRole;

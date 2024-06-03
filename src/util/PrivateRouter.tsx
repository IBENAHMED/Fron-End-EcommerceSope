import SignUp from "@/components/SignUp/SignUp";
import { ShopeProviderContext } from "@/context/ShopeContext";
import { useContext } from "react";

const withAuth = (Component: any) => {
    const Auth = (props: any) => {
        const { cookies } = useContext(ShopeProviderContext);

        if (!cookies.token) {
            return (
                <SignUp />
            );
        }

        return (
            <Component {...props} />
        );
    };


    return Auth;
};

export default withAuth;

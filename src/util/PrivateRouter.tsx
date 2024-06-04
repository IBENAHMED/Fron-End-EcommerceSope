import SignUp from "@/components/SignUp/SignUp";
import { ShopeProviderContext } from "@/context/ShopeContext";
import { useContext } from "react";

const withAuth = (Component: any) => {
    const Auth = (props: any) => {
        const { cookies } = useContext(ShopeProviderContext);

        if (cookies && cookies.token) {
            return (
                <Component {...props} />
            );
        }

        return (
            <SignUp />
        );
    };
    return Auth;
};

export default withAuth;

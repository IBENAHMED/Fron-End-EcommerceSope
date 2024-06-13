"use client"
import Swale from "@/components/Swal/Swal";
import axios from "axios";
import { useRouter } from "next/navigation";
import { createContext, useEffect, useState } from "react";
import { useCookies } from "react-cookie";
export let ShopeProviderContext = createContext<any>(null);

const ShopeContext = ({ children }: any) => {

    const [cookies, setCookie, removeCookie] = useCookies(['token']);
    const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

    let [all_products, setAll_Products]: any = useState();
    let [cardItems, setCardItems]: any = useState({});
    let router = useRouter();

    // **************************************************************************** Start async function 

    let getDefaultCarts = async () => {
        if (cookies.token) {
            try {
                const response = await axios.post(`${BASE_URL}/UserListCartDate`, {}, {
                    headers: {
                        'Content-Type': 'application/json',
                        'token-auth': cookies.token,
                    }
                });
                setCardItems(response.data.cartData);

            } catch (error) {
                router.push("/error");
            }
        };
    };

    let fetchAllproducts = async () => {
        try {

            let res = await axios.get(`${BASE_URL}/getallproducts`);
            setAll_Products(res.data.allPrudcts);

        } catch (err) {
            router.push("/error");
        };
    };

    let fetchProductswithpagination = async () => {
        try {

            let response = await axios.post(`${BASE_URL}/getallproductswithpagination/${page}`);
            setAllProductsPagination(response.data.productPage);
            setNumberpage(response.data.numberPages);

        } catch (err) {
            router.push("/error")
        }
    }

    // **************************************************************************** End async function
    // **************************************************************************** Start User

    useEffect(() => {
        getDefaultCarts();
    }, []);

    useEffect(() => {

        fetchAllproducts();
        const intervalId = setInterval(fetchAllproducts, 30000);
        return () => clearInterval(intervalId);

    }, [cookies.token]);

    let AddCardItems = async (id: any, size: any) => {
        if (cookies.token) {
            await fetch(`${BASE_URL}/userAddPoduct`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'token-auth': cookies.token,
                },
                body: JSON.stringify({
                    id,
                    size
                }),
            }).then((res) => {
                res.status == 200 ?
                    Swale("Product Added ✅") :
                    res.status == 403 ?
                        Swale("Size product is not available in the stock ❌") :
                        router.push("/error")

            })
            getDefaultCarts();
        } else {
            router.push("/SignUp")
        }
    };

    let RemoveCardItems = async (id: any) => {
        if (cookies.token) {
            let ckeck = confirm("do you want remove this product");
            if (ckeck) {
                await fetch(`${BASE_URL}/userRemovePoduct`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'token-auth': cookies.token,
                    },
                    body: JSON.stringify({
                        id
                    }),
                }).then((res) => {
                    if (res.status !== 200) {
                        router.push("/error")
                    }
                })
                getDefaultCarts();
            }
        }
    };

    let gettotalPriceProducts = () => {

        let totle: number = 0;
        all_products.map((item: any) => {
            if (cardItems[item._id] > 0) {
                totle = totle + item.new_price * cardItems[item._id];
            };
        });

        return totle;
    };

    let getTotalCartItemAdded = () => {

        let total: any = 0;
        all_products
            ?
            all_products.map((e: any) => {
                if (cardItems[e._id] > 0) {
                    total = total + cardItems[e._id];
                }
            })
            :
            total = "..."

        return total;
    }

    // **************************************************************************** End User
    // **************************************************************************** Start Pgae ListProducts

    let [allProductsPagination, setAllProductsPagination]: any = useState([]);
    let [numberpage, setNumberpage]: any = useState(undefined);
    let [page, setPage]: any = useState(1);

    useEffect(() => {
        fetchProductswithpagination();
    }, [])

    useEffect(() => {

        fetchProductswithpagination();
        const intervalId = setInterval(fetchProductswithpagination, 6000);
        return () => clearInterval(intervalId);

    }, [page]);


    let pageNumbers: any[] = [];
    if (numberpage !== undefined) {
        for (let index = 1; index <= numberpage; index++) {
            pageNumbers.push(index)
        };
    };

    let handlingPagination = (e: React.MouseEvent<HTMLLIElement>) => {

        let name = e.target as HTMLLIElement;
        let valueName = name.textContent;
        setPage(valueName);

    }

    // **************************************************************************** End Pgae ListProducts

    let contextValue = {
        allProductsPagination, pageNumbers, handlingPagination,
        cookies, setCookie, removeCookie,
        all_products,
        cardItems,
        AddCardItems,
        RemoveCardItems,
        gettotalPriceProducts,
        getTotalCartItemAdded
    }

    return (
        <div>
            <ShopeProviderContext.Provider value={contextValue}>
                {children}
            </ShopeProviderContext.Provider>
        </div>
    )
}

export default ShopeContext

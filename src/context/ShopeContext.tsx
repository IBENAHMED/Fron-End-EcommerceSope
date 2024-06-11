"use client"
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
    let route = useRouter();

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
                route.push("/error");
            }
        }
    }

    useEffect(() => {
        getDefaultCarts();
    }, []);

    useEffect(() => {
        let fetchData = async () => {
            try {
                let res = await axios.get(`${BASE_URL}/getallproducts`);
                setAll_Products(res.data.allPrudcts);
            } catch (err) {
                route.push("/error");
            }
        };
        fetchData();
    }, [cookies.token])

    // function addFunction(prev: any, item: number) {return ({...prev, [item]: prev[item] + 1})}

    let AddCardItems = async (id: any) => {
        if (cookies.token) {
            await fetch(`${BASE_URL}/userAddPoduct`, {
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
                    route.push("/error")
                }
            })
            getDefaultCarts();
        } else {
            route.push("/SignUp")
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
                        route.push("/error")
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

    let contextValue = {
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

"use client"
import Spinner from "@/components/Spinner/Spinner";
import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { useCookies } from "react-cookie";
export let ShopeProviderContext = createContext<any>(null);

const ShopeContext = ({ children }: any) => {

    const [cookies, setCookie, removeCookie] = useCookies(['token']);

    const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

    let [cardItems, setCardItems]: any = useState({});
    let [all_products, setAll_Products]: any = useState();

    useEffect(() => {
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
                    console.error('Error fetching cart data:', error);
                }
            }
        }
        getDefaultCarts();

        let fetchData = async () => {
            let data = await axios.get(`${BASE_URL}/getallproducts`);
            setAll_Products(data.data.allPrudcts);
        };

        fetchData();

    }, [cardItems]);
    // function addFunction(prev: any, item: number) {return ({...prev, [item]: prev[item] + 1})}

    let AddCardItems = async (id: any) => {
        if (cookies.token) {
            let data = await fetch(`${BASE_URL}/userAddPoduct`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'token-auth': cookies.token,
                },
                body: JSON.stringify({
                    id
                }),
            })
            return data.json();
        }
    };

    let RemoveCardItems = async (id: any) => {
        if (cookies.token) {
            let data = await fetch(`${BASE_URL}/userRemovePoduct`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'token-auth': cookies.token,
                },
                body: JSON.stringify({
                    id
                }),
            })
            data.json();
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

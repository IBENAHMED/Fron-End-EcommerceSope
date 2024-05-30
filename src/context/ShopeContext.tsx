"use client"
import axios from "axios";
import { createContext, useEffect, useState } from "react";
// import all_product from "../Assets/all_product";

export let ShopeProviderContext = createContext<any>(null);

// get all product

// let all_products = all_product;

// let AllDefaultCarts: any = {}
// function getDefaultCarts() {
//     for (let i = 0; i < 300; i++) {
//         AllDefaultCarts[i] = 0;
//     };
//     return AllDefaultCarts;
// };

let token = localStorage.getItem("token");


const ShopeContext = ({ children }: any) => {

    let [cardItems, setCardItems]: any = useState({});
    let [all_products, setAll_Products]: any = useState([]);

    useEffect(() => {
        let getDefaultCarts = async () => {
            if (token) {
                try {
                    const response = await axios.post("http://localhost:4000/UserListCartDate", {}, {
                        headers: {
                            'Content-Type': 'application/json',
                            'token-auth': token,
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
            let data = await axios.get("http://localhost:4000/getallproducts");
            setAll_Products(data.data.allPrudcts);
        };

        fetchData();

    }, [cardItems]);
    // function addFunction(prev: any, item: number) {return ({...prev, [item]: prev[item] + 1})}

    let AddCardItems = async (id: any) => {
        if (token) {
            let data = await fetch("http://localhost:4000/userAddPoduct", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'token-auth': token,
                },
                body: JSON.stringify({
                    id
                }),
            })
            return data.json();
        }
    };

    let RemoveCardItems = async (id: any) => {
        if (token) {
            let data = await fetch("http://localhost:4000/userRemovePoduct", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'token-auth': token,
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
        let total = 0;
        all_products.map((e: any) => {
            if (cardItems[e._id] > 0) {
                total = total + cardItems[e._id];
            }
        });
        return total;
    }

    let contextValue = {
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

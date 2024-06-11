import StripeCheckout from 'react-stripe-checkout';
import './CardItem.css';
import Swale from '../Swal/Swal';

const CardItem = ({
    all_products,
    cardItems,
    RemoveCardItems,
    gettotalPriceProducts,
    cookies
}: any) => {

    let products: any = [];
    const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

    let makePayment = (token: any) => {
        const body = {
            token,
            products
        };

        return fetch(`${BASE_URL}/charge`, {
            method: "POST",
            headers: { "Content-Type": "application/json", "token-auth": cookies.token },
            body: JSON.stringify(body),
        }).then((res) => {
            if (res.status == 401) {
                Swale("error", "the user not authorized")
            }
        });
    }

    return (
        <div className="bg-slate-50 pt-7 px-8">
            <div className="container mx-auto bg-slate-50 p-6 rounded-lg shadow-md overflow-auto" style={{ "maxHeight": "calc(100vh - 105px)" }}>
                <h1 className="text-2xl font-bold mb-4 text-gray-800">All Products List</h1>
                <table className="w-full text-left table-auto border-collapse">
                    <thead className="bg-gray-100 text-gray-600">
                        <tr className="w-full border-b border-gray-300">
                            <th className="px-4 py-2 text-left">Product</th>
                            <th className="px-4 py-2 text-left">Title</th>
                            <th className="px-4 py-2 text-right">Price</th>
                            <th className="px-4 py-2 text-center">Quantity</th>
                            <th className="px-4 py-2 text-right">Total</th>
                            <th className="px-4 py-2 text-center">Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            all_products.map((e: any) => {
                                if (cardItems[e._id] > 0) {

                                    let updateProduct = { ...e, Qnt: cardItems[e._id] };
                                    products = [...products, updateProduct]

                                    return (
                                        <tr key={e._id} className="border-b border-gray-200 bg-slate-50 hover:bg-gray-50 transition-colors">
                                            <td className="px-4 py-2">
                                                <img src={e.img} alt={`${e.name}`} className="w-12 h-12 object-cover rounded-lg" />
                                            </td>
                                            <td className="px-4 py-2 text-gray-800">{e.name}</td>
                                            <td className="px-4 py-2 text-right text-gray-700">${e.new_price}</td>
                                            <td className="px-4 py-2 text-center">
                                                <p className="w-12 text-center border border-gray-300 rounded-md bg-gray-100">{cardItems[e._id]}</p>
                                            </td>
                                            <td className="px-4 py-2 text-right text-gray-800">${e.new_price * cardItems[e._id]}</td>
                                            <td className="px-4 py-2 text-center text-red-500 cursor-pointer hover:text-red-700 transition-colors" onClick={() => RemoveCardItems(e._id)}>
                                                X
                                            </td>
                                        </tr>
                                    )
                                }
                            })
                        }
                    </tbody>
                </table>
            </div>
            <div className="py-10 px-3 grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="bg-slate-50 shadow-lg rounded-lg p-6">
                    <h1 className="text-3xl py-3 font-bold text-gray-800">Cart Totals</h1>
                    <div className="flex justify-between py-2">
                        <p className="text-gray-600">Subtotal</p>
                        <span className="text-gray-800">${gettotalPriceProducts()}</span>
                    </div>
                    <hr className="my-2" />
                    <div className="flex justify-between py-2">
                        <p className="text-gray-600">Shipping Fee</p>
                        <span className="text-gray-800">Free</span>
                    </div>
                    <hr className="my-2" />
                    <div className="flex justify-between py-2">
                        <p className="font-bold text-gray-800">Total</p>
                        <span className="text-gray-800">${gettotalPriceProducts()}</span>
                    </div>
                    <hr className="my-2" />
                    <StripeCheckout
                        stripeKey={`${process.env.NEXT_PUBLIC_PUBLISHABLE_KEY}`} // Your Stripe publishable key
                        token={makePayment}
                        amount={gettotalPriceProducts() * 100} // Amount in cents ($10)
                        name="Example Store"
                        description="Purchase"
                        currency="USD"
                    />
                </div>
                <div className="bg-slate-50 shadow-lg rounded-lg p-6">
                    <p className="text-slate-500 mb-4">If you have a promo code, enter it here:</p>
                    <form className="flex items-center bg-gray-100 rounded-full overflow-hidden">
                        <input type="text" placeholder="Promo Code" className="flex-grow p-4 text-sm text-gray-700 outline-none bg-transparent" />
                        <button type="submit" className="p-2 bg-gray-300 hover:bg-gray-400 text-gray-600 rounded-full mx-2">
                            <span className="px-5 text-xs">Apply</span>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

/*
  
*/
export default CardItem

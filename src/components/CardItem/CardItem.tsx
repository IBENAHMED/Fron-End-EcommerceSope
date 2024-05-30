import './CardItem.css';
import remove from '../../Assets/cart_cross_icon.png';

const CardItem = ({
    all_products,
    cardItems,
    RemoveCardItems,
    gettotalPriceProducts,
}: any) => {

    return (
        <div>
            <div className="container mx-auto pt-8">
                <div className='bg-white border border-gray-200'>
                    <table className="cardItem min-w-full ">
                        <thead>
                            <tr className="w-full border-b border-gray-300">
                                <th className="px-4 py-2 text-left">Products</th>
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
                                        return (
                                            <tr key={e._id} className="border-b border-gray-200">
                                                <td className="px-4 py-2">
                                                    <img src={e.img} alt="Product Image" className="w-12 h-12 object-cover" />
                                                </td>
                                                <td className="px-4 py-2">{e.name}</td>
                                                <td className="px-4 py-2 text-right">${e.new_price}</td>
                                                <td className="px-4 py-2 text-center">
                                                    <p className="w-12 text-center border border-gray-300 rounded-md">{cardItems[e._id]}</p>
                                                </td>
                                                <td className="px-4 py-2 text-right">${e.new_price * cardItems[e._id]}</td>
                                                <td
                                                    className="px-4 py-2 text-center text-red-500 cursor-pointer"
                                                    onClick={() => RemoveCardItems(e._id)}
                                                >
                                                    X
                                                </td>
                                            </tr>
                                        )
                                    }
                                })
                            }
                        </tbody>
                    </table>
                    <div className='CardItem-down py-10 px-3 grid grid-cols-2 gap-10' >
                        <div className='CardItem-left'>
                            <h1 className='text-3xl py-3'>Crat Totals</h1>
                            <div className='flex justify-between'>
                                <p>Subtotal</p>
                                <span>${gettotalPriceProducts()}</span>
                            </div>
                            <hr className='py-3' />
                            <div className='flex justify-between'>
                                <p>SubShopping Free</p>
                                <span>Free</span>
                            </div>
                            <hr className='py-3' />
                            <div className='flex justify-between'>
                                <p className='font-bold'>Total</p>
                                <span>${gettotalPriceProducts()}</span>
                            </div>
                            <hr className='py-3' />
                            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">ADD to CART</button>
                        </div>
                        <div className='CardItem-right'>
                            <p className='text-slate-500'>
                                if you have a promo code enter it here
                            </p>
                            <form className="flex items-center bg-white shadow rounded-full overflow-hidden">
                                <input type="text" placeholder="Your Email" className="flex-grow p-4 text-sm text-gray-700 outline-none" />
                                <button type="submit" className="p-2 bg-gray-200 hover:bg-gray-300 focus:bg-gray-300 text-gray-600 rounded-full mx-2">
                                    <span className='px-5 text-xs'>Subscribe</span>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

/*
  
*/
export default CardItem

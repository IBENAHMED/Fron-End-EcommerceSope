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
            <div className="bg-red-50 pt-7 px-8">
                <div className="container mx-auto bg-white p-6 rounded-lg shadow-md" style={{ "maxHeight": "calc(100vh - 105px)", "overflow": "auto" }}>
                    <h1 className="text-2xl font-bold mb-4">All Products List</h1>
                    <table className="w-full text-left table-auto border-collapse">
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
                </div>
                <div className='CardItem-down py-10 px-3 grid grid-cols-1 md:grid-cols-2 gap-10'>
                    <div className='CardItem-left bg-white shadow-lg rounded-lg p-6'>
                        <h1 className='text-3xl py-3 font-bold text-gray-800'>Cart Totals</h1>
                        <div className='flex justify-between py-2'>
                            <p className='text-gray-600'>Subtotal</p>
                            <span className='text-gray-800'>${gettotalPriceProducts()}</span>
                        </div>
                        <hr className='py-2' />
                        <div className='flex justify-between py-2'>
                            <p className='text-gray-600'>Shipping Fee</p>
                            <span className='text-gray-800'>Free</span>
                        </div>
                        <hr className='py-2' />
                        <div className='flex justify-between py-2'>
                            <p className='font-bold text-gray-800'>Total</p>
                            <span className='text-gray-800'>${gettotalPriceProducts()}</span>
                        </div>
                        <hr className='py-2' />
                        <button className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 mt-4">Add to Cart</button>
                    </div>
                    <div className='CardItem-right bg-white shadow-lg rounded-lg p-6'>
                        <p className='text-slate-500 mb-4'>If you have a promo code, enter it here:</p>
                        <form className="flex items-center bg-gray-100 rounded-full overflow-hidden">
                            <input type="text" placeholder="Promo Code" className="flex-grow p-4 text-sm text-gray-700 outline-none bg-transparent" />
                            <button type="submit" className="p-2 bg-gray-300 hover:bg-gray-400 focus:bg-gray-400 text-gray-600 rounded-full mx-2">
                                <span className='px-5 text-xs'>Apply</span>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

/*
  
*/
export default CardItem

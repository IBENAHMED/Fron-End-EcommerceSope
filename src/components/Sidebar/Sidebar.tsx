import Link from 'next/link';
import addProducts from '../../Assets/Product_Cart.svg'
import listProducts from '../../Assets/Product_list_icon.svg'
import './Sidebar.css'

const Sidebar = () => {
    return (
        <div className='Sidebar'>
            <div className='container mx-auto pt-8 pl-8 flex items-center gap-5 justify-center flex-wrap lg:flex-col'>
                <Link href="/admin">
                    <div className='flex items-center gap-5 bg-slate-200 w-fit rounded py-3 px-5'>
                        <img src={addProducts.src} alt='addProducts' />
                        <p>Add Product</p>
                    </div>
                </Link>
                <Link href="/admin/listProducts">
                    <div className='flex items-center gap-5 bg-slate-200 w-fit rounded py-3 px-5'>
                        <img src={listProducts.src} alt='listProducts' />
                        <p>List Product</p>
                    </div>
                </Link>
            </div>
            <div></div>
        </div>
    )
}

export default Sidebar

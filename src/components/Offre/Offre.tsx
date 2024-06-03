import './Offre.css'
import exclusive_img from '../../Assets/exclusive_image.png'

const Offre = () => {
    return (
        <div className='px-5 container mx-auto mt-20'>
            <div className='relative px-16 py-10 flex flex-wrap justify-between items-center rounded-lg bg-gradient-to-b from-pink-300 to-white shadow-lg animate-fade-in'>
                <div className='offre-left animate-slide-left'>
                    <h1 className='text-2xl md:text-6xl font-bold'>Exclusive</h1>
                    <h1 className='text-2xl md:text-6xl font-bold'>Offers For You</h1>
                    <p className='py-5 text-lg text-gray-700'>ONLY ONE BEST SELLERS PRODUCTS</p>
                    <button className="mt-8 px-6 py-3 bg-red-500 text-white font-semibold rounded-full hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 animate-bounce">
                        Check Now
                    </button>
                </div>
                <div className='offre-right hidden lg:block animate-slide-right'>
                    <img className='w-full h-auto max-w-sm' src={exclusive_img.src} alt='exclusive' />
                </div>
            </div>
        </div>
    )
}

export default Offre

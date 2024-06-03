import './Offre.css'
import exclusive_img from '../../Assets/exclusive_image.png'

const Offre = () => {
    return (
        <div>
            <div className=' px-5 container mx-auto mt-40'>
                <div className='relative px-16 flex justify-between items-center rounded bg-gradient-to-b from-pink-300 to-white'>
                    <div className='offre-left'>
                        <h1 className='text-6xl'>Exclusive</h1>
                        <h1 className='text-6xl'>Offres For You</h1>
                        <p className='py-5'>ONLY ONE BEST SELLERS PRODUCTS</p>
                        <button className="mt-8 px-6 py-3 bg-red-500 text-white font-semibold rounded-full hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50">
                            Check Now
                        </button>
                    </div>
                    <div className='offre-right'>
                        <img style={{ "maxWidth": "75%" }} src={exclusive_img.src} alt='image exclusive' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Offre

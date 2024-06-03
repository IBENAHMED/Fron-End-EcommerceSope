import './NewLetters.css'

const NewLetters = () => {
    return (
        <div>
            <div className='px-5 container mx-auto mt-40' >
                <div className='relative p-16 rounded bg-gradient-to-b from-pink-300 to-white'>
                    <div className='NewLetters text-center'>
                        <h1 className='text-4xl'>Get Exclusive Offers On Your Email</h1>
                        <p className='py-10'>Subscribe to our newsletter and stay update</p>
                        <div className='flex items-center justify-center'>
                            <div className="w-full max-w-md">
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
        </div>
    )
}

export default NewLetters

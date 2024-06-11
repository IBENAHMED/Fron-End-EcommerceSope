import './Popular.css';
import Item from '../Item/Item';
import axios from 'axios';
import Spinner from '../Spinner/Spinner';


const TrendingItem = async () => {


    const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

    let data = await axios.get(`${BASE_URL}/popularWomen`);
    let popularWomen = await data.data.newPopularWomen;

    return (
        <div className='px-5 container mx-auto text-left mt-20'>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
                {
                    popularWomen
                        ? popularWomen.map((item: any, i: any) => {
                            return <Item
                                key={i}
                                id={item._id}
                                name={item.name}
                                image={item.img}
                                new_price={item.new_price}
                                old_price={item.old_price}
                            />
                        })
                        :
                        <div className='col-span-12'>
                            <Spinner />
                        </div>
                }
            </div>
        </div>
    )
}

export default TrendingItem;

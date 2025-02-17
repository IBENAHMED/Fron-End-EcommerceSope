import "./Popular.css";

import axios from "axios";
import Spinner from "../Spinner/Spinner";

import Item from "../Item/Item";

const TrendingItem = async () => {
  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

  const data = await axios.get(`${BASE_URL}/popularWomen`);
  const popularWomen = await data.data.newPopularWomen;

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mb-5 gap-5'>
      {popularWomen ? (
        popularWomen.map((item: any, i: any) => {
          return <Item key={i} id={item._id} name={item.name} image={item.img} new_price={item.new_price} old_price={item.old_price} />
        })
      ) : (
        <div className='col-span-12'><Spinner /></div>
      )}
    </div>
  );
};

export default TrendingItem;
